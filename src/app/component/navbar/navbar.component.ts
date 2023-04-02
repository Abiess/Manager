import { Component } from '@angular/core';
import { TaskService } from 'src/app/shared/task.service';
import { TranslationService } from 'src/app/shared/translation.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {
selectedoption: any;

  switchLanguage(language: string) {
    this.translate.switchLanguage(language);
  }
  isSearchExpanded: boolean = false;
 
  constructor(private translate : TranslationService, private taskService : TaskService) {
  
  }
  search(searchTerm : string) {
    this.taskService.search(searchTerm);
    }
}
