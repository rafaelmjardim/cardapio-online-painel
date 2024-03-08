import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth/auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  @Input() title!: string; 
  
  constructor (
    private auth_service: AuthService, 
    private router: Router
  ) {}

  handleLogout = () => {
    this.auth_service.logout();
    this.router.navigateByUrl('/login');
  }
}
