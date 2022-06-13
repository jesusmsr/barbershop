import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { User } from 'src/app/models/user.model';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-register-page',
  templateUrl: './register-page.component.html',
  styleUrls: ['./register-page.component.css']
})
export class RegisterPageComponent implements OnInit {

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
