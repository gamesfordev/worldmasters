import { Component } from '@angular/core';
import {DataService} from "./service/data.service";
import * as d3 from 'd3';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.less']
})
export class AppComponent {
  title = 'wm-client';
  constructor(private dataService: DataService){
    Promise.all([d3.tsv('/assets/updatedPopulation.tsv')]).then( ([data]) => {
      dataService.mapData = data;
 });
  }
}
