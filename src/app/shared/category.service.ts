import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Observable,} from 'rxjs';
import { AuthService } from './auth.service';
import { DocCategory } from 'src/app/model/DocCategory';

@Injectable({
  providedIn: 'root'
})
export class CategoryService{
  UserUid : string = '';

  constructor(private store: AngularFirestore,
     private authService : AuthService) { 
      this.newMethod();
  }

  private newMethod() {
    this.authService.getLoggedInUser().then(userInfo => {
      if (userInfo?.uid !== undefined) {
        this.UserUid = userInfo?.uid;
      }
    });
  }
   
  getCategories() : Observable<DocCategory[]>{
   return this.getFirestoreInstance().
    collection('DocCategory', ref => ref.where('creator', '==', this.UserUid)).valueChanges({ idField: 'id' }) as 
    Observable<DocCategory[]>;
    
  }

  addCategory(category: DocCategory) {
    // Implement adding a new category to Firebase
      return this.getFirestoreInstance().collection('DocCategory').add(category )
  }

  // Add a public method to access the store
  getFirestoreInstance(): AngularFirestore {
    return this.store;
  }
}


