import { Component, Input, OnInit, Output } from '@angular/core';
import { Order } from 'src/app/models/order';
import { EventEmitter } from '@angular/core';

@Component({
  selector: 'app-order-item',
  templateUrl: './order-item.component.html',
  styleUrls: ['./order-item.component.css']
})
export class OrderItemComponent implements OnInit {
  @Input() order!: Order;
  @Output() orderDetailsRequest: EventEmitter<Order> = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

  onDetailsRequest(order: Order): void{
    this.orderDetailsRequest.emit(order);
  }
}
