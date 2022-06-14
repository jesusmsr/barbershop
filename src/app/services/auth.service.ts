import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { JwtHelperService } from '@auth0/angular-jwt';
import { BehaviorSubject } from 'rxjs';
import { User } from '../models/user.model';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private baseUrl = 'http://127.0.0.1:8000';

  isLogged$ = new BehaviorSubject<boolean>(false);

  constructor(
    private http: HttpClient,
    private jwtHelper: JwtHelperService,
    private router: Router
  ) { }

  login(email: string, password: string) {
    this.isLogged$.next(true);
    return this.http.post(`${this.baseUrl}/account/login-app/`, {
      'email': email,
      'password': password
    });
  }

  logout() {
    this.isLogged$.next(false);
    localStorage.clear();
    this.router.navigate(['login']);
  }

  register(user: User, confirmPassword: string) {
    return this.http.post(`${this.baseUrl}/account/register/`, {
      'username': user.username,
      'email': user.email,
      'first_name': user.firstName,
      'last_name': user.lastName,
      'phone_number': user.phoneNumber,
      'password': user.password,
      'password_confirm': confirmPassword
    });
  }

  isAuth() {
    if (localStorage.getItem('accessToken')) {
      const token = localStorage.getItem('accessToken');
      if (token && !this.jwtHelper.isTokenExpired(token)) {
        this.isLogged$.next(true);
        return true
      }
    }
    this.isLogged$.next(false);
    return false
  }

  refreshToken(token: string) {
    return this.http.post(`${this.baseUrl}/api/token/refresh/`, token);
  }
}
