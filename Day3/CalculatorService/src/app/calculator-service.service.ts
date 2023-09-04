import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CalculatorServiceService {

  constructor() { }

  Add():number{
    return 4 + 5;
  }

  Sub():number{
    return 14 - 5;
  }

  Mul():number{
    return 4 * 5;
  }

  Div():number{
    return 15 / 5;
  }
}
