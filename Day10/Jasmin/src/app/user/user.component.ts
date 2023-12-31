import { Component } from '@angular/core';
import { User } from './User';
import { UserService } from './user.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent {
    text = 'user page';
    users! : User[];

    constructor(private userService : UserService)
    {
      this.users = this.userService.getUser();
    }

}
