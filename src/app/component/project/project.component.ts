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
  dataSource: MatTableDataSource<Project> = new MatTableDataSource<Project>();
  subDisplayedColumns: string[] = [ 'jj', 'ju', 'jujj'];

  constructor(private dialog : MatDialog, private taskService : TaskService) {  }
  ngOnInit() {
    
    this.taskService.project?.subscribe(projects => {
    this.dataSource = new MatTableDataSource(projects);
    this.isLoading = false;
    });
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
  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  }
  
