import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ProductsService } from '../../products.service';

@Component({
  selector: 'app-create-product-dialog',
  templateUrl: './create-product-dialog.component.html',
  styleUrls: ['./create-product-dialog.component.scss']
})
export class CreateProductDialogComponent implements OnInit {
  productForm!: FormGroup;

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

  changeUploadFile = (event: Event) => {
    const file = event.target
    
    console.log(event);
    
  }

  handleSubmitProduct = () => {
    this.products_service.postProduct().subscribe(res => {
      console.log('cadastrou', res);
      
    });
  }
}
