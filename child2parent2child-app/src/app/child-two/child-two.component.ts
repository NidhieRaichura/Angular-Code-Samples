import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-child-two',
  templateUrl: './child-two.component.html',
  styleUrls: ['./child-two.component.css']
})
export class ChildTwoComponent implements OnInit {
  @Input() inputMessage : string; 
    constructor() { }

  ngOnInit() {
  }

}