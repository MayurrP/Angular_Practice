import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';

@Component({
  selector: 'app-weatherforcast',
  templateUrl: './weatherforcast.component.html',
  styleUrls: ['./weatherforcast.component.css']
})
export class WeatherforcastComponent {

  weatherdata! : any;
  
  constructor(private http : HttpClient){}

  ngOnInit(){
    this.http.get('http://localhost:5035/WeatherForecast').subscribe(data =>{
      this.weatherdata = data;
      console.log(data);
    },
    err =>{
      console.log("Error Occured.");
    });
  }
}
