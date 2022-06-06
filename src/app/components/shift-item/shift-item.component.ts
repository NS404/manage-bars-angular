import { Component, Input, OnInit } from '@angular/core';
import { Shift } from 'src/app/models/shift';
import { faUser } from '@fortawesome/free-solid-svg-icons';
import { faDollarSign } from '@fortawesome/free-solid-svg-icons';
@Component({
  selector: 'app-shift-item',
  templateUrl: './shift-item.component.html',
  styleUrls: ['./shift-item.component.css']
})
export class ShiftItemComponent implements OnInit {
  @Input() shift!: Shift;
  public ordersShown: boolean = false;
  userIcon = faUser;
  dollarSignIcon = faDollarSign;



  constructor() { 
   
  }

  ngOnInit(): void {
  }



  showOrdersAction(): void{
    this.ordersShown = !this.ordersShown;
  }

}
