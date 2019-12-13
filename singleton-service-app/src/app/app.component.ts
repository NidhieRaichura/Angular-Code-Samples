import { Component } from '@angular/core';
import { AppService } from './app.service';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  name = 'Angular';
  randomNumber: any;
  constructor(private service: AppService) {
    this.randomNumber = service.getRandomValue();
  }
}
