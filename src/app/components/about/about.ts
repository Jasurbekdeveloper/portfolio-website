import { Component, Inject } from '@angular/core';
import { ThemeService } from '../../ThemeService';

@Component({
  selector: 'app-about',
  imports: [],
  templateUrl: './about.html',
  styleUrl: './about.css',
})
export class About {
  theme = Inject(ThemeService);
  bio: string = 'Your bio goes here.';
  skills: string[] = ['Skill 1', 'Skill 2', 'Skill 3'];
  experience: string[] = ['Experience 1', 'Experience 2', 'Experience 3'];
  
  toggle() {
    this.theme.toggleTheme();
  }
}
