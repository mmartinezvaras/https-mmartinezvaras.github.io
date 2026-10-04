import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { site } from '../../data/site';

@Component({
  selector: 'app-inicio',
  imports: [RouterLink],
  template: `
    <section class="mx-auto flex min-h-[70vh] max-w-5xl flex-col justify-center py-16">
      <p class="font-mono text-sm text-accent">{{ site.role }}</p>
      <h1 class="mt-6 max-w-4xl text-5xl font-semibold sm:text-7xl md:text-8xl">
        {{ site.tagline }}
      </h1>
      <p class="mt-8 max-w-2xl text-lg text-muted">{{ site.intro }}</p>
      <p class="mt-4 font-mono text-sm">{{ site.seeking }}</p>

      <div class="mt-12 flex flex-wrap gap-4">
        <a routerLink="/proyectos"
           class="border border-fg bg-fg px-5 py-3 font-mono text-sm text-bg transition-opacity duration-200 hover:opacity-80">
          Ver proyectos
        </a>
        <a routerLink="/contacto"
           class="border border-line px-5 py-3 font-mono text-sm transition-colors duration-200 hover:border-accent hover:text-accent">
          Contacto
        </a>
      </div>
    </section>
  `
})
export default class Inicio {
  site = site;
}