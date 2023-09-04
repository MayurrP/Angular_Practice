import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Product } from '../Product';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent {
  product = "";
  allproducts! : Product[];

  constructor(private router : Router){}

  ngOnInit(){
  this.product = localStorage.getItem('cart_data') as string;
  this.allproducts = JSON.parse(this.product);
}

payment()
{
  this.router.navigateByUrl('payment');
}
back()
{
  this.router.navigateByUrl('product');

}

}
