import {ChangeDetectionStrategy, Component, DoCheck, EventEmitter, OnInit, Output} from '@angular/core';
import {ActivatedRoute, NavigationEnd, Router} from '@angular/router';
import {AuthService} from '../services/auth-service/auth.service';
import {Observable} from 'rxjs';
import {AdminRoutes} from "../admin-main-page/admin-main-page.component";

@Component({
  selector: 'app-admin-header',
  templateUrl: './admin-header.component.html',
  styleUrls: ['./admin-header.component.scss']
})
export class AdminHeaderComponent implements OnInit ,  DoCheck {
  public isAuthenticated$ = this.authService.isAuthenticated$;
  @Output() active: EventEmitter<AdminRoutes> = new EventEmitter<AdminRoutes>();

  constructor(private route: ActivatedRoute, private authService: AuthService, private router: Router) {
  }

  ngOnInit() {
   if (this.authService.isAuthenticated()) {
     this.authService.isAuthenticated$.next(true);
   } else {
     this.authService.isAuthenticated$.next(false);
   }
  }

  logout() {
    localStorage.clear();
    this.router.navigateByUrl('login');
    this.authService.isAuthenticated$.next(false);
  }

  ngDoCheck(): void {
  }
}
