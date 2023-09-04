import { Component } from '@angular/core';
import { FactServiceService } from '../fact-service.service';

@Component({
  selector: 'app-factorial',
  templateUrl: './factorial.component.html',
  styleUrls: ['./factorial.component.css']
})
export class FactorialComponent {
  num:number = 0;
  fact:number = 0;

  constructor(private service : FactServiceService){}
  factorial()
{
   this.fact = this.service.factorial(this.num);
   this.num = 0;
}
}
