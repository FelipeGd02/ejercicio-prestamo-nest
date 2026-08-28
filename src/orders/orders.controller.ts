import { Controller, Delete, Get } from '@nestjs/common';
import { OrdersService } from './orders.service';
import { get } from 'http';

@Controller('orders')
export class OrdersController {
  constructor(private readonly ordersService: OrdersService) {}


  @Get ()
  getAllOrders() {
       return this.ordersService.getAllOrders();
  }


  }