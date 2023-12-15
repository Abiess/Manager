import { Injectable } from '@angular/core';
import { user } from '@angular/fire/auth';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Router } from '@angular/router';
import { interval, Observable, of, Subscription } from 'rxjs';
import { Doc } from '../model/doc';
import { Group } from '../model/Group';
import { Project } from '../model/project';
import { Task } from '../task/task';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class TaskService {
  store1 : AngularFirestore;
  todo!: Observable<Task[]>;
  inProgress!: Observable<Task[]>;
  done!: Observable<Task[]>;
  group!: Observable<Group[]>;
  project!: Observable<Project[]>;
  doc! : Observable<Doc[]>;
  taskCreationObservable!: Observable<number>;
   dailyIntervalDuration = 24 * 60 * 60 * 1000;
   weeklyIntervalDuration = this.dailyIntervalDuration * 7;
   monthlyIntervalDuration = this.weeklyIntervalDuration * 4;
   annualyIntervalDuration = this.monthlyIntervalDuration * 12;
   usedInterval! : number ;

 

 
   taskSubscriptions: { [id: string]: Subscription } = {};
   
  constructor(private store: AngularFirestore, 
    private authService : AuthService , 
    private router : Router) {
  
    this.authService.getCurrentUser().subscribe(user => {
      if (user) {
        this.todo = of([]);
         // Using 'of' from RxJS to create an observable with an initial value.
        this.todo = this.store.collection('todo', ref => ref.where('creator', '==', user.uid)).valueChanges({ idField: 'id' }) as Observable<Task[]>;
        this.inProgress = this.store.collection('inProgress', ref => ref.where('creator', '==', user.uid)).valueChanges({ idField: 'id' }) as Observable<Task[]>;
        this.done = this.store.collection('done', ref => ref.where('creator', '==', user.uid)).valueChanges({ idField: 'id' }) as Observable<Task[]>;
        this.group = this.store.collection('group').valueChanges({ idField: 'id' }) as Observable<Group[]>;
        this.project = this.store.collection('project').valueChanges({ idField: 'id' }) as Observable<Project[]>;
        this.doc = this.store.collection('doc').valueChanges({ idField: 'id' }) as Observable<Doc[]>;
      }});
      this.store1 = store;
    }
    
    startTaskCreation(task: Task): void {
      // Ensure there is no existing subscription for the same task
      this.stopTaskCreation(task);
      if (task.frequency !== undefined){
        if (task.frequency == "daily"){
          this.usedInterval = this.dailyIntervalDuration;
     }
     if (task.frequency == "weekly"){
          this.usedInterval = this.weeklyIntervalDuration;
     }
     if (task.frequency == "monthly"){
       this.usedInterval = this.weeklyIntervalDuration;
     }
     if (task.frequency == "annually"){
       this.usedInterval = this.annualyIntervalDuration;
     }
    
     // Create a new subscription for the specified task
     this.taskSubscriptions[task.id!] = interval(this.usedInterval).subscribe(() => {
      
       // Perform your action here every second for the specific task
       task.createdAm = new Date().toISOString();
       task.isforked = true;
       this.store.collection('todo').add(task)
     });
   }
      }
     
  
    stopTaskCreation(task: Task): void {
      // Unsubscribe and remove the subscription for the specified task
      const subscription = this.taskSubscriptions[task.id!];
      if (subscription) {
        subscription.unsubscribe();
        delete this.taskSubscriptions[task.id!];
      }
    }

  search(searchTerm: string){
     this.todo = this.store.collection('todo', ref => ref.where('title', '==', searchTerm))
      .valueChanges({ idField: 'id' }) as Observable<Task[]>;
  }
}
