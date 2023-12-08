import { Component, ViewChild } from '@angular/core';
import { MatSidenav } from '@angular/material/sidenav';
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
  currentUser!: firebase.default.User | null;

  switchLanguage(language: string) {
    this.translate.switchLanguage(language);
  }

  constructor(private translate : TranslationService, 
    private taskService : TaskService, 
    private authService : AuthService) {
  }
  isSearchExpanded: boolean = false;
  isLoggedIn: boolean = false;
  isProfilPhotoOpen : boolean = false;
  isMenuOpen : boolean = false;

  @ViewChild('sidenav') sidenav!: MatSidenav;
  
    toggleSidebar() {
      this.sidenav.toggle();
    }
    ngOnInit() {
      this.authService.getCurrentUser().subscribe(user => {
        this.currentUser = user;
      })
    }
    
    search(searchTerm : string) {
      this.taskService.search(searchTerm);
      }
  
    signOut(){
      this.authService.signOut();
    }
    toggleProfilPhoto() : void {
      this.isProfilPhotoOpen = !this.isProfilPhotoOpen;
    }
    toggleMenu() : void {
      this.isMenuOpen = !this.isMenuOpen;
     
    }
  }
  

