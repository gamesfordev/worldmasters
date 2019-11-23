import { Component, OnInit } from '@angular/core';
// import * as topojsonData from '../topojson.json';
import * as topojson from 'topojson';
import * as d3 from 'd3';
import * as mapData from './testData';

const width = 1200;
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
  constructor() {
  }
  ngOnInit() {
    this.loadData();
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
          .on('mouseover', this.onHover)
          .on('mouseout', this.onExit)
          .attr('d', path);


        g.selectAll('g')
          .data(countries)
          .enter()
          .append("g")
          .attr("class", 'countryLabel')

        const countryInfo = g.selectAll(".countryInfo")
          .data(mapData.testData)
          .enter()
          .append("g")
          .attr("class", 'countryInfo');

        countryInfo
          .append("text")
          .classed("hide", true)
          .style("text-anchor", "middle")
          .attr("dx", 0)
          .attr("dy", 0)
          .attr("transform", (country) => {
              return (
                "translate(" + projection([country.longitude, country.latitude])[0] +
                  "," + projection([country.longitude, country.latitude])[1] + ")"
              );
          })
          .text( (c) => {
            return c.totalUsage;
          })
      });
  }

  onHover(d) {

    const country = mapData.testData.find((val) => {
      return val.countryCodeIso2 === d.properties.ISO_A2
    });
    tooltipTest.classed('hide', false);
    if (country) {
      tooltipTest.select('.countryName').text(country.country);
      tooltipTest.select('.totalUsage').text(country.totalUsage);
    } else {
      tooltipTest.select('.countryName').text(d.properties.NAME);
      tooltipTest.select('.totalUsage').text('');
    }
    tooltipTest
      .style("top", (d3.event.layerY + 5) + "px")
      .style("left", (d3.event.layerX + 5) + "px");
  }

  onExit(d) {
    tooltipTest.classed('hide', true);
  }

}
