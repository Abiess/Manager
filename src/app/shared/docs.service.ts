import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Observable, of } from 'rxjs';
import { Doc } from '../model/doc';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class DocsService {
  UserUid : string = '';
  doc! : Observable<Doc[]>

  constructor(private store: AngularFirestore, private authService : AuthService ) {
    console.log("icbh bin im DOCS")
    this.newMethod();
  }

  private newMethod() {
    this.authService.getLoggedInUser().then(userInfo => {
      if (userInfo?.uid !== undefined) {
        this.UserUid = userInfo.uid;
        ;
        this.doc = this.getFirestoreInstance().collection('doc', ref => ref.where('creator', '==', this.UserUid)).valueChanges({ idField: 'id' }) as Observable<Doc[]>;


      }
    });
  }

  // Add a public method to access the store
  getFirestoreInstance(): AngularFirestore {
    return this.store;
  }
}
