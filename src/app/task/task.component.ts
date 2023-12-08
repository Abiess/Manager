import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
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
  isProfilPhotoOpen : boolean = false;
  isMenuOpen : boolean = false;
  currentUser!: firebase.default.User | null;

  
  constructor(private authService: AuthService) {
  }
ngOnInit(): void {
  this.authService.getCurrentUser().subscribe(user => {
    if (user) {
      this.currentUser = user;
    }
  });
  };
  
toggleProfilPhoto() : void {
  this.isProfilPhotoOpen = !this.isProfilPhotoOpen;
}
toggleMenu() : void {
  this.isMenuOpen = !this.isMenuOpen;
 
}}