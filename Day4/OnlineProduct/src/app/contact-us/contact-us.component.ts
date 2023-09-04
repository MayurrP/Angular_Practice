import { Component } from '@angular/core';

@Component({
  selector: 'app-contact-us',
  templateUrl: './contact-us.component.html',
  styleUrls: ['./contact-us.component.css']
})
export class ContactUsComponent {
firstName : string = "";
lastName : string = "";
email : string = "";
msg : string = ""; 

constructor(){}

submit()
{
  alert("Thank u For Contact Us "+this.firstName);
  this.firstName = "";
  this.lastName = "";
  this.email = "";
  this.msg = "";
}

}
