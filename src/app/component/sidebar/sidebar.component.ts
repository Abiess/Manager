import { Component, ViewChild } from '@angular/core';
import { MatSidenav } from '@angular/material/sidenav';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent {

    @ViewChild('sidenav') sidenav!: MatSidenav;
  
    toggleSidebar() {
      this.sidenav.toggle();
    }
  }

