import { Component, ɵfindLocaleData } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { User } from './User';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'LocalStorage';
   user! : User;
   session : any;

  constructor(private route : Router){}

   ngOnInit()
   {
     this.user = new User({
       username : "",
       password : ""
     });
   }
   
   submitDetails()
   {
    
     localStorage.setItem('session', JSON.stringify({
       'username': this.user.username,
       'password': this.user.password
     }));
     this.route.navigateByUrl("/login");
  }
}
