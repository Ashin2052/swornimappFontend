import { Component, OnInit } from '@angular/core';
import {ProductServiceService} from '../services/product-service.service';
import {MatDialog} from '@angular/material/dialog';
import {CatagoryServicesService} from '../services/catagory-services.service';
import {Catagory} from '../catagory-list/catagory-list.component';
import {Product} from '../product-list/product-list.component';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.scss']
})
export class HomepageComponent implements OnInit {
  private catagoryList: Catagory[] = [];
  private products: Product[] = [];

  constructor(private productService: ProductServiceService,
              private catagoryService: CatagoryServicesService,
              private dialog: MatDialog) { }

  ngOnInit() {
    this.getCatagories();
    this.getProducts();
  }

  getCatagories() {
    this.catagoryService.getCatagoryList().subscribe((catagories) => {
      this.catagoryList = catagories;
    });
  }

  getProducts() {
    this.productService.getProductList(null).subscribe((products) => {
      this.products = products;
    });
  }

  getImage(image) {
    return this.productService.getImage(image);
  }

}
