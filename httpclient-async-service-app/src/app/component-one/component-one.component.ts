import { Component, OnInit } from '@angular/core';
import {AppService} from '../app.service';

@Component({
  selector: 'app-component-one',
  templateUrl: './component-one.component.html',
  styleUrls: ['./component-one.component.css']
})
export class ComponentOneComponent implements OnInit {

  asyncData: any;
  
  constructor(private service: AppService) { }

  ngOnInit() {
  
    this.asyncData = this.service.getData();
  }

}