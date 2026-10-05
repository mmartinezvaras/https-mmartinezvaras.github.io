import { Component, signal } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { site } from '../../data/site';

@Component({
  selector: 'app-header',
  imports: [RouterLink, RouterLinkActive],
  template: `
    <header class="mx-auto flex w-full max-w-5xl flex-wrap items-center justify-between gap-x-6 gap-y-3 px-6 py-5">
      <a routerLink="/inicio" class="font-display text-lg font-semibold tracking-tight">{{ site.name }}</a>
      <div class="flex flex-wrap items-center gap-x-6 gap-y-3">
        <nav aria-label="Principal" class="flex flex-wrap gap-x-5 gap-y-1 text-sm">
          @for (link of links; track link.path) {
            <a class="navlink" [routerLink]="link.path" routerLinkActive="active" ariaCurrentWhenActive="page">{{ link.label }}</a>
          }
        </nav>
        <button type="button" class="btn btn-ghost btn-sm" (click)="toggle()">
          {{ dark() ? 'Modo claro' : 'Modo oscuro' }}
        </button>
      </div>
    </header>
  `
})
export class Header {
  site = site;
  links = [
    { path: '/inicio', label: 'Inicio' },
    { path: '/sobre-mi', label: 'Sobre mí' },
    { path: '/estudios', label: 'Estudios' },
    { path: '/skills', label: 'Skills' },
    { path: '/proyectos', label: 'Proyectos' },
    { path: '/lab', label: 'Lab' },
    { path: '/contacto', label: 'Contacto' }
  ];
  dark = signal(false);

  constructor() {
    let saved: string | null = null;
    try {
      saved = localStorage.getItem('theme');
    } catch {}
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    this.apply(saved ? saved === 'dark' : prefersDark);
  }

  toggle() {
    this.apply(!this.dark());
    try {
      localStorage.setItem('theme', this.dark() ? 'dark' : 'light');
    } catch {}
  }

  private apply(dark: boolean) {
    this.dark.set(dark);
    document.documentElement.classList.toggle('app-dark', dark);
  }
}