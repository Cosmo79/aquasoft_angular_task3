import { Component, OnInit } from '@angular/core';
import { ProjectService } from '../project.service';
import { Project } from '../models/project.model';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})
export class ProjectsComponent implements OnInit {
  
  projects: Project[] = [];

  constructor(public projectService: ProjectService) { }

  ngOnInit(): void {
    this.projectService.getAll().subscribe((data: Project[])=>{
      this.projects = data;
      console.log(this.projects);
    })  
  }

}
