import { Component } from '@angular/core';
import { AppComponent } from '../app.component';
import { User } from '../User';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  data :any;
  session :any;

   ngOnInit()
   {
    this.data = localStorage.getItem('session'); 
    this.session = JSON.parse(this.data);
   }
  
    
}
