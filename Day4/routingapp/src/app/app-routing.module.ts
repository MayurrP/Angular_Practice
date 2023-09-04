import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { NotfoundComponent } from './notfound/notfound.component';
import { OrderComponent } from './order/order.component';
import { ProductComponent } from './product/product.component';

const routes: Routes =[
  {path : "", pathMatch:"full", redirectTo:"/home"},
  {path : 'order', component : OrderComponent},
  {path : 'home', component : HomeComponent},
  {path : 'product', component : ProductComponent},
  {path : '**', component : NotfoundComponent}
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
