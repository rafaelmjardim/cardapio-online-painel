import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { Login } from 'src/app/services/auth/auth';
import { AuthService } from 'src/app/services/auth/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  loginForm!: FormGroup;

  constructor (
    private form_builder: FormBuilder,
    private auth_service: AuthService,
    private router: Router
  ){}

  ngOnInit(): void {
    this.initLoginForm();    
  }

  initLoginForm = () => {
    this.loginForm = this.form_builder.group({
      userInput: [''],
      passwordInput: ['']
    })
  }

  submit = () => {
    const login: Login = {
      user: this.loginForm.controls['userInput'].value,
      password: this.loginForm.controls['passwordInput'].value
    }

    this.auth_service.login(login).subscribe({
      next: (login_response) => {
        const token = login_response.token;
        localStorage.setItem('token', token);

        this.auth_service.isLoggedIn();
        this.router.navigateByUrl('/')   
      },
      error: (login_error) => {
        alert('Usuário invalido! Tente novamente.');        
      }
    })
  }
}
