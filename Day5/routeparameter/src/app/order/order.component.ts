import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.css']
})
export class OrderComponent {
id : number = 0;
observerId : string = "";

constructor(private route : ActivatedRoute)
{}

ngOnInit()
{
  this.id = this.route.snapshot.params['id'];

  this.route.paramMap.subscribe(params =>{
    this.observerId = params.get('id') as string;
  })
}

}
