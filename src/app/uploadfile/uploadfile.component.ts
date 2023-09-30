import { Component } from '@angular/core';
import { AngularFireStorage } from '@angular/fire/compat/storage';

@Component({
  selector: 'app-uploadfile',
  templateUrl: './uploadfile.component.html',
  styleUrls: ['./uploadfile.component.css']
})
export class UploadfileComponent {
  progress: number = 0;

 
  constructor(private storage : AngularFireStorage) {

    
  }
  onFileSelected(event: any) {
    const file = event.target.files[0];
    if (file) {
      this.uploadImage(file);
    }
  }
  uploadImage(file: File) {
    const filePath = `imageprofil/${file.name}`;
    const storageRef = this.storage.ref(filePath);
    const uploadTask = storageRef.put(file);
  
    uploadTask.snapshotChanges().subscribe(
      (snapshot) => {
        // Image upload progress
        this.progress = (snapshot!.bytesTransferred / snapshot!.totalBytes) * 100;
        console.log(`Upload is ${this.progress}% done`);
      },
      (error) => {
        console.error('Image upload failed:', error);
      },
      () => {
        // Image upload is complete
        storageRef.getDownloadURL().subscribe((downloadURL) => {
          console.log('Image upload successful. Download URL:', downloadURL);
  
          // You can now save the downloadURL to your database or use it in your app as needed.
        });
      }
    );
  }
    

}
