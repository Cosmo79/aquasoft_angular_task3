import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import {ModalDismissReasons, NgbModal} from '@ng-bootstrap/ng-bootstrap';
import { EmployeeService } from 'src/app/employee.service';
import { Employee } from 'src/app//models/employee.model';
import { FormGroup, FormControl, Validators} from '@angular/forms';

@Component({
  selector: 'app-add-employee',
  templateUrl: './add-employee.component.html',
  styleUrls: ['./add-employee.component.css']
})
export class AddEmployeeComponent implements OnInit {

  closeResult: string;
  form: FormGroup;
  employees: Employee[] = [];

  @Output() emitEmployee = new EventEmitter<object>();

  constructor(
    public employeeService: EmployeeService,
    private modalService: NgbModal,
  ) { }

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
    this.emitEmployee.emit(this.form.value);
    this.modalService.dismissAll(); //dismiss the modal
  }
}
