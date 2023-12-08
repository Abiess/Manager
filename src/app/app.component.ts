import { Component, OnInit } from '@angular/core';
import { AuthGuardService } from './shared/auth-guard.service';
import { AuthService } from './shared/auth.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  title: any = 'Manager';
  showNavBar: boolean = false;
  constructor(private authGuard: AuthGuardService) {}
  ngOnInit(): void {
    // this.authService.getLoggedInUser().then(user =>
    //   this.showNavBar = !!user )
    // console.log("app component ts navbar "+ this.showNavBar);
    this.showNavBar = this.authGuard.userDetails != null 

  }
}