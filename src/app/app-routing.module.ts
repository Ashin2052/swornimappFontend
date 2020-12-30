import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CommonModule } from '@angular/common';
import { NotFoundComponent } from './not-found/not-found.component';
import {CatagoryListComponent} from './catagory-list/catagory-list.component';

const routes: Routes = [
  { path: '404', component: CatagoryListComponent },
  {path: '**', redirectTo: '/404', pathMatch: 'full'},
  {path: 'catagory', component: CatagoryListComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
