import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginPageComponent } from './pages/login-page/login-page.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { RegisterPageComponent } from './pages/register-page/register-page.component';
import { MatButtonModule } from '@angular/material/button';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { MatSidenavModule } from '@angular/material/sidenav';
import { JwtHelperService, JWT_OPTIONS } from '@auth0/angular-jwt';
import { ProfileComponent } from './pages/profile/profile.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { MatCardModule } from '@angular/material/card';
import { BookingPageComponent } from './pages/booking-page/booking-page.component';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { DateTimePickerComponent } from './components/date-time-picker/date-time-picker.component';
import { MatNativeDateModule } from '@angular/material/core';
import { TokenInterceptorService } from './services/token-interceptor.service';

@NgModule({
  declarations: [
    AppComponent,
    LoginPageComponent,
    RegisterPageComponent,
    HomePageComponent,
    ProfileComponent,
    SidebarComponent,
    BookingPageComponent,
    DateTimePickerComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatSidenavModule,
    MatCardModule,
    MatDatepickerModule,
    MatNativeDateModule
  ],
  providers: [
    { provide: JWT_OPTIONS, useValue: JWT_OPTIONS },
    JwtHelperService,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: TokenInterceptorService,
      multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
