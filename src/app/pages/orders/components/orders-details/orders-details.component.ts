import { Component, OnInit } from '@angular/core';
import { OrdersService } from '../../orders.service';
import { Order } from '../../orders';

@Component({
  selector: 'app-orders-details',
  templateUrl: './orders-details.component.html',
  styleUrls: ['./orders-details.component.scss']
})
export class OrdersDetailsComponent implements OnInit {
  constructor (
    public orders_service: OrdersService
  ){}

  ngOnInit(): void {

  }
  
}
