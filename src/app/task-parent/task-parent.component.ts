import { Component, OnInit } from '@angular/core';
import { CdkDragDrop, transferArrayItem } from '@angular/cdk/drag-drop';
import { MatDialog } from '@angular/material/dialog';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Observable } from 'rxjs';
import { Task } from '../task/task';
import { TaskDialogComponent, TaskDialogResult } from '../task-dialog/task-dialog.component';
import { TaskService } from '../shared/task.service';
import { AuthService } from '../shared/auth.service';
import { getMatInputUnsupportedTypeError } from '@angular/material/input';


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

  
  constructor(private dialog: MatDialog, private taskService : TaskService, private userService : AuthService) {
    this.taskService.todo.subscribe((users)=> {
        console.log(users);
    });
    this.taskService.todo.subscribe((users)=> {
      console.log(users);
  });
    
  }
  ngOnInit(): void {
      // Simulate data loading
   this.todo.subscribe({
    next: () => {
      this.isLoading = false; // Set loading flag to false when data is loaded
    },
    error: () => {
      this.isLoading = false; // Set loading flag to false in case of an error
    }
  });
  }
  
  newTask(): void {
    const dialogRef = this.dialog.open(TaskDialogComponent, {
      width: '470px',
      data: {
        task: {},
      },
    });
    dialogRef.afterClosed().subscribe((result: TaskDialogResult) => {
        if (!result) {return;}
        this.userService.getLoggedInUser().then(userInfo => {
           result.task.creator = userInfo?.uid;
           result.task.createdAm = new Date();
           this.taskService.store1.collection('todo').add(result.task);
        })
        .catch(error => {
          console.log('Error retrieving logged-in user:', error);
        });
        
        console.log("task is " + JSON.stringify(result.task)  )
      });
  }

  editTask(list: 'done' | 'todo' | 'inProgress', task: Task): void {
    const dialogRef = this.dialog.open(TaskDialogComponent, {
      width: '500px',
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
      } else {
        this.taskService.store1.collection(list).doc(task.id).update(task);
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