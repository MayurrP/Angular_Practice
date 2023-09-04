import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';

@Component({
  selector: 'app-values',
  templateUrl: './values.component.html',
  styleUrls: ['./values.component.css']
})
export class ValuesComponent {
  values! : any;

  constructor(private http : HttpClient){}

  ngOnInit()
  {
    this.http.get('http://localhost:5035/api/Values').subscribe(data =>{
      this.values = data;
      console.log(data);
    },
    err =>{
      console.log("Error Occured.");
    });
  }
}
