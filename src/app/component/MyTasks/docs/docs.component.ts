import { Component } from '@angular/core';
import { Doc } from 'src/app/model/doc';
import { AuthService } from 'src/app/shared/auth.service';
import { DocsService } from 'src/app/shared/docs.service';
import { MatBottomSheet } from '@angular/material/bottom-sheet';
import { Router } from '@angular/router';
import { DocDialogComponent } from '../doc-dialog/doc-dialog.component';
import { GroupDialogResult } from '../../group-dialog/group-dialog.component';
import { MatDialog } from '@angular/material/dialog';
import { doc } from 'firebase/firestore';
import { zip } from 'rxjs';

@Component({
  selector: 'app-docs',
  templateUrl: './docs.component.html',
  styleUrls: ['./docs.component.css']
})


export class DocsComponent {

  data: Doc[] = [];
  filteredData: Doc[] = [];
  searchText: string = '';
 
  constructor(private docsService : DocsService, private router: Router,private dialog : MatDialog,
     private authService : AuthService) {}

  ngOnInit() {
    this.docsService.doc?.subscribe(docs => {
        this.data = docs;
        this.filteredData = this.data;
        
      });
    
    }

  docs: string | undefined;
  uploadedFileUrl: string | undefined;
  
    formData: Doc = {
      name: '',
      description: '',
      creator: undefined,
      createdAm: new Date(),
      docsArt: '',
      paid : false,
      attachement : ''
    };
      // Add a method to handle form submission
      onSubmit() {
        // Your validation logic and data submission code will go here
        if (this.isValid()) {
          this.formData.attachement = this.uploadedFileUrl!;
      
          this.authService.getLoggedInUser().then(userInfo => {
            if (userInfo?.uid) {
              this.formData.creator = userInfo.uid;
              // Use the AngularFirestore instance from docsService to add the document
              this.docsService.getFirestoreInstance().collection('doc').add(this.formData)
                .then(() => {
                  console.log('Document added successfully.');
                  // Optionally, reset the form or perform other actions after successful submission
                })
                .catch(error => {
                  console.error('Error adding document:', error);
                });
            }
          }).catch(error => {
            console.log('Error retrieving logged-in user:', error);
          });
        }
      }
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

  // Add a method to validate the form data
  isValid(): boolean {
    // Implement your validation logic here
    // Return true if the data is valid; otherwise, return false
    if (!this.formData.name || !this.formData.description) {
      return false;
    }
    return true;
  }
  editDoc(){
     // this.formData = this.data.filter(y => y.id == id)
    
        const dialogRef = this.dialog.open(DocDialogComponent, {
          maxWidth: '100vw',
          maxHeight: '100vh',
          height: '100%',
          width: '100%',
          panelClass: 'full-screen-modal',
          data: {
            doc: {},
          },
        });
        dialogRef.afterClosed().subscribe((result: GroupDialogResult) => {
            if (!result) {return;}
            
               this.onSubmit()
            })
            
          };
      
  
  downloadDoc(){
    
  }
  shareDoc(){
    
  }
  addDoc() {
    console.log("hier bin ich ")
    this.router.navigate(['/addDoc']); 
}

}