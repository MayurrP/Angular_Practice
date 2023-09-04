import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FibonacciServiceService {

  constructor() { }
  fibonacci(num : number):number
  {
    if(num == 1)
    {
      return 1;
    }
    else 
    {
      return this.fibonacci(num - 1) + this.fibonacci(num - 2);
    }
  }
}
