import {
  Component,
  OnInit,
  ViewEncapsulation
} from '@angular/core';
import * as topojson from 'topojson';
import * as d3 from 'd3';
import d3Tip from 'd3-tip' // works
import {
  Socket
} from 'ngx-socket-io';
import {
  Router
} from '@angular/router';
import {
  DataService
} from 'src/app/service/data.service';
import {
  ToastrService
} from 'ngx-toastr';

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
  scores = [];

  timerText = "00:00";
  won = "";

  players = [];
  constructor(private socket: Socket,
      private router: Router,
      private dataService: DataService,
      private toastr: ToastrService) {}
  ngOnInit() {
      // this.sessionActive = false;
      this.loadMap();
      this.socket.on('playerConnected', (player: any) => {
          this.playerConnected(player)
      });
      this.socket.on('receiveMapData', (mapData: any) => {
          this.receiveMapData(mapData)
      });
      this.socket.on('sessionEnded', (scores: any) => {
          this.sessionEnded(scores)
      });
      this.socket.on('timerTick', (timer: any) => {
          this.timerTick(timer)
      });
  }

  timerTick(timer: any) {
      if (timer.diff >= 0)
          this.timerText = (parseInt(timer.diff) / 60).toFixed(0).toString().padStart(2, '0') + ':' + (parseInt(timer.diff) % 60).toFixed(0).toString().padStart(2, '0')
  }

  loadMap() {
      var format = d3.format(",");
      const d3tip = d3Tip()
      // Set tooltips
      var tip = d3tip
          .attr('class', 'd3-tip')
          .offset([-10, 0])
          .html(function(d) {
              return "<strong>Country: </strong><span class='details'>" + d.properties.name + "<br></span>" + "<strong>Users: </strong><span class='details'>" + format(d.population) + "</span>";
          })

      tip.direction(function(d) {
          if (d.properties.name === 'Antarctica') return 'n'
          // Americas
          if (d.properties.name === 'Greenland') return 's'
          if (d.properties.name === 'Canada') return 'e'
          if (d.properties.name === 'USA') return 'e'
          if (d.properties.name === 'Mexico') return 'e'
          // Europe
          if (d.properties.name === 'Iceland') return 's'
          if (d.properties.name === 'Norway') return 's'
          if (d.properties.name === 'Sweden') return 's'
          if (d.properties.name === 'Finland') return 's'
          if (d.properties.name === 'Russia') return 'w'
          // Asia
          if (d.properties.name === 'China') return 'w'
          if (d.properties.name === 'Japan') return 's'
          // Oceania
          if (d.properties.name === 'Indonesia') return 'w'
          if (d.properties.name === 'Papua New Guinea') return 'w'
          if (d.properties.name === 'Australia') return 'w'
          if (d.properties.name === 'New Zealand') return 'w'
          // otherwise if not specified
          return 'n'
      })

      tip.offset(function(d) {
          // [top, left]
          if (d.properties.name === 'Antarctica') return [0, 0]
          // Americas
          if (d.properties.name === 'Greenland') return [10, -10]
          if (d.properties.name === 'Canada') return [24, -28]
          if (d.properties.name === 'USA') return [-5, 8]
          if (d.properties.name === 'Mexico') return [12, 10]
          if (d.properties.name === 'Chile') return [0, -15]
          // Europe
          if (d.properties.name === 'Iceland') return [15, 0]
          if (d.properties.name === 'Norway') return [10, -28]
          if (d.properties.name === 'Sweden') return [10, -8]
          if (d.properties.name === 'Finland') return [10, 0]
          if (d.properties.name === 'France') return [-9, 66]
          if (d.properties.name === 'Italy') return [-8, -6]
          if (d.properties.name === 'Russia') return [5, 385]
          // Africa
          if (d.properties.name === 'Madagascar') return [-10, 10]
          // Asia
          if (d.properties.name === 'China') return [-16, -8]
          if (d.properties.name === 'Mongolia') return [-5, 0]
          if (d.properties.name === 'Pakistan') return [-10, 13]
          if (d.properties.name === 'India') return [-11, -18]
          if (d.properties.name === 'Nepal') return [-8, 1]
          if (d.properties.name === 'Myanmar') return [-12, 0]
          if (d.properties.name === 'Laos') return [-12, -8]
          if (d.properties.name === 'Vietnam') return [-12, -4]
          if (d.properties.name === 'Japan') return [5, 5]
          // Oceania
          if (d.properties.name === 'Indonesia') return [0, -5]
          if (d.properties.name === 'Papua New Guinea') return [-5, -10]
          if (d.properties.name === 'Australia') return [-15, 0]
          if (d.properties.name === 'New Zealand') return [-15, 0]
          // otherwise if not specified
          return [-10, 0]
      })

      var margin = {
              top: 0,
              right: 0,
              bottom: 0,
              left: 0
          },
          width = 800 - margin.left - margin.right,
          height = 500 - margin.top - margin.bottom;

      var color = d3.scaleThreshold()
          .domain([0, 1, 10, 25, 50, 100, 300, 750, 1500])
          .range(["rgb(3,19,43)", "rgb(8,48,107)", "rgb(8,81,156)", "rgb(33,113,181)", "rgb(66,146,198)", "rgb(107,174,214)", "rgb(158,202,225)", "rgb(198,219,239)", "rgb(222,235,247)", "rgb(247,251,255)"]);

      var path = d3.geoPath();

      var svg = d3.select("#map")
          .append("svg")
          .attr("width", width)
          .attr("height", height)
          .append('g')
          .attr('class', 'map');

      var projection = d3.geoMercator()
          .scale(130)
          .translate([width / 2, height / 1.5]);

      var path = d3.geoPath().projection(projection);

      svg.call(tip);

      Promise.all([
          d3.json("/assets/world_countries.json")
      ]).then(([data]) => {
          let population = this.dataService.mapData;
          console.log(population)
          // this.dataService.mapData = population;
          var populationById = {};
          population.forEach(function(d) {
              populationById[d.id] = +d.population;
          });
          data.features.forEach(function(d) {
              d.population = populationById[d.id]
          });


          svg.append("g")
              .attr("class", "countries")
              .selectAll("path")
              .data(data.features)
              .enter().append("path")
              .attr("d", path)
              .style("fill", function(d) {
                  return color(populationById[d.id]);
              })
              .style('stroke', 'white')
              .style('stroke-width', 1.5)
              .style("opacity", 0.8)
              // tooltips
              .style("stroke", "white")
              .style('stroke-width', 0.3)
              .on('mouseover', function(d) {
                  tip.show(d, this);

                  d3.select(this)
                      .style("opacity", 1)
                      .style("stroke", "white")
                      .style("stroke-width", 3);
              })
              .on('mouseout', function(d, ) {
                  tip.hide(d, this);

                  d3.select(this)
                      .style("opacity", 0.8)
                      .style("stroke", "white")
                      .style("stroke-width", 0.3);
              });

          svg.append("path")
              .datum(topojson.mesh(data.features, function(a, b) {
                  return a.id !== b.id;
              }))
              // .datum(topojson.mesh(data.features, function(a, b) { return a !== b; }))
              .attr("class", "names")
              .attr("d", path);
          // do stuff
      }).catch(err => console.log('Error loading or parsing data.'))
  }



  playerConnected(player: any) {
      console.log("player", player);

      this.toastr.info(player.name + ' from ' + player.country + ' joined', '', {
          positionClass: 'toast-bottom-left'
      });
  }

  receiveMapData(mapDataItem: any) {
      // assuming data is as such -- mapDataItem = {"Sri Lanka": 1,"India":2 };
      // console.log('receive map data', mapDataItem);
      this.dataService.updateCount(mapDataItem);
      this.scores = Object.keys(mapDataItem).map(function(key) {
          return {
              country: key,
              score: mapDataItem[key]
          };
      }).sort((a, b) => (b.score - a.score)).slice(0, 5);
  }

  sessionEnded(scores: any) {
      this.sessionActive = false;
      this.won = scores[0].country;
  }

  startAgain() {
      this.router.navigate(['']);
  }

  copyUrlClick() {
      this.copyMessage(location.origin);
  }

  copyMessage(val: string) {
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
      this.toastr.success('Copied to clipboard!', '', {
        positionClass: 'toast-bottom-left'
    });
  }

}