import { Component } from '@angular/core';

@Component({
  selector: 'app-new-componemt',
  template:`<h4>NgSwitch</h4>
  <ul *ngFor = "let employee of employees" [ngSwitch] = "employee.country">
  <li *ngSwitchCase="'India'">{{employee.name}} ({{employee.country}})
  </li>
  <li *ngSwitchCase="'China'">{{employee.name}} ({{employee.country}})
  </li>
  <li *ngSwitchCase="'HK'">{{employee.name}} ({{employee.country}})
  </li>
  <li *ngSwitchDefault [ngStyle] = "{'color' : 'green'}">{{employee.name}} ({{employee.country}})
  </li>
  </ul>`
})

export class NewComponemtComponent {
  employees: any[] = [
  {
  "name": "Mark D",
  "age": 35,
  "country": 'India'
  },
  {
  "name": "Mc Donalds",
  "age": 32,
  "country": 'China'
  },
  {
  "name": "Xin Ping",
  "age": 21,
  "country": 'HK'
  },
  {
  "name": "John Wick",
  "age": 34,
  "country": 'UK'
  },
  {
  "name": "Md Ali",
  "age": 32,
  "country": 'USA'
  }
  ];
  
  }
