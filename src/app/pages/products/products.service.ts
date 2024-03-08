import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { APP_ID, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environment/environment.prod';
import { Product, ProductREQ } from './products';
import { NewProduct } from './components/create-product-dialog/create-product-dialog';

const API_KEY = environment.API_KEY;

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  constructor(private http: HttpClient) { }

  getProducts = ():Observable<ProductREQ> => {
    return this.http.get<ProductREQ>(`${API_KEY}/produtos`);
  }

  
  postProduct = (newProduct: NewProduct) => {
    const token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwiaWF0IjoxNzA5ODYxODEyLCJleHAiOjE3MDk5NDgyMTJ9.5dxldxx2MntRhsu09ZO4chqgIXOhmQjDFM7IUV_RuPE'
    
    const formData = new FormData();
    formData.append('upload_imagem', newProduct.file)
    
    formData.set('nome', newProduct.name)
    formData.set('descricao', newProduct.description)
    formData.set('valor_venda', String(newProduct.value))
    formData.set('id_categoria', String(newProduct.category))
    formData.set('status', String(1))
    
    //campos que precisam ser enviados mesmo em branco
    formData.set("codigo_interno", "");
    formData.set("id_adicional", "");
    formData.set("id_sabor", "");
    formData.set("valor_promo", "");
    formData.set("destaque", "");
    formData.set("observacao", "");
    formData.set("tamanho", "");
    
    return this.http.post(`${API_KEY}/produtos`, formData, {
      headers: new HttpHeaders({
        'x-access-token': token
      }),
    });
  }
  
  deleteProduct = (codigo: number, urlImage: string) => {
    const token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwiaWF0IjoxNzA5ODYyNzYwLCJleHAiOjE3MDk5NDkxNjB9.azI_N8UWahMDFjeyK4VP7FUrMkuqUCMnXdvFvUxBN9g'
    const httpOptions = {
      params: new HttpParams().set('codigo', codigo).set('nome_imagem_delete', urlImage),
      headers: new HttpHeaders({
        'x-access-token': token
      })
    }
  
    return this.http.delete(`${API_KEY}/produtos`, httpOptions);
  }
}
