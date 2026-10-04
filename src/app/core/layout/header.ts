import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-header',
  imports: [RouterLink, RouterLinkActive],
  template: `
    <header class="flex items-center justify-between px-6 py-4 border-b">
      <nav class="flex flex-wrap gap-4" aria-label="Principal">
        @for (link of links; track link.path) {
          <a
            [routerLink]="link.path"
            routerLinkActive="font-bold underline"
            class="hover:underline"
          >{{ link.label }}</a>
        }
      </nav>
      <button type="button" class="border px-3 py-1" (click)="toggleDark()">Modo</button>
    </header>
  `
})
export class Header {
  links = [
    { path: '/inicio', label: 'Inicio' },
    { path: '/sobre-mi', label: 'Sobre mí' },
    { path: '/estudios', label: 'Estudios' },
    { path: '/skills', label: 'Skills' },
    { path: '/proyectos', label: 'Proyectos' },
    { path: '/lab', label: 'Lab' },
    { path: '/contacto', label: 'Contacto' }
  ];

  toggleDark() {
    document.documentElement.classList.toggle('app-dark');
  }
}