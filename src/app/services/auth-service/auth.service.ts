// src/app/auth/auth.service.ts
import { Injectable } from '@angular/core';
import { JwtHelperService } from '@auth0/angular-jwt';
import {BehaviorSubject, Subject} from 'rxjs';
@Injectable()
export class AuthService {
  isAuthenticated$ = new BehaviorSubject<boolean>(false);

  get isLoggedIn() {
    return this.isAuthenticated$.asObservable();
  }

    public jwtHelper: JwtHelperService;
    constructor() {
      this.jwtHelper = new JwtHelperService();
    // ...
    }
  public getToken(): string {
      if (localStorage.getItem('token')) {
        return JSON.parse(localStorage.getItem('token')).jwtToken;
      } else {
        return  null;
      }
  }
    public isAuthenticated(): boolean {

        const token = JSON.parse(localStorage.getItem('token'));
        if (token) {
            // console.log(token.jwtToken, "jettoken")
            // Check whether the token is expired and return
            // true or false
            // console.log(!this.jwtHelper.isTokenExpired(token.jwtToken), "jwt isexpired")
            return !this.jwtHelper.isTokenExpired(token.jwtToken);
        } else {
            return false;
        }
    }
    // Check whether the token is expired and return
    // true or false

}
