import { HttpClient, HttpHeaders } from '@angular/common/http';
import { APP_ID, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environment/environment.prod';
import { ProductREQ } from './products';

const API_KEY = environment.API_KEY;

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  constructor(private http: HttpClient) { }

  getProducts = ():Observable<ProductREQ> => {
    return this.http.get<ProductREQ>(`${API_KEY}/produtos`);
  }

  deleteProduct = (codigo: number, urlImage: string) => {
    const token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwiaWF0IjoxNzA5NTA4MDQzLCJleHAiOjE3MDk1OTQ0NDN9.LLydjiHidOTHW2cZkT2rj9CPHZ2giriDTNdsiqKxedk';
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'multipart/form-data; boundary=<calculated when request is sent>',
        'x-access-token': token
      })
    }

    return this.http.delete(`${API_KEY}/produtos?${codigo}/${urlImage}`, httpOptions);
  }

  postProduct = () => {
    const token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwiaWF0IjoxNzA5Njc5ODgwLCJleHAiOjE3MDk3NjYyODB9.LVMV4fU48773_GhE6M7R8MyKW_L0EqxnImZF50VVmS4'

    const formData = new FormData();

    // formData.append('upload_imagem', 'uploadImg')

    formData.set('nome', 'productName')
    formData.set('descricao', "productDescription")
    formData.set('valor_venda', String(20))
    formData.set('id_categoria', String(31))
    formData.set('status', String(1))

    return this.http.post(`${API_KEY}/produtos`, formData, {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'x-access-token': token
      })
    })
  }
}
