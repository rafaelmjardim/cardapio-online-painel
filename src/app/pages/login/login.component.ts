import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
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
    private auth_service: AuthService
  ){}

  ngOnInit(): void {
    this.initLoginForm();
  }

  initLoginForm = () => {
    this.loginForm = this.form_builder.group({
      emailInput: [''],
      passwordInput: ['']
    })
  }

}
