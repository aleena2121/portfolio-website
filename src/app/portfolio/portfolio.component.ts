import { Component } from '@angular/core';
import { CommonModule } from '@angular/common'; 
import { Router } from '@angular/router';


@Component({
  selector: 'app-portfolio',
  imports: [CommonModule],
  templateUrl: './portfolio.component.html',
  styleUrl: './portfolio.component.css'
})
export class PortfolioComponent {
  projects = [
    {
      name: 'E-Learning Website',
      description: 'A multi-page educational platform built with HTML, CSS, and JavaScript.',
      image: 'assets/images/elearning.png',
      link: 'https://aleena2121.github.io/Education-Website/'
    },
    {
      name: 'Microplastic Detection',
      description: 'An AI-driven system using MobileNetV2 for detecting microplastics in water.',
      image: 'assets/images/plastic.png',
      link: 'https://github.com/aleena2121/microplastic-detection-using-mobileNetV2'
    },
    {
      name: 'Travel Journal',
      description: 'A digital travel journal to capture and cherish your vacation memories with photos, places visited, and notes all in one place.',
      image: 'assets/images/travel-journal.png',
      link: 'https://github.com/aleena2121/Travel-Journal/'
    },
    {
      name: 'Simon Game',
      description: 'A JavaScript-based classic memory game with interactive UI.',
      image: 'assets/images/simon.png',
      link: 'https://aleena2121.github.io/Simon-Game/'
    },
    {
      name: 'More on my Github profile',
      description: '',
      image: 'assets/images/github.png',
      link: 'https://github.com/aleena2121'
    }
  ];
  constructor(private router: Router) {}

  goToContact() {
    this.router.navigate(['/contact']);
  }
}
