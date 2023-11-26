import { Component, Inject } from '@angular/core';
import { UserInfo } from '@angular/fire/auth';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
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
  docs: string | undefined;
  uploadedFileUrl: string | undefined;

  constructor(private docsService : DocsService, 
    private catService : CategoryService,
     private authService : AuthService,
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
    const dialogRefCategorie = this.dialog.open(AddCategoryDialogComponentComponent, {
      width: '400px',
    });

    dialogRefCategorie.afterClosed().subscribe((result) => {
      if (result) {
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


  handleFileUpload(fileUrl: string) {
    if (!this.mydata.doc.attachements) {
      this.mydata.doc.attachements = []; // Initialize as an empty array if undefined
    }
    this.mydata.doc.attachements?.push({name: fileUrl, creator: this.userInfo?.uid!})
   

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
