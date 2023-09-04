import { Component } from '@angular/core';
import { User } from '../User';
@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent {

  public gender! : string[];

  public user! : User;

  ngOnInit()
  {
    this.gender = ['Male','Female','Others'];

    this.user = new User({
      email : "", pwd : "",confirm_pwd : "",
      gender : this.gender[0], terms : false
    });
  }

}
