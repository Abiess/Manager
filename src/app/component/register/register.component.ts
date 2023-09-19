import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/shared/auth.service';
import { AngularFireStorage } from '@angular/fire/compat/storage';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  email : string = '';
  password : string = '';
  displayName : string = '';
  progress = 0;

  constructor(private auth : AuthService, private storage : AngularFireStorage) { }

  ngOnInit(): void {
  }

  register() {

    if(this.email == '') {
      alert('Please enter email');
      return;
    }

    if(this.password == '') {
      alert('Please enter password');
      return;
    }
    if(this.displayName == '') {
      alert('Please enter displayName');
      return;
    }

    this.auth.register(this.email,this.password, this.displayName);
    
    this.email = '';
    this.password = '';

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