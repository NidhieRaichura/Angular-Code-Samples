import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { EmployeeComponent } from './employee/employee.component';
import { BindingComponent } from './binding/binding.component';
import { EmployeeListComponent } from './employee-list/employee-list.component';
import { EmployeeTitlePipe } from './employee-title.pipe';
import { EmployeeCountComponent } from './employee-count/employee-count.component';
import { EmployeeService } from './employee.service';

@NgModule({
  imports: [BrowserModule, FormsModule],
  declarations: [AppComponent, EmployeeComponent, BindingComponent, EmployeeListComponent, EmployeeTitlePipe, EmployeeCountComponent],
  bootstrap: [AppComponent],
  providers: [EmployeeService]
})
export class AppModule { }
