import { Injectable, signal } from '@angular/core';

// Modo claro/oscuro. index.html ya aplica la clase antes de pintar; aquí solo se lee y se cambia.
@Injectable({ providedIn: 'root' })
export class Theme {
  readonly dark = signal(document.documentElement.classList.contains('app-dark'));

  constructor() {
    this.syncStatusBar(this.dark());
  }

  toggle() {
    const dark = !this.dark();
    this.dark.set(dark);
    document.documentElement.classList.toggle('app-dark', dark);
    this.syncStatusBar(dark);
    try {
      localStorage.setItem('theme', dark ? 'dark' : 'light');
    } catch {}
  }

  // La barra de estado del móvil sigue al tema elegido, no al del sistema
  private syncStatusBar(dark: boolean) {
    document
      .querySelectorAll('meta[name="theme-color"]')
      .forEach((m) => m.setAttribute('content', dark ? '#000000' : '#ffffff'));
  }
}
