import { Component, OnInit } from '@angular/core';
import { CdkDragDrop, transferArrayItem } from '@angular/cdk/drag-drop';
import { MatDialog } from '@angular/material/dialog';
import { Task } from '../task/task';
import { TaskDialogComponent, TaskDialogResult } from '../task-dialog/task-dialog.component';
import { TaskService } from '../shared/task.service';
import { AuthService } from '../shared/auth.service';
import { UserInfo } from 'firebase/auth';
import { concat } from 'rxjs';




@Component({
  selector: 'app-task-parent',
  templateUrl: './task-parent.component.html',
  styleUrls: ['./task-parent.component.css']
})

export class TaskParentComponent implements OnInit{
  isLoading = true;

  todo = this.taskService.todo;
  inProgress = this.taskService.inProgress;
  done = this.taskService.done;
  userDetails!: UserInfo | null;

  
  constructor(private dialog: MatDialog, 
    private taskService : TaskService,
    private authService : AuthService) {
   
  }
  ngOnInit(): void {  
    
   this.todo?.subscribe({
    next: () => {
      this.isLoading = false; // Set loading flag to false when data is loaded
    },
    error: () => {
      this.isLoading = false; // Set loading flag to false in case of an error
    }
  });
  this.inProgress?.subscribe({
    next: () => {
      this.isLoading = false; // Set loading flag to false when data is loaded
    },
    error: () => {
      this.isLoading = false; // Set loading flag to false in case of an error
    }
  });
  this.done?.subscribe({
    next: () => {
      this.isLoading = false; // Set loading flag to false when data is loaded
    },
    error: () => {
      this.isLoading = false; // Set loading flag to false in case of an error
    }
  });

  this.authService.getCurrentUser().subscribe(user => {
    this.userDetails = user;
  
  });
}

  
  newTask(): void {
    const dialogRef = this.dialog.open(TaskDialogComponent, {
      maxWidth: '100vw',
      maxHeight: '100vh',
      height: '100%',
      width: '100%',
      panelClass: 'full-screen-modal',
      data: {
        task: {},
        isCreateMode : true
        
      },
    });
    dialogRef.afterClosed().subscribe((result: TaskDialogResult) => {
        if (!result) {return;}
          if (this.userDetails){
            result.task.creator = this.userDetails.uid ;
            result.task.createdAm = new Date().toISOString();
            result.task.isforked = false;
            result.task.id = `${result.task.creator}_${result.task.createdAm}`;
            this.taskService.store1.collection('todo').add(result.task);
            this.taskService.startTaskCreation(result.task);
          }
        })
  }

  editTask(list: 'done' | 'todo' | 'inProgress', task: Task): void {
    const dialogRef = this.dialog.open(TaskDialogComponent, {
      maxWidth: '100vw',
      maxHeight: '100vh',
      height: '100%',
      width: '100%',
      panelClass: 'full-screen-modal',
      data: {
        task,
        enableDelete: true,
      },
    });
    dialogRef.afterClosed().subscribe((result: TaskDialogResult) => {
      if (!result) {
        return;
      }
      if (result.delete) {
        this.taskService.store1.collection(list).doc(task.id).delete();
        this.taskService.stopTaskCreation(result.task);
      } else {
        this.taskService.store1.collection(list).doc(task.id).update(task);
        this.taskService.startTaskCreation(result.task);
      }
    });
  }

  drop(event: CdkDragDrop<Task[]|null>): void {
    if (event.previousContainer === event.container) {
      return;
    }
    if (!event.previousContainer.data || !event.container.data) {
      return;
    }
    const item = event.previousContainer.data[event.previousIndex];
    this.taskService.store1.firestore.runTransaction(() => {
      const promise = Promise.all([
        this.taskService.store1.collection(event.previousContainer.id).doc(item.id).delete(),
        this.taskService.store1.collection(event.container.id).add(item),
      ]);
      return promise;
    });
    transferArrayItem(
      event.previousContainer.data,
      event.container.data,
      event.previousIndex,
      event.currentIndex
    );
  }

}

