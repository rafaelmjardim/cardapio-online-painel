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
  isLogged: boolean = false;

  constructor(private http: HttpClient) {}

  isLoggedIn = () => {
    const token = localStorage.getItem('token');
    
    this.isLogged = !!token;// returna true se o token existir, false se não!!     
  }

  login = (login: Login): Observable<any> => {
    return this.http.post(`${API_KEY}/login`, login);
  }

  logout = () => {
    localStorage.removeItem('token');
    this.isLoggedIn();
  }
}
