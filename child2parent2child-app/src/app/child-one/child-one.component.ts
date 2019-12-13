import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-child-one',
  templateUrl: './child-one.component.html',
  styleUrls: ['./child-one.component.css']
})
export class ChildOneComponent implements OnInit {

  outputMessage: string = " Hi from child-one";
  @Output() childOneMessage = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  clickHandler() {
    this.childOneMessage.emit(this.outputMessage);
  }
}