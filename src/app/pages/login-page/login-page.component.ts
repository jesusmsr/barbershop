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
    password: ''
  });

  ngOnInit(): void {
  }

  onSubmit() {
    console.log('1');
    const data = {
      'username': 'angular',
      'email': 'angular@example.com',
      'password': 'Angular1*',
      'password_confirm': 'Angular1*',
      'phone_number': '6326546',
      'first_name': 'Angular',
      'last_name': 'Angularlastname'
    }
    this.http.post('http://127.0.0.1:8000/account/register/', data).subscribe(response => {
      console.log(response);
    })
  }

}
