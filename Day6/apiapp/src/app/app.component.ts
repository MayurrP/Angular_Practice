import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { UserResponse } from './UserResponse';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'apiapp';
  login! : string;
  bio! : string;
  posts : any;

  constructor(private http : HttpClient)
  {
    //Http post
    // const req = this.http.post('http://jsonplaceholder.typicode.com/posts',
    // {
    //   title : 'foo',
    //   body : 'bar',
    //   userId : 1
    // })
    // .subscribe(
    //   res => {
    //     console.log(res);
    //   },
    //   err =>{
    //     console.log("Error Occured.");
    //   }
    // );
    // Http get
    this.http.get('http://jsonplaceholder.typicode.com/posts').subscribe(data =>{
      this.posts = data;
      // console.log("User Login : "+data.login);
      // console.log("Bio : "+data.bio);
      // console.log("Company : "+data.company);
      // this.login = data.login;
      // this.bio = data.bio;
    },
    err =>{
      console.log("Error Occured.");
    });

    // this.http.get('https://github.com/mikeleguedes/json-movie-list/blob/master/movies/1975/monty-python-and-the-holy-grail.json').subscribe(data =>{
    //   this.posts = data;
    //   // console.log("User Login : "+data.login);
    //   // console.log("Bio : "+data.bio);
    //   // console.log("Company : "+data.company);
    //   // this.login = data.login;
    //   // this.bio = data.bio;
    // },
    // err =>{
    //   console.log("Error Occured.");
    // });


    //Http put
    // const reqput = this.http.put('puturl',
    // {
    //   title : 'foo',
    //   body : 'bar',
    //   userId : 1
    // })
    // .subscribe(
    //   res => {
    //     console.log(res);
    //   },
    //   err =>{
    //     console.log("Error Occured.");
    //   }
    // );

    // //Http delete
    // const reqdelet = this.http.delete('deleteurl')
    // .subscribe(
    //   res => {
    //     console.log(res);
    //   },
    //   err =>{
    //     console.log("Error Occured.");
    //   }
    // );


  }
}
