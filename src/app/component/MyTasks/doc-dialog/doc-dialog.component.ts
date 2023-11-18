import { Component } from '@angular/core';
import { UserInfo } from '@angular/fire/auth';
import { MatDialog } from '@angular/material/dialog';
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
export class DocDialogComponent {
  data: Doc[] = []
  message : string = ''
  categories : DocCategory[] = []
  userInfo : UserInfo | undefined;

  constructor(private docsService : DocsService, 
    private catService : CategoryService,
     private authService : AuthService,
     private dialog : MatDialog) {}

  ngOnInit() {
    this.docsService.doc?.subscribe(docs => {
        this.data = docs;
        
      });
     
      this.catService.getCategories()?.subscribe(sd => {
        
        this.categories = sd;
      });
      this.authService.getLoggedInUser().then(uInfo => {
        if (uInfo?.uid) {
          this.userInfo = uInfo;
        }
      });
    
    
     
  }
  openAddCategoryDialog(): void {
    const dialogRef = this.dialog.open(AddCategoryDialogComponentComponent, {
      width: '400px',
    });

    dialogRef.afterClosed().subscribe((result) => {
      if (result) {
        console.log("result is " + this.userInfo?.uid)
        const newCategory: DocCategory = {
          name: result,
          createdAm: new Date(),
          creator: this.userInfo?.uid
         
        };
       
        this.catService.addCategory(newCategory).then(() => {
          this.catService.getCategories().subscribe((ca) => {
            this.categories = ca;
           
          });
      });
      }
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
      attachement : '',
      id:''
    };
      // Add a method to handle form submission
      onSubmit() {
        console.log("onsubmit ")
        // Your validation logic and data submission code will go here
        if (this.isValid()) {
          this.formData.attachement = this.uploadedFileUrl!;
      
              this.formData.creator = this.userInfo?.uid;
              // Use the AngularFirestore instance from docsService to add the document
              this.docsService.getFirestoreInstance().collection('doc').add(this.formData)
                .then(() => {
                  this.message = 'Document added successfully.';
                  // Optionally, reset the form or perform other actions after successful submission
                })
                .catch(error => {
                  this.message = 'Error adding document: ' + error;
                });
            
          
        }
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
 
    
  }
  export interface DocDialogResult {
    doc: Doc;
    delete?: boolean;

}
