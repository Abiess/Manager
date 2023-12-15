import { Component } from '@angular/core';
import { Doc } from 'src/app/model/doc';
import { AuthService } from 'src/app/shared/auth.service';
import { DocsService } from 'src/app/shared/docs.service';
import { DocDialogComponent, DocDialogResult } from '../doc-dialog/doc-dialog.component';
import { MatDialog } from '@angular/material/dialog';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { filter, map, Observable, of } from 'rxjs';



@Component({
  selector: 'app-docs',
  templateUrl: './docs.component.html',
  styleUrls: ['./docs.component.css']
})


export class DocsComponent {

  data!: Observable<Doc[]>;
  filteredData!:  Observable<Doc[]>;
  searchText: string = '';
  currentUser!: firebase.default.User | null;
 
  constructor(private docsService : DocsService ,
     private dialog : MatDialog,
     private authService : AuthService, 
     private store: AngularFirestore,) {}
     
     
  ngOnInit() {
    this.authService.getCurrentUser().subscribe(user => {
      this.currentUser = user ;
      if (this.currentUser){
        this.data = this.store.collection('doc', ref => 
        ref.where('creator', '==', this.currentUser?.uid)).valueChanges({ idField: 'id' }) as Observable<Doc[]>;
        this.filteredData = this.data;
      }
    })
    }
      docs: string | undefined;
      uploadedFileUrl: string | undefined;

      openLink(url: string): void {
        window.open(url, '_blank');
      }

      filterData() {
        this.filteredData = this.data.pipe(
         map(d =>{
          return d.filter(l => l.name.toLowerCase().includes(this.searchText.toLowerCase()))
         }))
      }

  handleFileUpload(fileUrl: string) {
    // Handle the uploaded file URL (e.g., store it or use it as needed)
    this.uploadedFileUrl = fileUrl;
  }
  
  editDoc(test : Doc){
     // this.formData = this.data.filter(y => y.id == id)
    
        const dialogRef = this.dialog.open(DocDialogComponent, {
          maxWidth: '100vw',
          maxHeight: '100vh',
          
          height: '100%',
          width: '100%',
          panelClass: 'full-screen-modal',
          data: {
            doc: test,
            isCreateMode : false
          },
        });
        dialogRef.afterClosed().subscribe((result: DocDialogResult) => {
          if (!result) {
            return;
          }
            this.docsService.getFirestoreInstance().collection('doc').doc(test.id).update(test)
        })}
      
  shareDoc(){
   
  }
  deleteDoc(test : Doc){
    this.docsService.getFirestoreInstance().collection('doc').doc(test.id).delete();
  }
  addDoc(): void{
   
      const dialogRef = this.dialog.open(DocDialogComponent, {
        maxWidth: '100vw',
        maxHeight: '100vh',
        height: '100%',
        width: '100%',
        panelClass: 'full-screen-modal',
        data: {
          doc: {},
          isCreateMode : true
        },
      });
      dialogRef.afterClosed().subscribe((result: DocDialogResult) => {
          if (!result) {return;}
             result.doc.creator = this.currentUser?.uid;
             result.doc.createdAm = new Date();
             this.store.collection('doc').add(result.doc);
         
      
    })}}
