import { animate, state, style, transition, trigger } from '@angular/animations';
import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatTableDataSource } from '@angular/material/table';
import { Project } from 'src/app/model/project';
import { TaskService } from 'src/app/shared/task.service';
import { ProjectDialogComponent, ProjectDialogResult } from '../project-dialog/project-dialog.component';

@Component({
  selector: 'app-project',
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.css'],
  animations: [
    trigger('detailExpand', [
      state('collapsed', style({height: '0px', minHeight: '0'})),
      state('expanded', style({height: '*'})),
      transition('expanded <=> collapsed', animate('225ms cubic-bezier(0.4, 0.0, 0.2, 1)')),
    ]),
  ],
})


export class ProjectComponent implements OnInit {
  isLoading = true;
  columnsToDisplay = [ 'name', 'description'];
  columnsToDisplayWithExpand = [...this.columnsToDisplay, 'expand'];
  expandedElement: Project | null | undefined;
  displayedColumns: string[] = [ 'name', 'description', 'createdAm'];
  dataSource: Project[] = []
  columns: string[] = [ 'Name', 'Tasks', 'Budget','Deadline', 'Members/Groups'];

    dummyProjects: Project[] = [
    {
      id: '1',
      name: 'Project Alpha',
      description: 'This is the first project',
      budget: '$10,000',
      tasks: ['Task 1', 'Task 2', 'Task 3'],
      deadline: new Date('2023-12-31'),
      member: ['John Doe', 'Jane Smith', 'Bob Williams'],
    },
    {
      id: '2',
      name: 'Project Beta',
      description: 'Another project in progress',
      budget: '$15,000',
      tasks: ['Task A', 'Task B', 'Task C'],
      deadline: new Date('2023-11-15'),
      member: ['Alice Johnson', 'Robert Brown'],
    },
    {
      name: 'Project Gamma',
      description: 'A new project',
      budget: '$8,000',
      tasks: ['Task X', 'Task Y'],
      deadline: new Date('2024-02-28'),
      member: ['Ella Davis', 'Michael Lee', 'Sophia Wilson'],
    },
  ];

  constructor(private dialog : MatDialog, private taskService : TaskService) {  }
  ngOnInit() {
    this.dataSource = this.dummyProjects;
    // this.taskService.project?.subscribe(projects => {
    // this.dataSource =  projects;
   // this.isLoading = false;
  //  });
  }
openDialog(): void {  
  const dialogRef = this.dialog.open(ProjectDialogComponent, {
    width: '500px',
    data: {
      project: {},
    },
  });
  dialogRef
    .afterClosed()
    .subscribe((result: ProjectDialogResult) => {
      if (!result) {
        return;
      }
      this.taskService.store1.collection('project').add(result.project);
      
    });
}
  // applyFilter(event: Event) {
  //   const filterValue = (event.target as HTMLInputElement).value;
  //   this.dataSource.filter = filterValue.trim().toLowerCase();
  // }

  }
  
