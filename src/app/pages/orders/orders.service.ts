import { HttpClient, HttpParams } from '@angular/common/http';
import { GET_PEDIDOS_RESPONSE, Order, SubjectOrder } from './orders';
import { Injectable } from '@angular/core';
import { environment } from 'src/environment/environment.prod';
import { BehaviorSubject, Observable, Subject } from 'rxjs';

const API_KEY = environment.JSON_SERVER;

@Injectable({
  providedIn: 'root'
})
export class OrdersService {
  private subjects = {
    selectedOrder: new BehaviorSubject<SubjectOrder>({order: null, orderNumberIndex: 0}),
    filterOrderList: new BehaviorSubject<{orderFinalized: boolean}>({orderFinalized: false})
  }

  streams = {
    selectedOrder$: this.subjects.selectedOrder.asObservable(),
    filterOrderStream$: this.subjects.filterOrderList.asObservable()
  }

  constructor(private http: HttpClient) { }

  updateSelectedOrderSubject = (order: Order, orderNumberIndex: number) => {
    this.subjects.selectedOrder.next({order, orderNumberIndex});
  }

  updateFilterOrderList = (filterOrder: boolean) => {
    this.subjects.filterOrderList.next({orderFinalized: filterOrder});
  }

  getOrders = (): Observable<GET_PEDIDOS_RESPONSE> => {
    return this.http.get<GET_PEDIDOS_RESPONSE>(`${API_KEY}/pedidos`)
  }

  putFinishOrder = (orderEdit: Order) => {
    return this.http.put(`${API_KEY}/pedidos/${orderEdit.id}`, {
      ...orderEdit,
      finalizado: orderEdit.finalizado
    })
  }
}
