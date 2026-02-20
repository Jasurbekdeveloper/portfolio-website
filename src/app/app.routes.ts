import { Routes } from '@angular/router';

export const routes: Routes = [
    { path: '', redirectTo: 'home', pathMatch: 'full' },
    { path: 'about', loadComponent: () => import('./components/about/about').then(m => m.About) },
    { path: 'portfolio', loadComponent: () => import('./components/portfolio/portfolio').then(m => m.Portfolio) },
    { path: 'home', loadComponent: () => import('./components/home/home').then(m => m.Home) },
    { path: 'contact', loadComponent: () => import('./components/contact/contact').then(m => m.Contact) },
];
