import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CreateProductDialogComponent } from './components/create-product-dialog/create-product-dialog.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    CreateProductDialogComponent
  ],
  imports: [
    CommonModule,
    SharedModule
  ]
})
export class ProductsModule { }
