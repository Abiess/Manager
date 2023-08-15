import { useAnimation } from '@angular/animations';
import { Component, OnInit } from '@angular/core';
import { User, UserInfo } from '@angular/fire/auth';
import { Subject } from 'rxjs';
import { AuthService } from 'src/app/shared/auth.service';
import { TaskService } from 'src/app/shared/task.service';
import { TranslationService } from 'src/app/shared/translation.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit{
  selectedoption: string = 'Todo';

  switchLanguage(language: string) {
    this.translate.switchLanguage(language);
  }
  isSearchExpanded: boolean = false;
  isLoggedIn: boolean = false;
  isProfilPhotoOpen : boolean = false;
  isMenuOpen : boolean = false;
  userInfo!: UserInfo | null;
  userInfoSubject: Subject<any> = new Subject<any>(); //

  constructor(private translate : TranslationService, private taskService : TaskService, 
    private authService: AuthService) {
     
  }

  ngOnInit(): void {
    this.authService.getLoggedInUser().then(userInfo => {
      this.isLoggedIn = !!userInfo;
      this.userInfo = userInfo;
      this.userInfoSubject.next(userInfo); // Emit the user info to the Subject
    });

    // Subscribe to changes in user info
    this.userInfoSubject.subscribe(updatedUserInfo => {
      this.userInfo = updatedUserInfo;
    });

    };
   
  
  search(searchTerm : string) {
    this.taskService.search(searchTerm);
    }

  signOut(){
    this.authService.logout();
  }
  toggleProfilPhoto() : void {
    this.isProfilPhotoOpen = !this.isProfilPhotoOpen;
  }
  toggleMenu() : void {
    this.isMenuOpen = !this.isMenuOpen;
   
  }
}
