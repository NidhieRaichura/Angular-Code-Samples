import { Injectable } from '@angular/core';

@Injectable()
export class AppService {
  num: any;
  constructor() { }

  generateRandomNumber() {
    this.num = Math.random();
    return this.num;
  }

}