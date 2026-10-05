import { Component } from '@angular/core';
import { site } from '../../data/site';

@Component({
  selector: 'app-estudios',
  template: `
    <section class="py-16 sm:py-24">
      <h1 class="reveal max-w-3xl text-5xl sm:text-7xl">Formación y experiencia.</h1>

      <h2 class="reveal mt-16 font-mono text-sm font-normal tracking-normal text-accent" style="--i: 1">Estudios</h2>
      <ol class="reveal mt-4 divide-y border-y" style="--i: 1">
        @for (item of site.education; track item.title) {
          <li class="grid gap-2 py-6 sm:grid-cols-[10rem_1fr]">
            <p class="font-mono text-sm text-muted">{{ item.period }}</p>
            <div>
              <h3 class="text-2xl">{{ item.title }}</h3>
              <p class="mt-1 text-muted">{{ item.center }}</p>
            </div>
          </li>
        }
      </ol>

      <h2 class="reveal mt-14 font-mono text-sm font-normal tracking-normal text-accent" style="--i: 2">Experiencia</h2>
      <ol class="reveal mt-4 divide-y border-y" style="--i: 2">
        @for (job of site.experience; track job.company) {
          <li class="grid gap-2 py-6 sm:grid-cols-[10rem_1fr]">
            <p class="font-mono text-sm text-muted">{{ job.period }}</p>
            <div>
              <h3 class="text-2xl">{{ job.company }}</h3>
              <p class="mt-1">{{ job.title }}</p>
              <p class="mt-1 text-muted">{{ job.text }}</p>
            </div>
          </li>
        }
      </ol>

      <h2 class="reveal mt-14 font-mono text-sm font-normal tracking-normal text-accent" style="--i: 3">Idiomas</h2>
      <ul class="reveal mt-4 divide-y border-y" style="--i: 3">
        @for (lang of site.languages; track lang.name) {
          <li class="grid gap-2 py-4 sm:grid-cols-[10rem_1fr]">
            <span>{{ lang.name }}</span>
            <span class="font-mono text-sm text-muted">{{ lang.level }}</span>
          </li>
        }
      </ul>

      <h2 class="reveal mt-14 font-mono text-sm font-normal tracking-normal text-accent" style="--i: 4">Certificaciones</h2>
      <p class="reveal mt-3 text-muted" style="--i: 4">Próximamente.</p>
    </section>
  `
})
export default class Estudios {
  site = site;
}