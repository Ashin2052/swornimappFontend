import {Catagory} from '../catagory-list/catagory-list.component';
import {ProductServiceService} from '../services/product-service.service';
import {CatagoryFormComponent} from '../catagory-form/catagory-form.component';
import {getConfirmDialogRef} from '../utils/dialog-util';
import DateTimeFormat = Intl.DateTimeFormat;
import {ProductFormComponent} from '../product-form/product-form.component';
import {Component, OnInit} from '@angular/core';
import {MatDialog} from '@angular/material/dialog';


@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
})
export class ProductListComponent implements OnInit {
  private breakpoint: number;

  constructor(private productService: ProductServiceService, private dialog: MatDialog) { }

  products: Product[] = [];
  displayedColumns: string[] = ['id', 'name', 'type', 'description', 'catagory',
    'isLatest', 'image', 'showCorousal' , 'Action'];
  isToken: any;

  ngOnInit() {
    this.getProducts();
    this.breakpoint = (window.innerWidth <= 400) ? 1 : 6;

  }

  onResize(event) {
    if (event.target.innerWidth <= 400) {
      this.breakpoint = 1;
    } else if (event.target.innerWidth > 400 && event.target.innerWidth <= 800) {
      this.breakpoint = 3;
    } else if (event.target.innerWidth > 800) {
      this.breakpoint = 6;
    }
  }

  addProduct() {
    const dialogRef = this.dialog.open<ProductFormComponent, Product, Product>(
      ProductFormComponent,
      {
        panelClass: 'zero-padding-dialog-panel',
        width: '500px',
        maxHeight: '90vh',
      }
    );

    dialogRef.beforeClosed().subscribe((catagory) => {
      // User has to be checked because also in cancel bottom this method is subscribed
      if (catagory) {
        this.getProducts();
      }
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
  onDelete(element: Product) {
    const confirmDialogRef = this.getConfirmDialogRef('delete this catagory');
    confirmDialogRef.afterClosed().subscribe((success) => {
      if (success) {
        this.productService.deleteProduct(element._id).subscribe((data) => {
          this.getProducts();
        });
      }
    });
  }

  editProduct(element: Product) {
    const dialogRef = this.dialog.open<ProductFormComponent, Product, Product>(
      ProductFormComponent,
      {
        panelClass: 'zero-padding-dialog-panel',
        width: '600px',
        maxHeight: '90vh',
        data: element
      }
    );
    dialogRef.beforeClosed().subscribe((product) => {
      // User has to be checked because also in cancel bottom this method is subscribed
      if (product) {
        this.getProducts();
      }
    });

  }

  private getConfirmDialogRef(confirmDialogMessage: string) {
    return getConfirmDialogRef(this.dialog, `Are you sure you want to ${confirmDialogMessage}?`);
  }

}
export interface Product {
  _id: string;
  name: string;
  catagory?: Catagory;
  showCorousal: boolean;
  description: string;
  image: any;
  createdOn: DateTimeFormat;
  price: number;
}
