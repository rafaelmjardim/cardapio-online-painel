import { Order } from './orders';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class OrdersService {

  currentOrder!: Order; //variavel para o pedido selecionado
  currentOrderNumber!: number;

  constructor() { }
}
