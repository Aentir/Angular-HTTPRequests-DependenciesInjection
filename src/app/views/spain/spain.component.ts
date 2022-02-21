import { Component, OnInit } from '@angular/core';
import { spainData } from 'src/app/models/spain/spainData.interface';
import { spainWeather } from 'src/app/models/spain/spainWeather.interface';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-spain',
  templateUrl: './spain.component.html',
  styleUrls: ['./spain.component.css']
})
export class SpainComponent implements OnInit {

  constructor(public servicio: ApiService) { }
  public data: spainData | undefined;
  public weather: spainWeather | undefined;

  ngOnInit(): void {
    this.getData();
    this.getWeather();
  }

  public getData() {
    this.servicio.getSpainModelData().subscribe(response => {
      //console.log(response[0]);
      this.data = response[0];
    });
  }

  public getWeather() {
    this.servicio.getSpainModelWeather().subscribe(response => {
      // console.log(response);
      this.weather = response;
    });
  }
}
