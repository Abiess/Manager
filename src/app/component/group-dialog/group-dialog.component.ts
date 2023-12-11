
import { group } from '@angular/animations';
import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Group } from 'src/app/model/Group';
import { __values } from 'tslib';

@Component({
  selector: 'app-group-dialog',
  templateUrl: './group-dialog.component.html',
  styleUrls: ['./group-dialog.component.css']
})
export class GroupDialogComponent {
  memberName: string = "";
  members: string[] = [];


  addGroup(): void {
    // Add the member name to the array
    this.members.push(this.memberName);
    //this.data.group.members?.push(this.memberName)
  
  }

  deleteMember(index: number): void {
    this.members.splice(index, 1);
    //this.data.group.members?.splice(index, 1)
  }

constructor(
  public dialogRef: MatDialogRef<GroupDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: TaskDialogData) {}

onNoClick(): void {
  this.dialogRef.close();
}
updateGroup(){
  this.data.group.members?.concat(this.members)
  { group: this.data.group}
  console.log("this is the added group  " + JSON.stringify(this.data.group.members))
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


