import { Component, signal } from '@angular/core';
import projectsData from './projects.json';

@Component({
  selector: 'app-portfolio',
  standalone: true,
  templateUrl: './portfolio.html'
})
export class Portfolio {
  projects = signal(projectsData);
}
