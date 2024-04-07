import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { APP_ID, Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { environment } from 'src/environment/environment.prod';
import { Product, ProductREQ } from './products';
import { NewProduct } from './components/create-product-dialog/create-product-dialog';

const API_KEY = environment.API_KEY;

const token = localStorage.getItem('token');

@Injectable({
  providedIn: 'root'
})
export class ProductsService {
  getProductsSubject = new BehaviorSubject<Function>(() => null );
  getProductsStream$ = this.getProductsSubject.asObservable();

  constructor(private http: HttpClient) { }

  updateGetProductSubject = (producGetFunction: Function) => {
    this.getProductsSubject.next(producGetFunction)
  }

  getProducts = ():Observable<ProductREQ> => {
    return this.http.get<ProductREQ>(`${API_KEY}/produtos`);
  }
  
  postProduct = (newProduct: NewProduct) => {    
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
        'x-access-token': token ?? ''
      }),
    });
  }
  
  deleteProduct = (codigo: number, urlImage: string) => {
    const httpOptions = {
      params: new HttpParams().set('codigo', codigo).set('nome_imagem_delete', urlImage),
      headers: new HttpHeaders({
        'x-access-token': token ?? ''
      })
    }
  
    return this.http.delete(`${API_KEY}/produtos`, httpOptions);
  }
}
