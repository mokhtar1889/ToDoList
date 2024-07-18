import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject } from 'rxjs';
import { AuthService } from '../service/auth.service';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css',
})
export class NavbarComponent {
  isLoged: boolean = false;
  constructor(private _router: Router, private _authService: AuthService) {
    _authService.isLoged.subscribe((res) => {
      if (_authService.isLoged.getValue()) {
        console.log(res);
        this.isLoged = true;
      } else {
        console.log(res);
        this.isLoged = false;
      }
    });
  }

  logout() {
    localStorage.removeItem('user');
    this._router.navigate(['login']);
    this._authService.isLoged.next(false);
  }
}
