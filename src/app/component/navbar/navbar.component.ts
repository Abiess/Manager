import { useAnimation } from '@angular/animations';
import { Component } from '@angular/core';
import { AuthService } from 'src/app/shared/auth.service';
import { TaskService } from 'src/app/shared/task.service';
import { TranslationService } from 'src/app/shared/translation.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {
  selectedoption: string = 'Todo';

  switchLanguage(language: string) {
    this.translate.switchLanguage(language);
  }
  isSearchExpanded: boolean = false;
  isLoggedIn: boolean = false;
 
  constructor(private translate : TranslationService, private taskService : TaskService, 
    private authService: AuthService) {
      this.authService.getLoggedInUser().then(userInfo=>{
        this.isLoggedIn = !!userInfo
      })
      
  }
  search(searchTerm : string) {
    this.taskService.search(searchTerm);
    }

  signOut(){
    this.authService.logout();
  }
}
