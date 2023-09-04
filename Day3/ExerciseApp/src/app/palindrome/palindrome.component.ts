import { Component } from '@angular/core';

@Component({
  selector: 'app-palindrome',
  templateUrl: './palindrome.component.html',
  styleUrls: ['./palindrome.component.css']
})
export class PalindromeComponent {
str : string ="";
res : string ="";
rstr : string ="";

constructor(){}
palindrome()
{
  this.rstr = this.str.split('').reverse().join('');
  if(this.str === this.rstr)
  {
    this.res = "true";
  }
  else
  {
    this.res = "false";
  }
  this.str="";
}
}
