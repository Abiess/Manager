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
      title: 'Card 1',
      subtext: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
      link: 'https://www.google.com'
    },
    {
      imageUrl: 'https://via.placeholder.com/300',
      title: 'Card 2',
      subtext: 'Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
      link: 'https://www.google.com'
    },
    {
      imageUrl: 'https://via.placeholder.com/300',
      title: 'Card 3',
      subtext: 'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
      link: 'https://www.google.com'
    },
    {
      imageUrl: 'https://via.placeholder.com/300',
      title: 'Card 4',
      subtext: 'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.',
      link: 'https://www.google.com'
    },
    {
      imageUrl: 'https://via.placeholder.com/300',
      title: 'Card 5',
      subtext: 'Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
      link: 'https://www.google.com'
    },
    {
      imageUrl: 'https://via.placeholder.com/300',
      title: 'Card 6',
      subtext: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
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
