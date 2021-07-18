import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {CatagoryListComponent} from './catagory-list/catagory-list.component';
import {ProductListComponent} from './product-list/product-list.component';
import {LoginComponent} from './login/login.component';
import {AuthGuardService} from './services/auth-service/auth.guard';
import {HomepageComponent} from './homepage/homepage.component';
import {AdminMainPageComponent} from './admin-main-page/admin-main-page.component';

const routes: Routes = [
  {path: '', component: HomepageComponent},
  {path: 'admin', component: AdminMainPageComponent, canActivate: [AuthGuardService]},
  {path: 'home', component: HomepageComponent},
  {path: 'login', component: LoginComponent},
  {path: 'category', component: CatagoryListComponent, canActivate: [AuthGuardService]},
  {path: 'product', component: ProductListComponent, canActivate: [AuthGuardService]},
  { path: '404', component: ProductListComponent , canActivate: [AuthGuardService]},
  {path: '**', redirectTo: 'home', pathMatch: 'full'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
