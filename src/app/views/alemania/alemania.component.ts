import { Component, OnInit } from '@angular/core';
import { germanyData } from 'src/app/models/germany/germanyData.interface';
import { germanyWeather } from 'src/app/models/germany/germanyWeather.interface';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-alemania',
  templateUrl: './alemania.component.html',
  styleUrls: ['./alemania.component.css']
})
export class AlemaniaComponent implements OnInit {

  constructor(public servicio: ApiService) { }
  public data: germanyData | undefined;
  public weather: germanyWeather | undefined;

  ngOnInit(): void {
    this.getData();
    this.getWeather();
  }
  
  public getData() {
    this.servicio.getGermanyModelData().subscribe(response => {
      //console.log(response[0]);
      this.data = response[0];
    });
  }

  public getWeather() {
    this.servicio.getGermanyModelWeather().subscribe(response => {
      //console.log(response);
      this.weather = response;
    });
  }

}
