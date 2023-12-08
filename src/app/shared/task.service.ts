import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Router } from '@angular/router';
import { Observable, of } from 'rxjs';
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

  constructor(private store: AngularFirestore, private authService : AuthService , private router : Router) {
  
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
  
  this.store1 = store;}

  search(searchTerm: string){
     this.todo = this.store.collection('todo', ref => ref.where('title', '==', searchTerm))
      .valueChanges({ idField: 'id' }) as Observable<Task[]>;
  }
  
}
