import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {

  
  cards: Card[] = [
    {
      imageUrl: 'https://via.placeholder.com/300',
      title: 'Projects',
      subtext: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
      link: 'https://www.google.com'
    },
    {
      imageUrl: 'https://via.placeholder.com/300',
      title: 'Groups',
      subtext: 'Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
      link: 'https://www.google.com'
    },
    {
      imageUrl: 'https://via.placeholder.com/300',
      title: 'Tasks',
      subtext: 'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
      link: 'https://www.google.com'
    },
    
  ];

}

interface Card {
  imageUrl: string;
  title: string;
  subtext: string;
  link: string;
}
