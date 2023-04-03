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

constructor(
  public dialogRef: MatDialogRef<ProjectDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: ProjectDialogData) {}

onNoClick(): void {
  this.dialogRef.close();
}

}
export interface ProjectDialogData {
  project: Partial<Project>;
  enableDelete: boolean;
}
export interface ProjectDialogResult {
  project: Project;
  delete?: boolean;
}

