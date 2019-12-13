export interface IEmployee {
  code: string;
  name: string;
  gender: string;
  annualSalary: number;
  dateOfBirth: string;
  department?: string;

  // computeMonthlySalary(annualSalary: number): number;
}

export class Employee implements IEmployee {
  // private code: string;
  // private name: string;
  // public gender: string;
  // public annualSalary: string;
  // public dateOfBirth: string;

  // constructor(code: string,
  //   name: string,
  //   gender: string,
  //   annualSalary: string,
  //   dateOfBirth: string) {
  //   this.code = code;
  //   this.name = name;
  //   this.gender = gender;
  //   this.annualSalary = annualSalary;
  //   this.dateOfBirth = dateOfBirth;
  // }
  constructor(public code: string,
    public name: string,
    public gender: string,
    public annualSalary: number,
    public dateOfBirth: string) {

  }

  // computeMonthlySalary(annualSalary: number): number {
  //   return (annualSalary / 12);
  // }
}