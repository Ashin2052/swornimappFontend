import { Component, OnInit } from '@angular/core';
import {CatagoryServicesService} from '../services/catagory-services.service';
import {MatDialog} from '@angular/material';
import {CatagoryFormComponent} from '../catagory-form/catagory-form.component';

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
  this.catagoryService.getCatagoryList().subscribe((catagories) => {
    this.catagoryList = catagories;
  });
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
          // this.updateUserListTable();
        }
      });
    }
}

export interface Catagory {
  id: string;
  name: string;
  type: string;
  products?: any;
}
