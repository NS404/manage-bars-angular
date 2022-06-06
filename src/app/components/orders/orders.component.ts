import { Component, Input, OnInit } from '@angular/core';
import { Order } from 'src/app/models/order';

@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.css']
})
export class OrdersComponent implements OnInit {
  @Input() orders!: Order[];
  public selectedOrder?: Order; 

  constructor() { }

  ngOnInit(): void {
  }

  selectOrder(order: Order): void{
    if(this.selectedOrder === order){
      this.selectedOrder =  undefined;
    }else{
      this.selectedOrder = order;
    }
    
  }
  
}
