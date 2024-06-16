import { Component, OnInit } from '@angular/core';
import { OrdersService } from '../../orders.service';
import { Order } from '../../orders';

@Component({
  selector: 'app-orders-list',
  templateUrl: './orders-list.component.html',
  styleUrls: ['./orders-list.component.scss']
})
export class OrdersListComponent implements OnInit {
  ordersList: Order[] = [];
  currentOrder!: Order;

  filterButton: number = 1;

  constructor (
    public orders_service: OrdersService
  ){}
  
  ngOnInit(): void {
    this.onGetOrders();
  }

  selectOrder = (order: Order, orderNumber: number) => {
    if (order) {
     this.orders_service.updateSelectedOrderSubject(order, orderNumber);
     this.currentOrder = order;
    }
  }

  onGetOrders = () => {
    this.orders_service.getOrders().subscribe({
      next: (pedidos_response) => {
        this.ordersList = pedidos_response;        
      }
    })
  }

  changeFilterButton = (filterButtonSelected: number) => {
    this.filterButton = filterButtonSelected;
  }
}
