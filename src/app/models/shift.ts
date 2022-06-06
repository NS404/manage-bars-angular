import { Order } from "./order";
import { User } from "./user";

export class Shift {

    public id: number;
    public date: Date;
    public user: User;
    public total: number;
    public finished: boolean;
    public orders: Order[];


  constructor(
    id: number, 
    date: Date, 
    user: User, 
    total: number, 
    finished: boolean, 
    orders: Order[]
  ) {
    this.id = id
    this.date = date
    this.user = user
    this.total = total
    this.finished = finished
    this.orders = orders
    this.calculateTotal();
  }

  public calculateTotal(){
    var total = 0;

    for(let order of this.orders){
      total += order.total;
    }

    this.total = total;

  }


}
