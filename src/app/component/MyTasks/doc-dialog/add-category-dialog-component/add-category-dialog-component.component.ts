import { Component } from '@angular/core';
import { Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { DocCategory } from 'src/app/model/DocCategory';

@Component({
  selector: 'app-add-category-dialog-component',
  templateUrl: './add-category-dialog-component.component.html',
  styleUrls: ['./add-category-dialog-component.component.css']
})
export class AddCategoryDialogComponentComponent {
  categoryName: string = '';

  constructor(
    public dialogRef: MatDialogRef<AddCategoryDialogComponentComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {}

  onCancelClick(): void {
    this.dialogRef.close();
  }
}

