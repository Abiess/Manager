import { Component } from '@angular/core';
import { NavbarService } from 'src/app/shared/navbar.service';

@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.css']
})
export class LandingPageComponent {
  constructor(private navbarService: NavbarService) {}

  ngOnInit(): void {
    this.navbarService.setShowNavbar(false);
  }

}
