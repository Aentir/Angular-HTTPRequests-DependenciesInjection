import { Component, OnInit } from '@angular/core';
import { portugalData } from 'src/app/models/portugal/portugalData.interface';
import { portugalWeather } from 'src/app/models/portugal/portugalWeather.interface';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-portugal',
  templateUrl: './portugal.component.html',
  styleUrls: ['./portugal.component.css']
})
export class PortugalComponent implements OnInit {

  constructor(public servicio: ApiService) { }
  public data: portugalData | undefined;
  public weather: portugalWeather | undefined;

  ngOnInit(): void {
    this.getData();
    this.getWeather();
  }

  public getData() {
    this.servicio.getPortugalModelData().subscribe(response => {
      console.log(response[0]);
      this.data = response[0];
    });
  }

  public getWeather() {
    this.servicio.getPortugalModelWeather().subscribe(response => {
      console.log(response);
      this.weather = response;
    });
  }
}
