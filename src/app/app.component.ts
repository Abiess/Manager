import { Component } from '@angular/core';
import { NavbarService } from './shared/navbar.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title: any = 'Manager';
  constructor(private navbarService: NavbarService) {}

  get showNavbar(): boolean {
    return this.navbarService.getShowNavbar();
  }
}