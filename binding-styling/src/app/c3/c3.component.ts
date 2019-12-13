import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-c3',
  templateUrl: './c3.component.html',
  styleUrls: ['./c3.component.css']
})
export class C3Component implements OnInit {

parentTitle : string = "I am the parent component";
message : string ="World";
x: any;
result : string;
  constructor() { }

  ngOnInit() {
  }
sendData(){
  this.message = this.x;
}

onNotify(args:string){
  //alert(args);
  this.result = args;
}
}