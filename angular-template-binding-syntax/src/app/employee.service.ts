import { Injectable } from '@angular/core';
import { IEmployee } from './employee';
// To inject any dependencies in the service class
@Injectable()
export class EmployeeService {

  constructor() { }
  getEmployees(): IEmployee[] {
    return [
      { code: 'emp101', name: 'Iron Man', gender: 'Male', annualSalary: 10000000, dateOfBirth: '1/05/1947' },
      { code: 'emp102', name: 'Black Widow', gender: 'Female', annualSalary: 10000000, dateOfBirth: '1/06/1947' },
      { code: 'emp103', name: 'Wonder Woman', gender: 'Female', annualSalary: 10000000, dateOfBirth: '1/07/1947' },
      { code: 'emp104', name: 'Batman', gender: 'Male', annualSalary: 10000000, dateOfBirth: '1/08/1947' }
    ];
  }
}