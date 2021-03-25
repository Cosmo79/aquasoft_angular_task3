import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';
import { Project } from './models/project.model'

@Injectable({
  providedIn: 'root'
})
export class ProjectsService {

  projects: Project[] = [
    {
      id: 1,
      project_name: "project1",
      start_date: "2020-01-01",
      planned_end_date: "2021-01-01",
      description: "abc",
      project_code: "45fd56"
    },
    {
      id: 2,
      project_name: "project2",
      start_date: "2020-01-01",
      planned_end_date: "2022-01-01",
      description: "def",
      project_code: "xvcx43"
    },
    {
      id: 3,
      project_name: "project3",
      start_date: "2020-01-01",
      planned_end_date: "2023-01-01",
      description: "ghi",
      project_code: "fg64sd"
    }
  ];

  constructor(private http: HttpClient) { }

  onGet() {
    return this.projects;
  }
}
