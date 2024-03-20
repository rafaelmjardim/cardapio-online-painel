import { Component, OnInit } from '@angular/core';
import { Order } from '../../orders';
import { OrdersService } from '../../orders.service';

@Component({
  selector: 'app-orders-list',
  templateUrl: './orders-list.component.html',
  styleUrls: ['./orders-list.component.scss']
})
export class OrdersListComponent implements OnInit {
  ordersList!: Order[];

  currentOrder!: Order;

  constructor (
    public orders_service: OrdersService
  ){}
  
  ngOnInit(): void {
    this.initOrders();
  }

  selectOrder = (order: Order, orderNumber: number) => {
    if (order) {
      this.orders_service.currentOrder = order;      
      this.orders_service.currentOrderNumber = orderNumber;
    }
  }

  initOrders = () => {
    this.ordersList = [
      {
        codigo: 1,
        data_venda: '15/03/2024',
        hora_venda: '14:00',
        id_cliente: 2,
        id_produto: 22,
        mesa: 1,
        status: 'aguardando',
        valor: 22
      },
      {
        codigo: 2,
        data_venda: '15/03/2024',
        hora_venda: '15:00',
        id_cliente: 5,
        id_produto: 22,
        mesa: 2,
        status: 'aguardando',
        valor: 21
      },
      {
        codigo: 3,
        data_venda: '15/03/2024',
        hora_venda: '15:30',
        id_cliente: 1,
        id_produto: 22,
        mesa: 6,
        status: 'aguardando',
        valor: 20
      },
    ]
  }
}
