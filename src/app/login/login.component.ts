import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../service/auth.service';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css',
})
export class LoginComponent {
  constructor(private _router: Router, private _authService: AuthService) {}
  loginForm: FormGroup = new FormGroup({
    email: new FormControl(),
    password: new FormControl(),
  });

  login(formGroup: FormGroup) {
    let userData = JSON.stringify(formGroup.value);
    localStorage.setItem('user', userData);
    this._authService.isLoged.next('true');
    this._router.navigate(['home']);
  }
}
