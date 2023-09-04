import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CalculatorServiceService {

  constructor() { }

  Add(no1 : number,no2 : number):number{
    return no1 + no2;
  }

  Sub(no1 : number,no2 : number):number{
    return no1 - no2;
  }

  Mul(no1 : number,no2 : number):number{
    return no1 * no2;
  }

  Div(no1 : number,no2 : number):number{
    return no1 / no2;
  }
}
