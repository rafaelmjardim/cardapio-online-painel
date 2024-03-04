import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-create-product-dialog',
  templateUrl: './create-product-dialog.component.html',
  styleUrls: ['./create-product-dialog.component.scss']
})
export class CreateProductDialogComponent implements OnInit {
  productForm!: FormGroup;

  constructor (private form_builder: FormBuilder ){}

  ngOnInit(): void {
    this.initProductForm();
  }

  initProductForm = () => {
    this.productForm = this.form_builder.group({
      productNameInput: ['teste'],
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
    alert('Clicou!')
  }
}
