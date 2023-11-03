import { Component, ViewChild } from '@angular/core';
import { MatSidenav } from '@angular/material/sidenav';
import { UserInfo } from 'firebase/auth';
import { Subject } from 'rxjs';
import { AuthService } from 'src/app/shared/auth.service';
import { TaskService } from 'src/app/shared/task.service';
import { TranslationService } from 'src/app/shared/translation.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent {
  selectedoption: string = 'Todo';

  switchLanguage(language: string) {
    this.translate.switchLanguage(language);
  }
  /**
   *
   */
  constructor(private translate : TranslationService, private taskService : TaskService, 
    private authService: AuthService) {
   
    
  }
  isSearchExpanded: boolean = false;
  isLoggedIn: boolean = false;
  isProfilPhotoOpen : boolean = false;
  isMenuOpen : boolean = false;
  userInfo!: UserInfo | null;
  userInfoSubject: Subject<any> = new Subject<any>(); //

    @ViewChild('sidenav') sidenav!: MatSidenav;
  
    toggleSidebar() {
      this.sidenav.toggle();
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
  

