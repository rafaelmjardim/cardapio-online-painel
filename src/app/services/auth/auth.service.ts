import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environment/environment.prod';
import { Login } from './auth';

const API_KEY = environment.API_KEY;

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient) {}

  isLoggedIn = (): boolean => {
    const token = localStorage.getItem('token');
console.log('teste de render');

    return !!token // returna true se o token existir, false se não!!
  }

  login = (login: Login): Observable<any> => {
    return this.http.post(`${API_KEY}/login`, login);
  }

  logout = () => {
    localStorage.removeItem('token');
  }
}
