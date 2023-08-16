import { Component } from '@angular/core';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent{

  title="Product List";
  componylogo = "https://static.toiimg.com/thumb/msid-67586673,width-800,height-600,resizemode-75,imgsize-3918697,pt-32,y_pad-40/67586673.jpg";

  isUnchanged = true;
  constructor(){}

  ngOnInit(){}

  buttonStatus = false;

  buttonClick()
  {
    this.buttonStatus = !this.buttonStatus;
  }

}
