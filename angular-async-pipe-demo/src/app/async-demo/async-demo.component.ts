import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-async-demo',
  templateUrl: './async-demo.component.html',
  styleUrls: ['./async-demo.component.css']
})
export class AsyncDemoComponent implements OnInit {

  result: any;
  constructor(private http: HttpClient) {

  }
  // output of method a will be concatenated to output of method b
  ngOnInit() {
    this.result = this.http.get("../Assets/friends.json").pipe(map(result => this.result));
    console.log(JSON.stringify(this.result));
  }

  //   phones = [
  //     { name: 'iphone', price: '800' },
  //     { name: 'iphone', price: '800' },
  //     { name: 'iphone', price: '800' },
  //   ]
  //   fun() {
  //     console.log(smartPhones.map(function (phone) { returm phone.price; }));
  //     console.log(smartPhones.map(phones.map(phone => phone.price;
  //   }));
  // }
}