import { Injectable, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Observable} from 'rxjs';
import { Doc } from '../model/doc';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class DocsService implements OnInit {
  doc! : Observable<Doc[]>;
  currentUser!: firebase.default.User | null;

  constructor(private store: AngularFirestore, 
    private authService : AuthService ) {
    
  }
  ngOnInit(): void {
    this.authService.getCurrentUser().subscribe(user => {
      this.currentUser = user;

    })
  }

  // Add a public method to access the store
  getFirestoreInstance(): AngularFirestore {
    return this.store;
  }
}
