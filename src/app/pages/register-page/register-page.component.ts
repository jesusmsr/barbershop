import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { User } from 'src/app/models/user.model';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-register-page',
  templateUrl: './register-page.component.html',
  styleUrls: ['./register-page.component.css']
})
export class RegisterPageComponent implements OnInit {

  constructor(
    private formBuilder: FormBuilder,
    private authService: AuthService
  ) { }

  registerForm = this.formBuilder.group({
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
    console.log('?????????????');
    if (this.registerForm.value.password == this.registerForm.value.confirmPassword) {
      const user = new User()
      console.log('aha');

      user.username = this.registerForm.value.username
      user.email = this.registerForm.value.email
      user.phoneNumber = this.registerForm.value.phoneNumber
      user.firstName = this.registerForm.value.firstName
      user.lastName = this.registerForm.value.lastName
      user.password = this.registerForm.value.password

      this.authService.register(user, this.registerForm.value.confirmPassword).subscribe(response => {
        console.log(response);
      });
    }
  }

}
