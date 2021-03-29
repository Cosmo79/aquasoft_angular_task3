import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import {  Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

import  { Employee } from './models/employee.model';


@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  }

  constructor(private httpClient: HttpClient) { }

  private baseUrl = 'http://localhost:3000/employees/';

  getAll(): Observable<Employee[]> {
    return this.httpClient.get<Employee[]>(this.baseUrl)
    .pipe(
      catchError(this.errorHandler)
    )
  };

  getEmployee(id): Observable<Employee> {
    return this.httpClient.get<Employee>(this.baseUrl+ id)
    .pipe(
      catchError(this.errorHandler)
    )
  }  

  createEmployee(employee): Observable<Employee> {
    return this.httpClient.post<Employee>(this.baseUrl, JSON.stringify(employee), this.httpOptions)
    .pipe(
      catchError(this.errorHandler)
    )
  };  

  updateEmployee(id, employee): Observable<Employee> {
    return this.httpClient.put<Employee>(this.baseUrl + id, JSON.stringify(employee), this.httpOptions)
    .pipe(
      catchError(this.errorHandler)
    )
  };

  deleteEmployee(id: Number){
    return this.httpClient.delete<Employee>(this.baseUrl + id, this.httpOptions)
    .pipe(
      catchError(this.errorHandler)
    )
  };

  errorHandler(error) {
    let errorMessage = '';
    if(error.error instanceof ErrorEvent) {
      errorMessage = error.error.message;
    } else {
      errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
    }
    return throwError(errorMessage);
 }
}
