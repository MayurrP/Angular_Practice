import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminComponent } from './admin/admin.component';
import { RouterModule } from '@angular/router';
import { CustomerComponent } from './customer/customer.component';
import { ManagerComponent } from './manager/manager.component';



@NgModule({
  declarations: [
    AdminComponent,
    CustomerComponent,
    ManagerComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(
      [
        {path : 'admin',component : AdminComponent},
        {path : 'customer',component : CustomerComponent},
        {path : 'manager',component : ManagerComponent}
      ]
    )
  ]
})
export class UserModule { }
