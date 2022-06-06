import { Order } from "./order";
import { Product } from "./product";

  
export class Suborder {
    public no: number;
    public order: Order;
    public product: Product;
    public quantity: number;
    public subtotal: number;

    constructor( 
        no: number,
        order: Order, 
        product: Product, 
        quantity: number, 
        subtotal: number
    ) {
        this.no = no
        this.order = order;
        this.product = product
        this.quantity = quantity
        this.subtotal = subtotal
      }
}

