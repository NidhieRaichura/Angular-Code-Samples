import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';

@Component({
  selector: 'app-c2',
  templateUrl: './c2.component.html',
  styleUrls: ['./c2.component.css']
})
export class C2Component implements OnInit {

title = "I am the child component";

@Output() notify: EventEmitter<string> = new EventEmitter<string>();
@Input() message : string;

  constructor() { }

  ngOnInit() {
  }

  triggerCustomClickEvent(){
    this.notify.emit("Message passed from child to parent");
  }

}