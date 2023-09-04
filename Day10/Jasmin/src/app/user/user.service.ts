import { Injectable } from '@angular/core';
import { User } from './User';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor() { }

  getUser(): User[]{
    return[
      {
        name : 'Mayur',
        surname : 'Pakhale'
      },
      {
        name : 'Mark',
        surname : 'Henry'
      }
    ];
  }
}
