import {Component, Input, OnInit} from '@angular/core';
import {Catagory} from "../catagory-list/catagory-list.component";

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {

  @Input() categories:Catagory;
  constructor() { }

  ngOnInit() {
  }

}
