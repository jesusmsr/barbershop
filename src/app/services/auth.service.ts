import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { JwtHelperService } from '@auth0/angular-jwt';
import { User } from '../models/user.model';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private baseUrl = 'http://127.0.0.1:8000';

  constructor(
    private http: HttpClient,
    private jwtHelper: JwtHelperService
  ) { }

  login(email: string, password: string) {
    return this.http.post(`${this.baseUrl}/account/login-app/`, {
      'email': email,
      'password': password
    });
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
        console.log('true')
        return true
      }
    }
    console.log('false')
    return false
  }
}
