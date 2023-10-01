import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/shared/auth.service';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  email : string = '';
  password : string = '';
  displayName : string = '';
  lastName : string = '';
  company : string = '';
  phone : string = '';
  progress = 0;

  imageprofil = "imageprofil";

  constructor(private auth : AuthService) { }

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

    this.auth.register(this.email,this.password, this.displayName, this.lastName, this.company, this.phone);
    
    this.email = '';
    this.password = '';
    this.lastName = '';
    this.company = '';
    this.phone = '';

  }
}