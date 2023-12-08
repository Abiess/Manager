import { Component, Inject, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Observable } from 'rxjs';
import { Doc } from 'src/app/model/doc';
import { DocCategory } from 'src/app/model/DocCategory';
import { AuthService } from 'src/app/shared/auth.service';
import { CategoryService } from 'src/app/shared/category.service';
import { DocsService } from 'src/app/shared/docs.service';
import { AddCategoryDialogComponentComponent } from './add-category-dialog-component/add-category-dialog-component.component';

@Component({
  selector: 'app-doc-dialog',
  templateUrl: './doc-dialog.component.html',
  styleUrls: ['./doc-dialog.component.css']
})
export class DocDialogComponent implements OnInit {
  data: Doc[] = []
  message : string = ''
  categories : DocCategory[] = []
  docs: string | undefined;
  uploadedFileUrl: string | undefined;
  currentUser!: firebase.default.User | null;

  constructor(private docsService : DocsService, 
    private catService : CategoryService,
     private authService : AuthService,
     private store : AngularFirestore,
     @Inject(MAT_DIALOG_DATA) public mydata: DocDialogData,
     public dialogRef: MatDialogRef<DocDialogComponent>, 
     private dialog : MatDialog) {}

     private backupDoc: Partial<Doc> = { ...this.mydata.doc};
    cancel(): void {
      this.mydata.doc.attachements = this.backupDoc.attachements;
      this.mydata.doc.description = this.backupDoc.description;
      this.mydata.doc.name = this.backupDoc.name;
      this.mydata.doc.paid = this.backupDoc.paid;
      this.mydata.doc.createdAm = this.backupDoc.createdAm;
      this.mydata.doc.docsArt = this.backupDoc.docsArt;
      this.mydata.doc.creator = this.backupDoc.creator;
      this.dialogRef.close(this.mydata);
    }
  ngOnInit() {
    this.authService.getCurrentUser().subscribe(user => {
      this.currentUser = user;
      this.catService.getCategories(this.currentUser)?.subscribe(sd => {
        this.getFirestoreInstance().
    collection('DocCategory', ref => ref.where('creator', '==', this.currentUser?.uid)).valueChanges({ idField: 'id' }) as 
    Observable<DocCategory[]>;
        this.categories = sd;
      });
      this.docsService.doc?.subscribe(docs => {
        this.data = docs; 
      });
    
    })
    
  }
  openAddCategoryDialog(): void {
    const dialogRefCategorie = this.dialog.open(AddCategoryDialogComponentComponent, {
      width: '400px',
    });

    dialogRefCategorie.afterClosed().subscribe((result) => {
      if (result) {
        const newCategory: DocCategory = {
          name: result,
          createdAm: new Date(),
          creator: this.currentUser?.uid
        };
       
        this.catService.addCategory(newCategory).then(() => {
          return this.getFirestoreInstance().
          collection('DocCategory', ref => ref.where('creator', '==', this.currentUser?.uid)).valueChanges({ idField: 'id' }) as 
          Observable<DocCategory[]>;
      });
      }
    });
  }

  addCategory(category: DocCategory) {
    // Implement adding a new category to Firebase
    console.log('add category '+ this.currentUser?.uid)
      return this.getFirestoreInstance().collection('DocCategory').add(category )
  }
  // Add a public method to access the store
  getFirestoreInstance(): AngularFirestore {
    return this.store;
  }

  handleFileUpload(fileUrl: string) {
    if (!this.mydata.doc.attachements) {
      this.mydata.doc.attachements = []; // 
    }
    this.mydata.doc.attachements?.push({name: fileUrl, creator: this.currentUser?.uid!})
  }
}
  export interface DocDialogData {
    doc: Partial<Doc>;
    enableDelete: boolean;
    isCreateMode : boolean;
    
  }
  
  export interface DocDialogResult {
    doc: Doc;
    delete?: boolean;
  }
