import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ProductsService } from '../../products.service';
import { Product } from '../../products';
import { NewProduct } from './create-product-dialog';
import { MatDialog } from '@angular/material/dialog';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-create-product-dialog',
  templateUrl: './create-product-dialog.component.html',
  styleUrls: ['./create-product-dialog.component.scss']
})
export class CreateProductDialogComponent implements OnInit, OnDestroy {
  subscription!: Subscription
  
  productForm!: FormGroup;
  uploadImg!: any;

  getProductsSubscription!: Function;

  constructor (
    private form_builder: FormBuilder,
    private products_service: ProductsService,
    private matdialog: MatDialog
  ){}

  ngOnInit(): void {
    this.initProductForm();
    this.onGetProductSubscription();
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

  onGetProductSubscription = () => {
    this.subscription = this.products_service.getProductsStream$.subscribe(getProductFunction => {
      this.getProductsSubscription = getProductFunction;
    })
  }

  initProductForm = () => {
    this.productForm = this.form_builder.group({
      productNameInput: [''],
      productDescriptionInput: [''],
      productValueInput: [''],
      productCategoryInput: [''],
      productFileInput: ['']
    })
  }

  changeUploadFile = (event: any) => {
    const target = event.target
    this.uploadImg = target.files[0];    
  }

  handleSubmitProduct = () => {

    const newProduct: NewProduct = {
      name: this.productForm.controls['productNameInput'].value,
      value: this.productForm.controls['productValueInput'].value,
      description: this.productForm.controls['productDescriptionInput'].value,
      category: this.productForm.controls['productCategoryInput'].value,
      file: this.uploadImg
    }

    this.products_service.postProduct(newProduct).subscribe({
      next: (products_response) => {
        this.getProductsSubscription();
        this.matdialog.closeAll();
      }
    })
  }
}
