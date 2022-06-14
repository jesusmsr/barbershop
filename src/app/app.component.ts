import { Component, OnInit } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { AuthService } from './services/auth.service';
import { UserService } from './services/user.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  opened: boolean = false;
  constructor(
    private authService: AuthService
  ) { }

  isLogged!: Observable<boolean>;

  ngOnInit(): void {
    this.isLogged = this.authService.isLogged$;
    this.authService.isAuth();
  }

  logout() {
    this.authService.logout();
  }
  title = 'barbershop';
}
