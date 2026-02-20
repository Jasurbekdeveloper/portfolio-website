import { Component, Inject, signal } from '@angular/core';
import { RouterOutlet, RouterModule } from '@angular/router';
import { ThemeService } from './ThemeService';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, RouterModule],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  theme  = Inject(ThemeService);
  protected readonly title = signal('portfolio-website');
  currentYear: number = new Date().getFullYear();
}