import { Component, OnInit } from '@angular/core';
import { UserService } from './services/user/user.service';
import { AuthService } from './services/auth/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'cardapio-online-painel';

  constructor (
    public auth_service: AuthService
  ){}

  ngOnInit(): void {
  }

}
