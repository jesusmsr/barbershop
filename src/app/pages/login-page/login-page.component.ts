import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { UserService } from 'src/app/services/user.service';
import { User } from 'src/app/models/user.model';
import { Router } from '@angular/router';



@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css']
})
export class LoginPageComponent implements OnInit {

  constructor(
    private formBuilder: FormBuilder,
    private userService: UserService,
    private router: Router

  ) { }

  loginForm = this.formBuilder.group({
    email: ['', Validators.required],
    password: ['', Validators.required],
  });

  ngOnInit(): void {
  }

  onSubmit() {
    this.userService.login(this.loginForm.value.email, this.loginForm.value.password).subscribe((response: any) => {
      if (response.response === '200') {
        console.log(response);
        localStorage.setItem('accessToken', response.token.access);
        localStorage.setItem('refreshToken', response.token.refresh);
        this.router.navigate(['']);
      }
    })
  }

}
