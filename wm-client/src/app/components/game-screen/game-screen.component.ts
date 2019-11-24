import { Component, OnInit } from '@angular/core';
// import * as topojsonData from '../topojson.json';
import * as topojson from 'topojson';
import * as d3 from 'd3';
import { Socket } from 'ngx-socket-io';
import { Router } from '@angular/router';
import {DataService} from 'src/app/service/data.service';

const width = 800;
const height = 800;
let tooltipTest: any;
const projection = d3.geoMercator()
  .translate([ width/2, height/2]);
const path = d3.geoPath()
  .projection(projection);

let svg;
let g;

@Component({
  selector: 'app-game-screen',
  templateUrl: './game-screen.component.html',
  styleUrls: ['./game-screen.component.less']
})
export class GameScreenComponent implements OnInit {

  g: any;
  sessionActive = true;
  mapValues;

  players = [];
  constructor(private socket: Socket, private router: Router, private dataService: DataService) { }
  ngOnInit() {
      this.loadData();
      this.socket.on('playerConnected', (player: any) => {this.playerConnected(player)});
      this.socket.on('receiveMapData', (mapData: any) => {this.receiveMapData(mapData)});
      this.socket.on('sessionEnded', (mapData: any) => {this.sessionEnded(mapData)});
  }

  loadData() {
    tooltipTest = d3.select('#tooltip');

    d3.json('/assets/topojson.json').then((data) => {
        const countries = topojson.feature(data, data.objects.ne_110m_admin_0_countries).features;
        console.log(countries);

        // Define map zoom behaviour

        svg = d3.select('#map')
          .append('svg')
          .attr('height', height)
          .attr('width', width);
        g = svg.append('g');

        g.selectAll('.country')
          .data(countries)
          .enter().append('path')
          .attr('class', 'country')
          .attr('iso_a2', (val) => {
            // console.log(val);
            return val;
          })
          .on('mouseover', (d) => {
              const country = this.dataService.mapData.find((val) => {
              // console.log(val.countryCodeIso2);
                  return val.countryCodeIso2 === d.properties.ISO_A2
              });
              tooltipTest.classed('hide', false);
              if (country) {
              tooltipTest.select('.countryName').text(country.country);
              tooltipTest.select('.totalUsage').text(country.totalUsage);
              //   tooltipTest.select('.totalUsage').text(country.totalUsage);
              } else {
                tooltipTest.select('.countryName').text(d.properties.NAME);
                tooltipTest.select('.totalUsage').text('');
              }
              tooltipTest
                .style('top', (d3.event.layerY + 5) + 'px')
                .style('left', (d3.event.layerX + 5) + 'px');
          })
          .on('mouseout', this.onExit)
          .attr('d', path);


        g.selectAll('g')
          .data(countries)
          .enter()
          .append('g')
          .attr('class', 'countryLabel')

        const countryInfo = g.selectAll('.countryInfo')
          .data(this.dataService.mapData)
          .enter()
          .append('g')
          .attr('class', 'countryInfo');

        countryInfo
          .append('text')
          .classed('hide', true)
          .style('text-anchor', 'middle')
          .attr('dx', 0)
          .attr('dy', 0)
          .attr('transform', (country) => {
              return (
                'translate(' + projection([country.longitude, country.latitude])[0] +
                  ',' + projection([country.longitude, country.latitude])[1] + ')'
              );
          })
          .text( (c) => {
            return c.totalUsage;
          })
      });
  }
  playerConnected(player: any) {
    this.players.push(player);
    console.log(this.players);
  }

  receiveMapData(mapDataItem: any) {
    console.log('receive map data', mapDataItem);
    this.dataService.updateCount(mapDataItem);
    // this.mapData = this.mapData.map((countryData:any) => {
    //   if (Object.keys(mapDataItem)[0] == countryData.country) {
    //     console.log(countryData);
    //     countryData.totalUsage = countryData.totalUsage + Object.values(mapDataItem)[0];
    //     console.log( Object.values(mapDataItem)[0]);
    //   }
    // });
  }

  sessionEnded(mapData: any) {
    this.sessionActive = false;
  }

  startAgain() {
    this.router.navigate(['start']);
  }

  onExit(d) {
    tooltipTest.classed('hide', true);
  }

  copyUrlClick() {
    this.copyMessage('http://localhost:4200');
  }

  copyMessage(val: string){
    const selBox = document.createElement('textarea');
    selBox.style.position = 'fixed';
    selBox.style.left = '0';
    selBox.style.top = '0';
    selBox.style.opacity = '0';
    selBox.value = val;
    document.body.appendChild(selBox);
    selBox.focus();
    selBox.select();
    document.execCommand('copy');
    document.body.removeChild(selBox);
  }

}
