import { Component, OnInit } from '@angular/core';
import { EmployeeService } from '../employee.service';
import { Employee } from '../models/employee.model';


@Component({
  selector: 'app-employees',
  templateUrl: './employees.component.html',
  styleUrls: ['./employees.component.css']
})
export class EmployeesComponent implements OnInit {

  employees: Employee[] = [];

  constructor(public employeeService: EmployeeService) { }

  ngOnInit(): void {
    this.employeeService.getAll().subscribe((data: Employee[])=>{
      this.employees = data;
      console.log(this.employees);
    })  
  }

  deleteEmployee(id: Number){
    this.employeeService.deleteEmployee(id).subscribe(res => {
      this.employees = this.employees.filter(item => item.id !== id);
    });
  }

}
