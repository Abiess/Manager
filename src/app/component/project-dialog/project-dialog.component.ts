import { Dialog } from '@angular/cdk/dialog';
import { Component, Inject, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import {Project } from 'src/app/model/project';

@Component({
  selector: 'app-project-dialog',
  templateUrl: './project-dialog.component.html',
  styleUrls: ['./project-dialog.component.css']
})
export class ProjectDialogComponent {
  memberName: string = "";
  members: string[] = [];
  private backupGroup: Partial<Project> = { ...this.data.project};
  cancel(): void {
    this.data.project.description = this.backupGroup.description;
    this.data.project.name = this.backupGroup.name;
    this.data.project.members = this.backupGroup.members;
    this.data.project.createdAm = this.backupGroup.createdAm;
    this.data.project.deadline = this.backupGroup.deadline;
    this.data.project.creator = this.backupGroup.creator;
    this.dialogRef.close(this.data);
  }
  addProject(project : Partial<Project>): void {
    // Add the member name to the array
    if (!project.members) {
      project.members = [];  // If it doesn't exist, create an empty array
    }
  
    this.members.push(this.memberName);
    project.members?.push("")

  
  }

  deleteMember(index: number, group : Partial<Project>): void {
    if (!group.members) {
      group.members = [];  // If it doesn't exist, create an empty array
    }
  
    this.members.splice(index, 1);
    group.members?.splice(index, 1)
    
  }

constructor(
  public dialogRef: MatDialogRef<ProjectDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: ProjectDialogData) {}
  ngOnInit(): void {
  
  }

onNoClick(): void {
  this.dialogRef.close();
}
}
export interface ProjectDialogData {
  project: Partial<Project>;
  enableDelete: boolean;
  isCreateMode : boolean;
}
export interface ProjectDialogResult {
  project: Project;
  delete?: boolean;
  
}
