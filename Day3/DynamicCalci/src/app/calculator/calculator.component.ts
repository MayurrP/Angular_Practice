import { Component } from '@angular/core';
import { CalculatorServiceService } from '../calculator-service.service';

@Component({
  selector: 'app-calculator',
  templateUrl: './calculator.component.html',
  styleUrls: ['./calculator.component.css']
})
export class CalculatorComponent {
res : number = 0;
num1 : number = 0;
num2 : number = 0;


constructor(private service : CalculatorServiceService){}



add()
{
  this.res = this.service.Add(this.num1,this.num2);
  this.num1 = 0;
  this.num2 = 0;
}
sub()
{
  this.res = this.service.Sub(this.num1,this.num2);
  this.num1 = 0;
  this.num2 = 0;
}
mul()
{
  this.res = this.service.Mul(this.num1,this.num2);
  this.num1 = 0;
  this.num2 = 0;
}
div()
{
  this.res = this.service.Div(this.num1,this.num2);
  this.num1 = 0;
  this.num2 = 0;
}
}
