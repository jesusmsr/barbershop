import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/models/user.model';
import { AuthService } from 'src/app/services/auth.service';
import { TokenstorageService } from 'src/app/services/tokenstorage.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  user: User = new User();

  constructor(
    private authService: AuthService,
    private tokenService: TokenstorageService
  ) { }

  ngOnInit(): void {
    this.authService.getUserSession(this.tokenService.getToken()!).subscribe((value: any) => {
      this.prepareUserObj(value);
    })
  }

  prepareUserObj(user: any) {
    this.user.username = user.username;
    this.user.email = user.email;
    this.user.firstName = user.first_name;
    this.user.lastName = user.last_name
    this.user.phoneNumber = user.phone_number;
  }

}
