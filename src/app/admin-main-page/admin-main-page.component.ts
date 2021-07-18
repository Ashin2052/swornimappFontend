import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-admin-main-page',
  templateUrl: './admin-main-page.component.html',
  styleUrls: ['./admin-main-page.component.scss']
})
export class AdminMainPageComponent implements OnInit {
 active: AdminRoutes ='product';
  constructor() { }

  ngOnInit() {
  }

  route(product: AdminRoutes ) {
   this.active = product;
  }
}

export type AdminRoutes = 'product' | 'category';
