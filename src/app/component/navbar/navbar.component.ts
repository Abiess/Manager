import { Component, OnInit } from '@angular/core';
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
  currentUser: firebase.default.User | null | undefined;
  userInfoSubject: Subject<any> = new Subject<any>(); 

  constructor(private translate : TranslationService, 
    private taskService : TaskService, 
    private authService: AuthService) {
  }
  ngOnInit(): void {
    this.authService.getCurrentUser().subscribe(user => {
      this.currentUser = user;
      this.isLoggedIn = !!user;
      this.userInfoSubject.next(user); 
    });
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
