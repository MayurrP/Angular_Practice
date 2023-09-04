import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutUsComponent } from './about-us/about-us.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { HomeComponent } from './home/home.component';
import { NotfoundComponent } from './notfound/notfound.component';
import { ProductComponent } from './product/product.component';

const routes: Routes = [
  {path : "", pathMatch:"full", redirectTo:"/home"},
  {path : 'home', component : HomeComponent},
  {path : 'product', component : ProductComponent},
  {path : 'contact-us', component : ContactUsComponent},
  {path : 'about-us', component : AboutUsComponent},
  {path : '**', component : NotfoundComponent}
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
