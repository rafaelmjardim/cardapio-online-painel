import { Component, OnInit } from '@angular/core';
import { OrdersService } from '../../orders.service';
import { Order } from '../../orders';
import { map, filter } from "rxjs";

@Component({
  selector: 'app-orders-list',
  templateUrl: './orders-list.component.html',
  styleUrls: ['./orders-list.component.scss']
})
export class OrdersListComponent implements OnInit {
  ordersList: Order[] = [];
  ordersListFiltered: Order[] = [];
  currentOrder!: Order;

  selectFilter: boolean = false;

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
        this.filterOrders(this.selectFilter);
      }
    })
  }

  filterOrders = (filterStatus: boolean) => {
    this.ordersListFiltered = this.ordersList.filter(filter => filter.finalizado === this.selectFilter);    
  }

  changeFilterButton = (filterButtonSelected: boolean) => {
    this.selectFilter = filterButtonSelected;

    this.filterOrders(this.selectFilter);
  }
}
