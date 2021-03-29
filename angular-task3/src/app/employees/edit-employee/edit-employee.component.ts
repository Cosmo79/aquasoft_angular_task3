import { Component, OnInit } from '@angular/core';
import { EmployeeService } from 'src/app/employee.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Employee } from 'src/app/models/employee.model';
import { FormGroup, FormControl, Validators} from '@angular/forms';
import {ModalDismissReasons, NgbModal} from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-edit-employee',
  templateUrl: './edit-employee.component.html',
  styleUrls: ['./edit-employee.component.css']
})
export class EditEmployeeComponent implements OnInit {

  id: number;
  employee: Employee;
  form: FormGroup;

  constructor( 
    public employeeService: EmployeeService,
    private route: ActivatedRoute,
    private router: Router,
    private modalService: NgbModal) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    this.employeeService.getEmployee(this.id).subscribe((data: Employee)=>{
      this.employee = data;
    });

    this.form = new FormGroup({
      name: new FormControl('', [Validators.required]),
      email: new FormControl('', Validators.required),
      hire_date: new FormControl('', [Validators.required]),
      salary: new FormControl('', [Validators.required]),
      job_title: new FormControl('', [Validators.required]),
      project_id: new FormControl('', [Validators.required])
    });
  }

  get f(){
    return this.form.controls;
  }

  submit(){
    console.log(this.form.value);
    this.employeeService.updateEmployee(this.id, this.form.value).subscribe(res => {
         console.log('Post updated successfully!');
         this.router.navigateByUrl('/employees');
    })
  }

}
