import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PalindromeComponent } from './palindrome/palindrome.component';
import { FormsModule } from '@angular/forms';
import { FizzBuzzComponent } from './fizz-buzz/fizz-buzz.component';
import { FactorialComponent } from './factorial/factorial.component';
import { FibonacciComponent } from './fibonacci/fibonacci.component';
@NgModule({
  declarations: [
    AppComponent,
    PalindromeComponent,
    FizzBuzzComponent,
    FactorialComponent,
    FibonacciComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
