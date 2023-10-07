import { Component } from '@angular/core';
import { Doc } from 'src/app/model/doc';
import { AuthService } from 'src/app/shared/auth.service';
import { DocsService } from 'src/app/shared/docs.service';
import { TaskService } from 'src/app/shared/task.service';


@Component({
  selector: 'app-docs',
  templateUrl: './docs.component.html',
  styleUrls: ['./docs.component.css']
})


export class DocsComponent {
  data: Doc[] = [];
 
  constructor(private docsService : DocsService, private authService : AuthService) {}

  ngOnInit() {
    this.docsService.doc?.subscribe(docs => {
        this.data = docs;
        
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

