import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FactServiceService {

  constructor() { }

  factorial(num : number):number
  {
    if(num == 1)
    {
      return 1;
    }
    else{
    return num * this.factorial(num - 1);
  }
  }
}