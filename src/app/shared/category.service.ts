import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Observable,} from 'rxjs';
import { AuthService } from './auth.service';
import { DocCategory } from 'src/app/model/DocCategory';
import { MatDialog } from '@angular/material/dialog';

@Injectable({
  providedIn: 'root'
})
export class CategoryService{
  UserUid : string = '';
  categories! : Observable<DocCategory[]>

  constructor(private store: AngularFirestore,
     private authService : AuthService,
     private dialog: MatDialog  ) { this.newMethod();
  }
 

  private newMethod() {
    this.authService.getLoggedInUser().then(userInfo => {
      if (userInfo?.uid !== undefined) {
        this.UserUid = userInfo.uid;
        console.log("new method " + this.UserUid)
 
      }
    });
  }
   
  getCategories() : Observable<DocCategory[]>{
    console.log("the user Id is " + this.UserUid)
    return this.categories = this.getFirestoreInstance().
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


