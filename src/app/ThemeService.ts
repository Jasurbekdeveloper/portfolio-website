import { Injectable } from '@angular/core';
import {isPlatformBrowser} from "@angular/common";
import {effect, inject, signal, PLATFORM_ID} from "@angular/core";

@Injectable({
  providedIn: 'root'
})
export class ThemeService {

  private platformId = inject(PLATFORM_ID);
  theme = signal<'light' | 'dark'>('light');

  constructor() {
    if (isPlatformBrowser(this.platformId)) {

      const saved = localStorage.getItem('theme') as 'light' | 'dark';
      if (saved) {
        this.theme.set(saved);
      } else {
        const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
        this.theme.set(prefersDark ? 'dark' : 'light');
      }

      effect(() => {
        const current = this.theme();

        document.documentElement.classList.toggle(
          'dark',
          current === 'dark'
        );

        localStorage.setItem('theme', current);
      });
    }
  }

  toggleTheme() {
    this.theme.update(t => t === 'light' ? 'dark' : 'light');
  }

}
