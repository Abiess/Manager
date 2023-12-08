import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/shared/auth.service';

@Component({
  selector: 'app-profil',
  templateUrl: './profil.component.html',
  styleUrls: ['./profil.component.css']
}) 
export class ProfilComponent implements OnInit{
  currentUser!: firebase.default.User | null;
  constructor(private authService : AuthService) {
  }
  ngOnInit(): void {
    this.authService.getCurrentUser().subscribe(user => {
      this.currentUser = user;
    })
  }

}
