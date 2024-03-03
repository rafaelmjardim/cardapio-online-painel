import { Component, OnInit } from '@angular/core';
import { ProductsService } from './products.service';
import { Product } from './products';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {

  productsList!: Product[];

  constructor (private products_service: ProductsService){}

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

}
