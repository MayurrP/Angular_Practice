import { Component } from '@angular/core';
import { CalculatorServiceService } from '../calculator-service.service';

@Component({
  selector: 'app-calculator',
  templateUrl: './calculator.component.html',
  styleUrls: ['./calculator.component.css']
})
export class CalculatorComponent {

  constructor(private service: CalculatorServiceService){}

  Add : number = 0;
  Sub : number = 0;
  Mul : number = 0;
  Div : number = 0;

  ngOnInit(){
    this.Add = this.service.Add();
    this.Sub = this.service.Sub();
    this.Mul = this.service.Mul();
    this.Div = this.service.Div();
  }
 
}
