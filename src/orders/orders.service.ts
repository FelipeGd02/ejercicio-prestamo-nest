import { Injectable } from '@nestjs/common';
import { Order } from './order.interface';

@Injectable()
export class OrdersService {

private orders: Order[] = [
    { id: 1, 
      customer: 'Alice', 
      item: 'Latte', 
      status: 'pending' 
    },
    { id: 2, 
      customer: 'Bob', 
      item: 'Espresso', 
      status: 'ready' 
    },
  ];    





getAllOrders() {
    return this.orders; [];
  }

}