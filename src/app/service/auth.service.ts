import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  isLoged: BehaviorSubject<any> = new BehaviorSubject('');
  constructor() {
    if (localStorage.getItem('user') !== null) {
      this.isLoged.next(true);
    }
  }
}
