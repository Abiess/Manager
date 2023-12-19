
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
export class GroupDialogComponent implements OnInit{
  memberName: string = "";
  members: string[] = [];
  private backupGroup: Partial<Group> = { ...this.data.group};
  cancel(): void {
    this.data.group.description = this.backupGroup.description;
    this.data.group.name = this.backupGroup.name;
    this.data.group.members = this.backupGroup.members;
    this.data.group.createdAm = this.backupGroup.createdAm;
    this.data.group.deadline = this.backupGroup.deadline;
    this.data.group.creator = this.backupGroup.creator;
    this.dialogRef.close(this.data);
  }
  addGroup(group : Partial<Group>): void {
    // Add the member name to the array
    if (!group.members) {
      group.members = [];  // If it doesn't exist, create an empty array
    }
  
    this.members.push(this.memberName);
    group.members?.push({joinedAt: new Date().toString(), member: this.memberName})
    console.log("the members " + JSON.stringify(group))
  
  }

  deleteMember(index: number, group : Partial<Group>): void {
    if (!group.members) {
      group.members = [];  // If it doesn't exist, create an empty array
    }
  
    this.members.splice(index, 1);
    group.members?.splice(index, 1)
    
  }

constructor(
  public dialogRef: MatDialogRef<GroupDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: TaskDialogData) {}
  ngOnInit(): void {
  
  }

onNoClick(): void {
  this.dialogRef.close();
}
}
export interface TaskDialogData {
  group: Partial<Group>;
  enableDelete: boolean;
  isCreateMode : boolean;
}
export interface GroupDialogResult {
  group: Group;
  delete?: boolean;
  
}


