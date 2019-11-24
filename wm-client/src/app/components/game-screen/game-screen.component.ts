import { Component, OnInit, ViewEncapsulation } from '@angular/core';
// import * as topojsonData from '../topojson.json';
import * as topojson from 'topojson';
import * as d3 from 'd3';
import d3Tip from 'd3-tip' // works
import { Socket } from 'ngx-socket-io';
import { Router } from '@angular/router';
import {DataService} from 'src/app/service/data.service';
import { ToastrService } from 'ngx-toastr';
// import {readSync} from "fs";
// d3.tip = require("d3-tip");
const width = window.screen.availWidth - 500;
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
  styleUrls: ['./game-screen.component.less'],
  encapsulation: ViewEncapsulation.Emulated
})
export class GameScreenComponent implements OnInit {

  g: any;
  sessionActive = true;
  mapValues;

  timerText = "00:00";

  players = [];
  constructor(private socket: Socket, 
    private router: Router, 
    private dataService: DataService,
    private toastr: ToastrService) { }
  ngOnInit() {
      this.loadData();
      this.socket.on('playerConnected', (player: any) => {this.playerConnected(player)});
      this.socket.on('receiveMapData', (mapData: any) => {this.receiveMapData(mapData)});
      this.socket.on('sessionEnded', (mapData: any) => {this.sessionEnded(mapData)});
      this.socket.on('timerTick', (timer: any) => {this.timerTick(timer)});
  }

  timerTick(timer: any) {
    if(timer.diff >= 0 )
      this.timerText = (parseInt(timer.diff) / 60).toFixed(0).toString().padStart(2, '0') + ':' + (parseInt(timer.diff) % 60).toFixed(0).toString().padStart(2, '0')
  }

  loadData() {
    tooltipTest = d3.select('#tooltip');
    let color = d3.scaleThreshold()
    .domain([10000, 100000, 500000, 1000000, 5000000, 10000000, 50000000, 100000000, 500000000, 1500000000])
    .range(["rgb(247,251,255)", "rgb(222,235,247)", "rgb(198,219,239)", "rgb(158,202,225)", "rgb(107,174,214)"]);

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
          // .style("fill",  function(d) { return color(populationById[d.id]); })
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
          .style('text-anchor', 'middle')
          .attr('dx', 0)
          .attr('dy', 0)
          .attr('transform', (country) => {
              return (
                'translate(' + projection([country.longitude, country.latitude])[0] +
                  ',' + projection([country.longitude, country.latitude])[1] + ')'
              );
          });
          // .text( (c) => {
          //   return c.totalUsage;
          // });
      });
  }

  loadlatestmap(){
    var format = d3.format(",");
    const d3tip = d3Tip()
    // Set tooltips
    var tip =d3tip
                .attr('class', 'd3-tip')
                .offset([-10, 0])
                .html(function(d) {
                  return "<strong>Country: </strong><span class='details'>" + d.properties.name + "<br></span>" + "<strong>Users: </strong><span class='details'>" + format(d.population) +"</span>";
                })

    var margin = {top: 0, right: 0, bottom: 0, left: 0},
                width = 960 - margin.left - margin.right,
                height = 500 - margin.top - margin.bottom;

    var color = d3.scaleThreshold()
        .domain([10000,100000,500000,1000000,5000000,10000000,50000000,100000000,500000000,1500000000])
        .range(["rgb(247,251,255)", "rgb(222,235,247)", "rgb(198,219,239)", "rgb(158,202,225)", "rgb(107,174,214)", "rgb(66,146,198)","rgb(33,113,181)","rgb(8,81,156)","rgb(8,48,107)","rgb(3,19,43)"]);

    var path = d3.geoPath();

    var svg = d3.select("body")
                .append("svg")
                .attr("width", width)
                .attr("height", height)
                .append('g')
                .attr('class', 'map');

    var projection = d3.geoMercator()
                      .scale(130)
                      .translate( [width / 2, height / 1.5]);

    var path = d3.geoPath().projection(projection);

    svg.call(tip);

    Promise.all([
        d3.json("/assets/world_countries.json"),
        d3.tsv('/assets/world_population.tsv')]).then( ([data, population]) => {
          console.log(population);
          // d3.json('/assets/topojson.json')
          
            var populationById = {};
      
            population.forEach(function(d) { populationById[d.countryCodeIso2] = +d.totalUsage; });
            data.features.forEach(function(d) { d.totalUsage = populationById[d.countryCodeIso2] });
      
            svg.append("g")
                .attr("class", "countries")
              .selectAll("path")
                .data(data.features)
              .enter().append("path")
                .attr("d", path)
                .style("fill", function(d) { return color(populationById[d.countryCodeIso2]); })
                .style('stroke', 'white')
                .style('stroke-width', 1.5)
                .style("opacity",0.8)
                // tooltips
                  .style("stroke","white")
                  .style('stroke-width', 0.3)
                  .on('mouseover',function(d){
                    tip.show(d, this);
      
                    d3.select(this)
                      .style("opacity", 1)
                      .style("stroke","white")
                      .style("stroke-width",3);
                  })
                  .on('mouseout', function(d,){
                    tip.hide(d, this);
      
                    d3.select(this)
                      .style("opacity", 0.8)
                      .style("stroke","white")
                      .style("stroke-width",0.3);
                  });
      
            svg.append("path")
                .datum(topojson.mesh(data.features, function(a, b) { return a.id !== b.id; }))
                // .datum(topojson.mesh(data.features, function(a, b) { return a !== b; }))
                .attr("class", "names")
                .attr("d", path);
          // do stuff
      }).catch(err => console.log('Error loading or parsing data.'))
  }

  playerConnected(player: any) {
    this.toastr.info(player.name + ' from ' + player.country + ' joined', '', {
      positionClass: 'toast-bottom-left'
    });
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
