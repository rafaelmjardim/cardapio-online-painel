import { Injectable } from '@angular/core';
import { environment } from 'src/environment/environment.prod';

const API_KEY = environment.API_KEY;

@Injectable({
  providedIn: 'root'
})
export class UtilsService {

  constructor() { }

  //Função para retornar rota do servidor (utilizado originalmente para definir o link da img de produtos)
  returnURLServer = () => {
    return API_KEY + '/';
  }

}
