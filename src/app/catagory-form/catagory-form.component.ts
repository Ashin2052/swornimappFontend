import {Component, Inject, OnInit} from '@angular/core';
import {Catagory} from '../catagory-list/catagory-list.component';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material';
import {CatagoryServicesService} from '../services/catagory-services.service';

@Component({
  selector: 'app-catagory-form',
  templateUrl: './catagory-form.component.html',
  styleUrls: ['./catagory-form.component.scss']
})
export class CatagoryFormComponent implements OnInit {

  get formControls() {
    return this.createEditCatagoryForm.controls;
  }

  submitted: boolean;

  constructor(private fb: FormBuilder,
              public dialogRef: MatDialogRef<CatagoryFormComponent, Catagory>,
              @Inject(MAT_DIALOG_DATA) public catagory: Catagory,
              private catagoryService: CatagoryServicesService) {
  }

  createEditCatagoryForm: FormGroup = this.fb.group({
    name: ['', [Validators.required, Validators.minLength(5)]],
    type: ['', [Validators.required, Validators.minLength(5)]]
  });

  ngOnInit() {
    if (this.catagory) {
      this.createEditCatagoryForm.patchValue({
        name: this.catagory.name,
        type: this.catagory.type
      });
    }
  }

  onSubmit() {
    this.submitted = true;
    if (this.createEditCatagoryForm.valid) {
      if (this.catagory) {
        this.catagoryService.updateCatagoryList(this.createEditCatagoryForm.value, this.catagory._id).subscribe((value => {
          this.dialogRef.close(value);
        }));
      } else {
        this.catagoryService.postCatagoryList(this.createEditCatagoryForm.value).subscribe((value => {
          this.dialogRef.close(value);
        }));
      }
    }
  }

  onCancel() {

  }
}
