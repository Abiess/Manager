import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { TaskDialogResult } from 'src/app/task-dialog/task-dialog.component';
import { DocsformComponent } from '../docsform/docsform.component';

@Component({
  selector: 'app-docs',
  templateUrl: './docs.component.html',
  styleUrls: ['./docs.component.css']
})


export class DocsComponent {
  constructor(private dialog: MatDialog) {
  
  
  }

  addDoc(): void {
    const dialogRef = this.dialog.open(DocsformComponent, {
      maxWidth: '100vw',
      maxHeight: '100vh',
      height: '100%',
      width: '100%',
      panelClass: 'full-screen-modal',
      data: {
        task: {},
      },
    });
    dialogRef.afterClosed().subscribe((result: TaskDialogResult) => {
        if (!result) {return;}
        
      
      });
  }

}
