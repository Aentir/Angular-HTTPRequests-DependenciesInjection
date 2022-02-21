import { Component, OnInit } from '@angular/core';
import { franceData } from 'src/app/models/france/franceData.interface';
import { franceWeather } from 'src/app/models/france/franceWeather.interface';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-france',
  templateUrl: './france.component.html',
  styleUrls: ['./france.component.css']
})
export class FranceComponent implements OnInit {

  constructor(public servicio: ApiService) { }
  public data: franceData | undefined;
  public weather: franceWeather | undefined;

  ngOnInit(): void {
    this.getData();
    this.getWeather();
  }

  public getData() {
    this.servicio.getFranceModelData().subscribe(response => {
      console.log(response[0]);
      this.data = response[0];
    });
  }

  public getWeather() {
    this.servicio.getFranceModelWeather().subscribe(response => {
      // console.log(response);
      this.weather = response;
    });
  }

}
