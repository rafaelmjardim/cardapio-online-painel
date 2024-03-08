import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ProductsService } from '../../products.service';
import { Product } from '../../products';
import { NewProduct } from './create-product-dialog';

@Component({
  selector: 'app-create-product-dialog',
  templateUrl: './create-product-dialog.component.html',
  styleUrls: ['./create-product-dialog.component.scss']
})
export class CreateProductDialogComponent implements OnInit {
  productForm!: FormGroup;

  uploadImg!: any;

  constructor (
    private form_builder: FormBuilder,
    private products_service: ProductsService
  ){}

  ngOnInit(): void {
    this.initProductForm();
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

    this.products_service.postProduct(newProduct).subscribe(res => {
      
    });

    
  }
}
