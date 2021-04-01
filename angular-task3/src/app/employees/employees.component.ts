import { Component, OnInit, ViewChild, AfterViewInit } from '@angular/core';
import { EmployeeService } from '../employee.service';
import { Router } from '@angular/router';
import { Employee } from '../models/employee.model';
import { NgbModal} from '@ng-bootstrap/ng-bootstrap';
import { AddEmployeeComponent } from './add-employee/add-employee.component';


@Component({
  selector: 'app-employees',
  templateUrl: './employees.component.html',
  styleUrls: ['./employees.component.css']
})
export class EmployeesComponent implements OnInit {

  @ViewChild(AddEmployeeComponent) child;

  employees: Employee[] = [];
  result: {};


  constructor(public employeeService: EmployeeService,
    private modalService: NgbModal,
    private router: Router) { }

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

  receiveEmployee($event) {
    this.result = $event;
    console.log(this.result);
    this.employeeService.createEmployee(this.result).subscribe(res => {
      console.log('Employee created successfully!');
      this.ngOnInit(); //reload the table
    });
  }
}
