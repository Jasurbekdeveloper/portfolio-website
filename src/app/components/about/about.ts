import { Component, Inject, signal, Signal } from '@angular/core';
import { ThemeService } from '../../ThemeService';

@Component({
  selector: 'app-about',
  imports: [],
  templateUrl: './about.html',
  styleUrl: './about.css',
})
export class About {
  theme = Inject(ThemeService);
  bio: string = 'I am a competent and talented developer who has studied.NET. With a team, I\'ve started from scratch on projects. I\'m a detail oriented team player. As a web developer, I wish to find a challenging andsatisfying job with a reputable company that can make use of my abilities.';
  skills: string[] = ['C#', '.NET', 'Fremework ASP.NET Core', 'EF Core.Dapper', 'ADO.Net', 'Angular', 'SQL Server'];
  experience: string[] = ['“Raqamli transformatsiya markazi” LLC', '"TEXNO-SOFT" LLC'];
  education: Signal<string[]> = signal(['International Islamic University of Uzbekistan (IIAU)']);
  toggle() {
    this.theme.toggleTheme();
  }
}
