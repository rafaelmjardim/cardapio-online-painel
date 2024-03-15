import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OrdersListComponent } from './components/orders-list/orders-list.component';
import { OrdersDetailsComponent } from './components/orders-details/orders-details.component';
import { OrdersComponent } from './orders.component';
import { SharedModule } from 'src/app/shared/shared.module';



@NgModule({
  declarations: [
    OrdersComponent,
    OrdersListComponent,
    OrdersDetailsComponent
  ],
  imports: [
    CommonModule,
    SharedModule
  ]
})
export class OrdersModule { }
