import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { User } from '../models/user.model';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(
    private http: HttpClient,
    private router: Router,
  ) { }

  login(email: string, password: string) {
    return this.http.post('http://127.0.0.1:8000/account/login-app/', {
      'email': email,
      'password': password
    });
  }

  logout() {
    localStorage.clear();
    this.router.navigate(['/login']);
  }

  registerUser(user: User, confirmPassword: string) {
    return this.http.post('http://127.0.0.1:8000/account/register/', {
      'username': user.username,
      'email': user.email,
      'first_name': user.firstName,
      'last_name': user.lastName,
      'phone_number': user.phoneNumber,
      'password': user.password,
      'password_confirm': confirmPassword
    });
  }
}
