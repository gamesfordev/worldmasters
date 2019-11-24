import { Injectable } from '@angular/core';
import * as mapData from './testData';
import * as d3 from 'd3';
@Injectable()
export class DataService {
  public mapData;

constructor() {

}

public updateCount(mapDataItem: any) {
  this.mapData.map((countryData: any) => {
    console.log(countryData);
      Object.keys(mapDataItem).map((data:any, i:number)=> {
        if(data == countryData.name){
          countryData.population = Object.values(mapDataItem)[i];
        }
      });
    });
}


}
