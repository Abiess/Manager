import { Injectable, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Observable,} from 'rxjs';
import { AuthService } from './auth.service';
import { DocCategory } from 'src/app/model/DocCategory';



@Injectable({
  providedIn: 'root'
})
export class CategoryService implements OnInit{
  //currentUser!: firebase.default.User | null;

  constructor(private store: AngularFirestore,
     private authService : AuthService) { 
     
  }
  ngOnInit(): void {
    this.authService.getCurrentUser().subscribe(user => {
      //this.currentUser = user;
    });
  }

 
   
  getCategories(currentUser : any) : Observable<DocCategory[]>{
    console.log("i am here " + JSON.stringify(currentUser.uid))
    
   return this.getFirestoreInstance().
    collection('DocCategory', ref => ref.where('creator', '==', currentUser?.uid)).valueChanges({ idField: 'id' }) as 
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


