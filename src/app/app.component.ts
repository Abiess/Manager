import { Component, OnInit } from '@angular/core';
import { AuthService } from './shared/auth.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  title: any = 'Manager';
  showNavBar: boolean = false;
  constructor(private authService: AuthService) {}
  ngOnInit(): void {
    this.authService.getLoggedInUser().then(user =>
      this.showNavBar = !!user )
    console.log("app component ts navbar "+ this.showNavBar);
  }
}