import { Time } from "@angular/common";
import { ShiftService } from "../services/shift.service";
import { Shift } from "./shift";
import { Suborder } from "./suborder";

export class Order {
    public id: number;
    public time: Time;
    public date: Date;
    public total: number;
    public orderList: Suborder[];



  constructor(
    id: number, 
    time: Time, 
    date: Date, 
    total: number, 
    orderList: Suborder[]
) {
    this.id = id
    this.time = time
    this.date = date
    this.total = total
    this.orderList = orderList
  }
    

}
