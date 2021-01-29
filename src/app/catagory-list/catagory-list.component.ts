import { Component, OnInit } from '@angular/core';
import {CatagoryServicesService} from '../services/catagory-services.service';
import {MatDialog} from '@angular/material';
import {CatagoryFormComponent} from '../catagory-form/catagory-form.component';
import {getConfirmDialogRef} from '../utils/dialog-util';
@Component({
  selector: 'app-catagory-list',
  templateUrl: './catagory-list.component.html',
  styleUrls: ['./catagory-list.component.scss']
})
export class CatagoryListComponent implements OnInit {

  constructor(private catagoryService: CatagoryServicesService, private dialog: MatDialog) { }
  catagoryList: Catagory[] = [];
  displayedColumns: string[] = ['id', 'name', 'type', 'Action'];

  ngOnInit() {
this.getCatagories();
  }

  addUser() {
      const dialogRef = this.dialog.open<CatagoryFormComponent, Catagory, Catagory>(
        CatagoryFormComponent,
        {
          panelClass: 'zero-padding-dialog-panel',
          width: '500px',
          maxHeight: '90vh',
        }
      );

      dialogRef.beforeClosed().subscribe((catagory) => {
        // User has to be checked because also in cancel bottom this method is subscribed
        if (catagory) {
          this.getCatagories();
        }
      });
    }
    getCatagories() {
      this.catagoryService.getCatagoryList().subscribe((catagories) => {
        this.catagoryList = catagories;
      });
    }

  deleteCatagories(element: Catagory) {
    const confirmDialogRef = this.getConfirmDialogRef('delete this catagory');
    confirmDialogRef.afterClosed().subscribe((success) => {
      if (success) {
        this.catagoryService.deleteCatagory(element._id).subscribe((data) => {
          this.getCatagories();
        });
      }
  });
  }

  editCatagories(element: Catagory) {
    const dialogRef = this.dialog.open<CatagoryFormComponent, Catagory, Catagory>(
      CatagoryFormComponent,
      {
        panelClass: 'zero-padding-dialog-panel',
        width: '500px',
        maxHeight: '90vh',
        data: element
      }
    );

    dialogRef.beforeClosed().subscribe((catagory) => {
      // User has to be checked because also in cancel bottom this method is subscribed
      if (catagory) {
        this.getCatagories();
      }
    });

  }

  private getConfirmDialogRef(confirmDialogMessage: string) {
    return getConfirmDialogRef(this.dialog, `Are you sure you want to ${confirmDialogMessage}?`);
  }
}

export interface Catagory {
  _id: string;
  name: string;
  type: string;
  products?: any;
}
