import { Dialog } from '@angular/cdk/dialog';
import { Component, Inject, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-group-dialog',
  templateUrl: './group-dialog.component.html',
  styleUrls: ['./group-dialog.component.css']
})
export class GroupDialogComponent {

constructor(
  public dialogRef: MatDialogRef<GroupDialogComponent>,
  @Inject(MAT_DIALOG_DATA) public data: DialogData,

)
 {}

onNoClick(): void {
  this.dialogRef.close();
}
}
export class DialogData {
  animal: string | undefined;
  name: string | undefined;
}

