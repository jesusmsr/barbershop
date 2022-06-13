import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css']
})
export class LoginPageComponent implements OnInit {

  constructor(
    private formBuilder: FormBuilder,
    private http: HttpClient
  ) { }

  loginForm = this.formBuilder.group({
    email: '',
    username: '',
    phoneNumber: '',
    password: '',
    firstName: '',
    lastName: '',
    confirmPassword: '',
  });

  ngOnInit(): void {
  }

  onSubmit() {
    console.log('1');
    const data = {
      'username': this.loginForm.value.username,
      'email': this.loginForm.value.email,
      'password': this.loginForm.value.password,
      'password_confirm': this.loginForm.value.confirmPassword,
      'phone_number': this.loginForm.value.phoneNumber,
      'first_name': this.loginForm.value.firstName,
      'last_name': this.loginForm.value.lastName
    }
    this.http.post('http://127.0.0.1:8000/account/register/', data).subscribe(response => {
      console.log(response);
    })
  }

}
