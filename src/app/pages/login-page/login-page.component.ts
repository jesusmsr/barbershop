import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { UserService } from 'src/app/services/user.service';
import { User } from 'src/app/models/user.model';


@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css']
})
export class LoginPageComponent implements OnInit {

  constructor(
    private formBuilder: FormBuilder,
    private userService: UserService
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
    if (this.loginForm.value.password == this.loginForm.value.confirmPassword) {
      const user = new User()

      user.username = this.loginForm.value.username
      user.email = this.loginForm.value.email
      user.phoneNumber = this.loginForm.value.phoneNumber
      user.firstName = this.loginForm.value.firstName
      user.lastName = this.loginForm.value.lastName
      user.password = this.loginForm.value.password

      this.userService.registerUser(user, this.loginForm.value.confirmPassword);
    }
  }

}
