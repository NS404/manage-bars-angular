import { Component, Input, OnInit } from '@angular/core';
import { Order } from 'src/app/models/order';
import { Suborder } from 'src/app/models/suborder';

@Component({
  selector: 'app-order-details',
  templateUrl: './order-details.component.html',
  styleUrls: ['./order-details.component.css']
})
export class OrderDetailsComponent implements OnInit {
  @Input() orderList?: Suborder[];

  constructor() { }

  ngOnInit(): void {
  }

}
