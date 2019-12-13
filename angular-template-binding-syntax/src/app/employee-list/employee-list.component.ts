import { Component, OnInit } from '@angular/core';
import { IEmployee } from '../employee';
import { EmployeeService } from '../employee.service';

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.css']
})
export class EmployeeListComponent implements OnInit {

  employees: IEmployee[];
  selectedEmployeeCountRadioButton: string = 'All';

  constructor(private _employeeService: EmployeeService) {
    //this.employees = [
    // { code: 'emp101', name: 'Iron Man', gender: 'Male', annualSalary: 10000000, dateOfBirth: '1/05/1947' },
    // { code: 'emp102', name: 'Black Widow', gender: 'Female', annualSalary: 10000000, dateOfBirth: '1/06/1947' },
    // { code: 'emp103', name: 'Wonder Woman', gender: 'Female', annualSalary: 10000000, dateOfBirth: '1/07/1947' },
    // { code: 'emp104', name: 'Batman', gender: 'Male', annualSalary: 10000000, dateOfBirth: '1/08/1947' }
    // ];
  }

  ngOnInit() {
    this.employees = this._employeeService.getEmployees();
  }
  
  getEmployees(): void {
    this.employees = [
      { code: 'emp101', name: 'Iron Man', gender: 'Male', annualSalary: 10000000, dateOfBirth: '1/05/1947' },
      { code: 'emp102', name: 'Black Widow', gender: 'Female', annualSalary: 10000000, dateOfBirth: '1/06/1947' },
      { code: 'emp103', name: 'Wonder Woman', gender: 'Female', annualSalary: 10000000, dateOfBirth: '1/07/1947' },
      { code: 'emp104', name: 'Batman', gender: 'Male', annualSalary: 10000000, dateOfBirth: '1/08/1947' },
      { code: 'emp105', name: 'Thor', gender: 'Male', annualSalary: 10000000, dateOfBirth: '1/08/1947' }
    ];
  }

  trackByEmpCode(index: number, employee: any): string {
    return employee.code;
  }

  getTotalEmployeesCount(): number {
    return this.employees.length;
  }

  getTotalMaleEmployeesCount(): number {
    return this.employees.filter(e => e.gender === "Male").length;
  }


  getTotalFemaleEmployeesCount(): number {
    return this.employees.filter(e => e.gender === "Female").length;
  }


  onEmployeeCountRadioButtonChange(selectedRadioButtonValue: string): void {
    this.selectedEmployeeCountRadioButton = selectedRadioButtonValue;
  }
}