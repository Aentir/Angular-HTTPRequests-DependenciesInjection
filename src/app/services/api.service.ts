import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(public http: HttpClient) { }
  
  public spainInfo = 'https://restcountries.com/v3.1/name/spain';
  public spainWeather = 'https://api.openweathermap.org/data/2.5/weather?q=spain,esp&units=metric&lang=es&APPID=f2b990c09e6f73102863cfe63a569f43';

  public franceInfo = 'https://restcountries.com/v3.1/name/france';
  public franceWeather = 'https://api.openweathermap.org/data/2.5/weather?q=france,esp&units=metric&lang=es&APPID=f2b990c09e6f73102863cfe63a569f43';

  public portugalInfo = 'https://restcountries.com/v3.1/name/portugal';
  public portugalWeather = 'https://api.openweathermap.org/data/2.5/weather?q=portugal,esp&units=metric&lang=es&APPID=f2b990c09e6f73102863cfe63a569f43';

  public germanyInfo= 'https://restcountries.com/v3.1/name/germany';
  public germanyWeather = 'https://api.openweathermap.org/data/2.5/weather?q=germany,esp&units=metric&lang=es&APPID=f2b990c09e6f73102863cfe63a569f43';


  getSpainModelData():Observable<any>{
    return this.http.get<any>(this.spainInfo);
  }
  getSpainModelWeather():Observable<any>{
    return this.http.get<any>(this.spainWeather);
  }

  getFranceModelData():Observable<any>{
    return this.http.get<any>(this.franceInfo);
  }
  getFranceModelWeather():Observable<any>{
    return this.http.get<any>(this.franceWeather);
  }

  getPortugalModelData():Observable<any>{
    return this.http.get<any>(this.portugalInfo);
  }
  getPortugalModelWeather():Observable<any>{
    return this.http.get<any>(this.portugalWeather);
  }

  getGermanyModelData():Observable<any>{
    return this.http.get<any>(this.germanyInfo);
  }
  getGermanyModelWeather():Observable<any>{
    return this.http.get<any>(this.germanyWeather);
  }
}