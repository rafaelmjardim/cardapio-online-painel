import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  logged: boolean = false;

  constructor() { }

}
