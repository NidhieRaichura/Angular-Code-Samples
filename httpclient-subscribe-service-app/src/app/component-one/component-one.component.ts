import { Component, OnInit } from '@angular/core';
import { AppService } from '../app.service';

@Component({
  selector: 'app-component-one',
  templateUrl: './component-one.component.html',
  styleUrls: ['./component-one.component.css']
})
export class ComponentOneComponent implements OnInit {

  data: any;

  constructor(private service : AppService) { }

  ngOnInit() {
    this.service.getData().subscribe(
      serverData => this.data = serverData, 
      error => console.log(error))
  }

}