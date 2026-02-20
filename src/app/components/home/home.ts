import { Component, signal, Inject } from '@angular/core';
import { RouterLink } from "@angular/router";
import { ThemeService } from '../../ThemeService';

@Component({
  selector: 'app-home',
  imports: [RouterLink],
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class Home {
  theme = Inject(ThemeService).theme;
  name = signal<string>('Mamatqulov Jasurbek');
  profession = signal<string>('Software Developer');
  intro = signal<string>('Welcome to my portfolio website!');
}
