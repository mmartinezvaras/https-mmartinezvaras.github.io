import { Routes } from '@angular/router';

export const routes: Routes = [
  { path: '', redirectTo: 'inicio', pathMatch: 'full' },
  { path: 'inicio', loadComponent: () => import('./pages/inicio/inicio') },
  { path: 'sobre-mi', loadComponent: () => import('./pages/sobre-mi/sobre-mi') },
  { path: 'estudios', loadComponent: () => import('./pages/estudios/estudios') },
  { path: 'skills', loadComponent: () => import('./pages/skills/skills') },
  { path: 'proyectos', loadComponent: () => import('./pages/proyectos/proyectos') },
  { path: 'lab', loadComponent: () => import('./pages/lab/lab') },
  { path: 'contacto', loadComponent: () => import('./pages/contacto/contacto') },
  { path: '**', redirectTo: 'inicio' }
];