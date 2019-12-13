import { Component, OnInit } from '@angular/core';
import { AppService } from '../app.service';

@Component({
  selector: 'app-component-one',
  templateUrl: './component-one.component.html',
  styleUrls: ['./component-one.component.css'],
  providers: [AppService]
})
export class ComponentONeComponent implements OnInit {
  randomNumber: any;

  constructor(service: AppService) {
    this.randomNumber = service.generateRandomNumber();
  }
  ngOnInit() {
  }

}