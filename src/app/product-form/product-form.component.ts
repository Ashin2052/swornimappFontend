import {Component, Inject, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material';
import {Catagory} from '../catagory-list/catagory-list.component';
import {CatagoryServicesService} from '../services/catagory-services.service';
import {Product} from '../product-list/product-list.component';
import {ProductServiceService} from '../services/product-service.service';

@Component({
  selector: 'app-product-form',
  templateUrl: './product-form.component.html',
  styleUrls: ['./product-form.component.scss']
})
export class ProductFormComponent implements OnInit {
  catagories: Catagory[];

  get formControls() {
    return this.createEditProductForm.controls;
  }

  image: File;
  submitted: boolean;

  constructor(private fb: FormBuilder,
              public dialogRef: MatDialogRef<ProductFormComponent, Product>,
              @Inject(MAT_DIALOG_DATA) public product: Product,
              private catagoryService: CatagoryServicesService,
              private productService: ProductServiceService) {
  }

  createEditProductForm: FormGroup = this.fb.group({
    name: ['', [Validators.required, Validators.minLength(5)]],
    price: ['', [Validators.required]],
    showCorousal: ['', [Validators.required]],
    catagory: ['', [Validators.required]],
    image: [null, [Validators.required]],
    description: ['', [Validators.required, Validators.minLength(5)]],
  });


  ngOnInit() {
    this.catagoryService.getCatagoryList().subscribe((catagory) => {
      this.catagories = catagory;
    });

    if (this.product) {
      this.createEditProductForm.patchValue({
        name: this.product.name,
        description: this.product.description,
        price: this.product.price,
        showCorousal: this.product.showCorousal,
        image: this.product.image,
        catagory: this.product.catagory.name,
      });
    }

  }

  onFileChange(event) {

    if (event.target.files.length > 0) {
      const file = event.target.files[0];
      this.createEditProductForm.patchValue({
        image: file
      });
    }
  }


  onSubmit() {
    this.submitted = true;
    if (this.createEditProductForm.valid) {
      const  cat = this.catagories.find(value => this.createEditProductForm.get('catagory').value === value.name);
      const formData = new FormData();
      formData.append('image', this.createEditProductForm.get('image').value);
      // formData.set('image'," this.image");
      formData.append('name', this.createEditProductForm.get('name').value);
      formData.append('price', this.createEditProductForm.get('price').value);
      formData.append('showCorousal', this.createEditProductForm.get('showCorousal').value);
      formData.append('description', this.createEditProductForm.get('description').value);
      formData.append('catagory', cat._id);
      if (this.product) {
        formData.append('previousImage', this.product.image);
        this.productService.updateproductList(formData, this.product._id).subscribe((value => {
          this.dialogRef.close(value);
        }));
      } else {
        this.productService.postProductList(formData).subscribe((value => {
          this.dialogRef.close(value);
        }));
      }
    }
  }

  onCancel() {

  }

  getImage(image) {
    return this.productService.getImage(image);
  }
}
