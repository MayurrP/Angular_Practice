import { Component } from '@angular/core';
import { FibonacciServiceService } from '../fibonacci-service.service';

@Component({
  selector: 'app-fibonacci',
  templateUrl: './fibonacci.component.html',
  styleUrls: ['./fibonacci.component.css']
})
export class FibonacciComponent {
  num:number = 0;
  fact:number = 0;

  // constructor(private service : FibonacciServiceService){}
//   fibonacci()
// {
//    this.fact = this.service.fibonacci(this.num);
//    this.num = 0;
// }

fibonacci()
{
  
}

}
