import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent {
products! : any;
findProduct! : string; 
productdata! : any;

constructor(private http : HttpClient){}

ngOnInit(){
  this.http.get("http://localhost:5035/api/Products").subscribe(data =>{
    this.products = data;
    console.log(data);
  },
  err =>{
    console.log("Error Occured.");
  });
}

searchProduct()
{
  console.log(this.findProduct);
  this.http.get("http://localhost:5035/api/Products/"+this.findProduct).subscribe(data =>{
    console.log(data);
    this.productdata = data;
    console.log(this.productdata);
  },
  err =>{
    console.log("Error Occured.");
  });
}

}
