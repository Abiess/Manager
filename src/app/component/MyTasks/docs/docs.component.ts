import { Component } from '@angular/core';
import { Doc } from 'src/app/model/doc';
import { AuthService } from 'src/app/shared/auth.service';
import { DocsService } from 'src/app/shared/docs.service';
import { DocDialogComponent, DocDialogResult } from '../doc-dialog/doc-dialog.component';
import { MatDialog } from '@angular/material/dialog';


@Component({
  selector: 'app-docs',
  templateUrl: './docs.component.html',
  styleUrls: ['./docs.component.css']
})


export class DocsComponent {

  data: Doc[] = [];
  filteredData: Doc[] = [];
  searchText: string = '';
 
  constructor(private docsService : DocsService ,private dialog : MatDialog,
     private authService : AuthService) {}

  ngOnInit() {
    this.docsService.doc?.subscribe(docs => {
        this.data = docs;
        this.filteredData = this.data;
        
      });
    
    }

      docs: string | undefined;
      uploadedFileUrl: string | undefined;
  
   
      openLink(url: string): void {
        window.open(url, '_blank');
      }
      

      filterData() {
        this.filteredData = this.data.filter(item =>
          item.name.toLowerCase().includes(this.searchText.toLowerCase())
        );
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
         
          this.authService.getLoggedInUser().then(userInfo => {
             result.doc.creator = userInfo?.uid;
             result.doc.createdAm = new Date();
             this.docsService.getFirestoreInstance().collection('doc').add(result.doc);
          })
          .catch(error => {
            console.log('Error retrieving logged-in user:', error);
          });
        });
    }}
