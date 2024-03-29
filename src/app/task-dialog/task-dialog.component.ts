import { Component, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { TaskService } from '../shared/task.service';
import { Task } from '../task/task';

@Component({
  selector: 'app-task-dialog',
  templateUrl: './task-dialog.component.html',
  styleUrls: ['./task-dialog.component.css']
})
export class TaskDialogComponent {
 
   private backupTask: Partial<Task> = { ...this.data.task };
  
    constructor(
      public dialogRef: MatDialogRef<TaskDialogComponent>,
      @Inject(MAT_DIALOG_DATA) public data: TaskDialogData, private taskService : TaskService
    ) {}
  
    cancel(): void {
      this.data.task.title = this.backupTask.title!;
      this.data.task.description = this.backupTask.description!;
      this.data.task.deadline = this.backupTask.deadline!;
      this.data.task.frequency = this.backupTask.frequency!;
      this.dialogRef.close(this.data);
    }
   
}

export interface TaskDialogData {
  task: Task;
  enableDelete: boolean;
  isCreateMode : boolean;
}

export interface TaskDialogResult {
  task: Task;
  delete?: boolean;
}


