import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { User } from '../models/user.model';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(
    private http: HttpClient
  ) { }

  registerUser(user: User) {
    this.http.post('http://127.0.0.1:8000/account/register/', data).subscribe(response => {
      console.log(response);
    })
  }
}
