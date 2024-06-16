import { Component, OnDestroy, OnInit } from '@angular/core';
import { OrdersService } from '../../orders.service';
import { Cart, Order } from '../../orders';
import { Subscription } from 'rxjs';
import { UtilsService } from 'src/app/services/utils/utils.service';

@Component({
  selector: 'app-orders-details',
  templateUrl: './orders-details.component.html',
  styleUrls: ['./orders-details.component.scss']
})
export class OrdersDetailsComponent implements OnInit, OnDestroy {
  subscription = new Subscription();
  currentOrder!: Order;
  orderNumber!: number;

  API_URL!: string;

  constructor (
    private utils_service: UtilsService,
    public orders_service: OrdersService
  ){}

  ngOnInit(): void {
    this.setSelectedOrderes();
    this.API_URL = this.utils_service.returnURLServer();
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

  finishSubmit = () => {
    //editar pedido para finaliza-lo

    const editOrder: Order = {...this.currentOrder, finalizado: true}
    
    this.orders_service.putFinishOrder(editOrder).subscribe(editOrder => {
      console.log('editado');
    })
  }  
}
