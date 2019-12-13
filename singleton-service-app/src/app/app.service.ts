import { Injectable } from '@angular/core';

@Injectable()
export class AppService {

  constructor() { }

  getRandomValue() {
    return Math.random();
  }
}