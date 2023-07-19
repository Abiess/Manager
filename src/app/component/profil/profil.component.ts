import { Component } from '@angular/core';
import { user } from '@angular/fire/auth';
import { User, UserInfo } from 'firebase/auth';
import { AuthService } from 'src/app/shared/auth.service';

@Component({
  selector: 'app-profil',
  templateUrl: './profil.component.html',
  styleUrls: ['./profil.component.css']
}) 
export class ProfilComponent {
  
  loggedInUser!: UserInfo | null ;

  constructor(authService : AuthService) {

    authService.getLoggedInUser().then(userInfo=>{
      this.loggedInUser = userInfo;
    });
  
  }

}
