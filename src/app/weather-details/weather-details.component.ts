import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';

interface weatherCity{
  name:string;
  weather:string,
  status:[string,string]
}
interface weatherAPI{
  page:number,
  per_page:number,
  total:number,
  total_pages:number,
  data:weatherCity[]
}

@Component({
  selector: 'app-weather-details',
  templateUrl: './weather-details.component.html',
  styleUrls: ['./weather-details.component.scss']
})
export class WeatherDetailsComponent {
  weatherData!: weatherAPI;
  name:string='';
  degree!:number;
  cityData=false;
  constructor(private http:HttpClient){

  }

  ngOnInit(){

  }
  search(){
    let url= 'https://jsonmock.hackerrank.com/api/weather?name=';

    this.http.get<weatherAPI>(`${url}${this.name}`).subscribe((val)=>{
      this.weatherData=val
      if(this.weatherData.data.length>0){
        //this.degree=Number(this.weatherData.data[0].weather.substring(0,2));
        this.degree=Number(this.weatherData.data[0].weather.split(' ')[0])
        this.cityData=true;
      }
    })
  }
}
