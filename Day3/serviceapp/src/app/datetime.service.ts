import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DatetimeService {

  constructor() { }

  currentDate(): string{
    let todaysDate = new Date();
    return todaysDate.toString();
  }
}
