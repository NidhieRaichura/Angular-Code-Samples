import { Component, OnInit } from '@angular/core';
import { AppService } from '../app.service';

@Component({
  selector: 'app-component-two',
  templateUrl: './component-two.component.html',
  styleUrls: ['./component-two.component.css'],
  providers: [AppService]
})
export class ComponentTwoComponent implements OnInit {

  randomNumber: any;
  
  constructor(service: AppService) {
    this.randomNumber = service.generateRandomNumber();
  }

  ngOnInit() {
  }

}