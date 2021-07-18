import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {LoginServiceService} from '../services/login-service.service';
import {Router} from '@angular/router';
import {AuthService} from '../services/auth-service/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor(private loginService: LoginServiceService, private router: Router,private authService:AuthService) { }
  form: FormGroup = new FormGroup({
    userName: new FormControl('', [Validators.required]),
    passWord: new FormControl('', [Validators.required]),
  });

  submitted: boolean;
  credintailsError: boolean;
  ngOnInit() {
  }

  submit() {
   this.submitted = true;
    if (this.form.valid) {
      this.loginService.login(this.form.value).subscribe((response: any) => {
          if (response) {
            localStorage.setItem('token', JSON.stringify(response));
            this.router.navigateByUrl('admin');
            this.authService.isAuthenticated$.next(true);
            return true;
          }}, (error) => {
           this.credintailsError = true;
        }
      );
    }
  }
}
