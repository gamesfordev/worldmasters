import { Injectable } from '@angular/core';
import * as mapData from './testData';

@Injectable()
export class DataService {
  public mapData = mapData.testData;

constructor() { }

public updateCount(mapDataItem: any) {
  this.mapData.map((countryData: any) => {
      if (Object.keys(mapDataItem)[0] == countryData.country) {
        countryData.totalUsage = Object.values(mapDataItem)[0];
      }
    });
}


}
