import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  columnSpan: number = 2;
  fn: string = "Nidhie";
  ln: string = "Raichura";
  gender: string = "Female";
  age: number = 23;


  showDetails: boolean = false;
  toggleDetails(): void {
    this.showDetails = !this.showDetails;
  }
}