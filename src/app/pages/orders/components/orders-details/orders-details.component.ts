import { Component, OnDestroy, OnInit } from '@angular/core';
import { OrdersService } from '../../orders.service';
import { Order } from '../../orders';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-orders-details',
  templateUrl: './orders-details.component.html',
  styleUrls: ['./orders-details.component.scss']
})
export class OrdersDetailsComponent implements OnInit, OnDestroy {
  subscription = new Subscription();
  currentOrder!: Order;
  orderNumber!: number;

  constructor (
    public orders_service: OrdersService,
  ){}

  ngOnInit(): void {
    this.setSelectedOrderes();
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

  setSelectedOrderes = () => {
    this.subscription = this.orders_service.selectedOrderStream$.subscribe(currentOrder => {
      if (currentOrder.order) {
        this.currentOrder = currentOrder.order;
        this.orderNumber = currentOrder.orderNumberIndex;        
      }
    })
  }
  
}
