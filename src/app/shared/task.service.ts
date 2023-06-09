import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Observable, of } from 'rxjs';
import { Group } from '../model/Group';
import { Task } from '../task/task';

@Injectable({
  providedIn: 'root'
})
export class TaskService {

  todo: Observable<Task[]>;
  inProgress: Observable<Task[]>;
  done: Observable<Task[]>;
  group : Observable<Group[]>
  project : Observable<Group[]>
  store1 : AngularFirestore;

  constructor(private store: AngularFirestore) {
    this.store1 = store;
    this.todo = this.store.collection('todo').valueChanges({ idField: 'id' }) as Observable<Task[]>;
    this.inProgress = this.store.collection('inProgress').valueChanges({ idField: 'id' }) as Observable<Task[]>;
    this.done = this.store.collection('done').valueChanges({ idField: 'id' }) as Observable<Task[]>;
    this.group = this.store.collection('group').valueChanges({ idField: 'id' }) as Observable<Group[]>;
    this.project = this.store.collection('project').valueChanges({ idField: 'id' }) as Observable<Group[]>;

  }

  search(searchTerm: string){
     this.todo = this.store.collection('todo', ref => ref.where('title', '==', searchTerm))
      .valueChanges({ idField: 'id' }) as Observable<Task[]>;
  
    this.todo.subscribe((todo) => console.log("dddd"+todo));
  }
  
}
