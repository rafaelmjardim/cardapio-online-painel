import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environment/environment.prod';
import { ProductREQ } from './products';

const APY_KEY = environment.API_KEY;

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  constructor(private http: HttpClient) { }

  getProducts = ():Observable<ProductREQ> => {
    return this.http.get<ProductREQ>(`${APY_KEY}/produtos`);
  }
}
