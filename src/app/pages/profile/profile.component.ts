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
      this.user.username = value.username;
      this.user.email = value.email;
      console.log(value);
    })
  }

}
