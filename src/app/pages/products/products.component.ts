import { Component, OnInit } from '@angular/core';
import { ProductsService } from './products.service';
import { Product } from './products';
import { HttpErrorResponse } from '@angular/common/http';
import { MatDialog } from '@angular/material/dialog';
import { CreateProductDialogComponent } from './components/create-product-dialog/create-product-dialog.component';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {

  productsList!: Product[];

  constructor (
    private products_service: ProductsService,
    private dialog: MatDialog
  ){}

  ngOnInit(): void {
    this.onGetProducts();
  }

  onGetProducts = () => {
    this.products_service.getProducts().subscribe({
      next: (products_response) => {
        this.productsList = products_response;        
      }
    })
  }

  deleteProduct = (codigo: number, urlImage: string) => {        
    this.products_service.deleteProduct(codigo, urlImage).subscribe({
      next: (delete_response) => {
        this.onGetProducts();
      },
      error: (error_response: HttpErrorResponse) => {
        console.log('Falha ao deletar:', error_response);
      }
    })
  }

  handleOpenCreateDialog = () => {
    this.dialog.open(CreateProductDialogComponent);

    this.products_service.updateGetProductSubject(this.onGetProducts);
  }

}
