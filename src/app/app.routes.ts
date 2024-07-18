import { Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { authGuard } from './guard/auth.guard';

export const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'login', component: LoginComponent, title: 'Login' },
  {
    path: 'home',
    canActivate: [authGuard],
    component: HomeComponent,
    title: 'Home',
  },
];
