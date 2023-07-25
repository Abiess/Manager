import {Component, OnInit} from '@angular/core';
import {animate, state, style, transition, trigger} from '@angular/animations';

import { MatDialog, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { GroupDialogComponent, GroupDialogResult } from '../group-dialog/group-dialog.component';
import { MatTableDataSource } from '@angular/material/table';
import { Group } from '../../model/Group';
import { TaskService } from 'src/app/shared/task.service';
import { DataSource } from '@angular/cdk/collections';

@Component({
  selector: 'app-group',
  templateUrl: './group.component.html',
  styleUrls: ['./group.component.css'],
  animations: [
    trigger('detailExpand', [
      state('collapsed', style({height: '0px', minHeight: '0'})),
      state('expanded', style({height: '*'})),
      transition('expanded <=> collapsed', animate('225ms cubic-bezier(0.4, 0.0, 0.2, 1)')),
    ]),
  ],
})


export class GroupComponent implements OnInit {
  columnsToDisplay = [ 'name', 'description'];
  columnsToDisplayWithExpand = [...this.columnsToDisplay, 'expand'];
  expandedElement: Group | null | undefined;
  displayedColumns: string[] = [ 'name', 'description', 'createdAm'];
  //dataSource: MatTableDataSource<Group> = new MatTableDataSource<Group>();
  subDisplayedColumns: string[] = [ 'jj', 'ju', 'jujj'];
  data : Group[] = [];
  

  constructor(private dialog : MatDialog, private taskService : TaskService) {  }
  ngOnInit() {
  this.taskService.group?.subscribe(groups => {
      this.data = groups;
    });
  
  }
openDialog(): void {  
  const dialogRef = this.dialog.open(GroupDialogComponent, {
    width: '500px',
    data: {
      group: {},
    },
  });
  dialogRef
    .afterClosed()
    .subscribe((result: GroupDialogResult) => {
      if (!result) {
        return;
      }
      this.taskService.store1.collection('group').add(result.group);
      console.log("group is " + result.group)
    });
}
  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
   // this.dataSource.filter = filterValue.trim().toLowerCase();
  }
}
  

  
  