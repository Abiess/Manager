import { Dialog } from '@angular/cdk/dialog';
import { Component, Inject, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Group } from 'src/app/model/Group';

@Component({
  selector: 'app-group-dialog',
  templateUrl: './group-dialog.component.html',
  styleUrls: ['./group-dialog.component.css']
})
export class GroupDialogComponent {

constructor(
  public dialogRef: MatDialogRef<GroupDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: TaskDialogData) {}

onNoClick(): void {
  this.dialogRef.close();
}

}
export interface TaskDialogData {
  group: Partial<Group>;
  enableDelete: boolean;
}
export interface GroupDialogResult {
  group: Group;
  delete?: boolean;
  
}

