import { HttpClient, HttpHeaders } from '@angular/common/http';
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

  deleteProduct = (codigo: number, urlImage: string) => {
    const token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwiaWF0IjoxNzA5NTA4MDQzLCJleHAiOjE3MDk1OTQ0NDN9.LLydjiHidOTHW2cZkT2rj9CPHZ2giriDTNdsiqKxedk';
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'multipart/form-data; boundary=<calculated when request is sent>',
        'x-access-token': token
      })
    }

    return this.http.delete(`${APY_KEY}/produtos?${codigo}/${urlImage}`, httpOptions);
  }
}
