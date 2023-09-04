import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent {

  @Input() parentData: string = "";
  @Input() departmentData : string = "";

  @Output() childEvent = new EventEmitter<string>();

  onChange(value: string)
  {
    this.childEvent.emit(value);
  }
  constructor(){}
}
