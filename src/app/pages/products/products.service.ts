import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { environment } from 'src/environment/environment';

const API_KEY = environment.API_KEY;

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  constructor(private http: HttpClient) { }

  getProducts = () => {
    return this.http.get(`${API_KEY}/produtos`)
  }
}
