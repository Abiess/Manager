import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Observable, of } from 'rxjs';
import { Group } from '../model/Group';
import { Project } from '../model/project';
import { Task } from '../task/task';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class TaskService {
  store1 : AngularFirestore;
  UserUid : string = '';
  todo!: Observable<Task[]>;
  inProgress!: Observable<Task[]>;
  done!: Observable<Task[]>;
  group!: Observable<Group[]>;
  project!: Observable<Project[]>;

  constructor(private store: AngularFirestore, private authService : AuthService ) {
    this.authService.getLoggedInUser().then(userInfo => {
      if (userInfo?.uid !== undefined) {
        this.UserUid = userInfo.uid;
        this.todo = of([]); // Using 'of' from RxJS to create an observable with an initial value.
        this.todo = this.store.collection('todo', ref => ref.where('creator', '==', this.UserUid)).valueChanges({ idField: 'id' }) as Observable<Task[]>;
        this.inProgress = this.store.collection('inProgress', ref => ref.where('creator', '==', this.UserUid)).valueChanges({ idField: 'id' }) as Observable<Task[]>;
        this.done = this.store.collection('done', ref => ref.where('creator', '==', this.UserUid)).valueChanges({ idField: 'id' }) as Observable<Task[]>;
        this.group = this.store.collection('group').valueChanges({ idField: 'id' }) as Observable<Group[]>;
        this.project = this.store.collection('project').valueChanges({ idField: 'id' }) as Observable<Project[]>;
 
      }
    })
    this.store1 = store;
  }

  search(searchTerm: string){
     this.todo = this.store.collection('todo', ref => ref.where('title', '==', searchTerm))
      .valueChanges({ idField: 'id' }) as Observable<Task[]>;
  }
  
}
