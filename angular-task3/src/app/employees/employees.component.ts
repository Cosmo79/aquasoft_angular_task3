import { Component, OnInit } from '@angular/core';
import { EmployeeService } from '../employee.service';
import { Router } from '@angular/router';
import { Employee } from '../models/employee.model';
import { FormGroup, FormControl, Validators} from '@angular/forms';
import {ModalDismissReasons, NgbModal} from '@ng-bootstrap/ng-bootstrap';


@Component({
  selector: 'app-employees',
  templateUrl: './employees.component.html',
  styleUrls: ['./employees.component.css']
})
export class EmployeesComponent implements OnInit {

  closeResult: string;
  form: FormGroup;
  employees: Employee[] = [];

  constructor(public employeeService: EmployeeService,
    private modalService: NgbModal,
    private router: Router) { }

  ngOnInit(): void {
    this.employeeService.getAll().subscribe((data: Employee[])=>{
      this.employees = data;
      console.log(this.employees);
    })  
    this.form = new FormGroup({
      name: new FormControl('', [Validators.required]),
      email: new FormControl('', Validators.required),
      hire_date: new FormControl('', [Validators.required]),
      salary: new FormControl('', [Validators.required]),
      job_title: new FormControl('', [Validators.required]),
      project_id: new FormControl('', [Validators.required])
    });
  }

  deleteEmployee(id: Number){
    this.employeeService.deleteEmployee(id).subscribe(res => {
      this.employees = this.employees.filter(item => item.id !== id);
    });
  }


  open(content) {
    this.modalService.open(content, {ariaLabelledBy: 'modal-basic-title'}).result.then((result) => {
      this.closeResult = `Closed with: ${result}`;
    }, (reason) => {
      this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
    });
  }
  
  private getDismissReason(reason: any): string {
    if (reason === ModalDismissReasons.ESC) {
      return 'by pressing ESC';
    } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
      return 'by clicking on a backdrop';
    } else {
      return `with: ${reason}`;
    }
  }

  get f(){
    return this.form.controls;
  }
    
  submit(){
    console.log(this.form.value);
    this.employeeService.createEmployee(this.form.value).subscribe(res => {
        console.log('Employee created successfully!');
        this.ngOnInit(); //reload the table
    });
    this.modalService.dismissAll(); //dismiss the modal
  }
}
