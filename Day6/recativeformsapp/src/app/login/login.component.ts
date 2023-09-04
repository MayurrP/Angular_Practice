import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';
import { User } from '../User';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  "loginForm" : FormGroup;
  isSubmitted = false;

  constructor(private router : Router,private formBuilder : FormBuilder,private service : AuthService){}

  ngOnInit(){
    this.loginForm = this.formBuilder.group({
      email : ['',Validators.required],
      password : ['',Validators.required]
    });
  }

  get formControls(){ return this.loginForm.controls;}

  login()
  {
    console.log(this.loginForm.value);
    this.isSubmitted = true;
    if(this.loginForm.invalid)
    {
      return;
    }
     this.service.login(new User());
     this.router.navigateByUrl("admin");
  }
}
