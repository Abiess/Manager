import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { UserInfo } from 'firebase/auth';
import { AuthService } from '../shared/auth.service';
import { Task } from './task';

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.css']
})
export class TaskComponent implements OnInit {
  @Input() task: Task | null = null;
  @Output() edit = new EventEmitter<Task>();
  isLoggedIn: boolean = false;
  isProfilPhotoOpen : boolean = false;
  isMenuOpen : boolean = false;
  userInfo!: UserInfo | null;

  
  constructor(private authService: AuthService) {
    
    
  }
ngOnInit(): void {
  this.authService.getLoggedInUser().then(userInfo => {
    this.isLoggedIn = !!userInfo;
    this.userInfo = userInfo;
 
  });

  // Subscribe to changes in user info

  };



toggleProfilPhoto() : void {
  this.isProfilPhotoOpen = !this.isProfilPhotoOpen;
}
toggleMenu() : void {
  this.isMenuOpen = !this.isMenuOpen;
 
}}