import { Component } from '@angular/core';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent {
 products = [{
  name : "Chai",
  qty : "10 boxes x 20 bags",
  price : 18,
  type : "Beverages" 
 }
]
}
