import { Component } from '@angular/core';
import { site } from '../../data/site';

@Component({
  selector: 'app-estudios',
  template: `
    <section class="mx-auto max-w-5xl py-16">
      <p class="font-mono text-sm text-accent">02 / Estudios</p>
      <h1 class="mt-4 text-4xl font-semibold sm:text-6xl">Formación.</h1>

      <ol class="mt-12 border-l border-line">
        @for (item of site.education; track item.title) {
          <li class="relative pb-12 pl-8 last:pb-0">
            <span class="absolute -left-[5px] top-2 h-2.5 w-2.5 bg-accent"></span>
            <p class="font-mono text-sm text-accent">{{ item.period }}</p>
            <h2 class="mt-2 text-2xl font-semibold">{{ item.title }}</h2>
            <p class="mt-1 text-muted">{{ item.center }}</p>
          </li>
        }
      </ol>

      <h2 class="mt-16 font-mono text-sm text-accent">Experiencia</h2>
      <ol class="mt-6 border-l border-line">
        @for (job of site.experience; track job.company) {
          <li class="relative pb-12 pl-8 last:pb-0">
            <span class="absolute -left-[5px] top-2 h-2.5 w-2.5 bg-accent"></span>
            <p class="font-mono text-sm text-accent">{{ job.period }}</p>
            <h3 class="mt-2 text-2xl font-semibold">{{ job.company }}</h3>
            <p class="mt-1">{{ job.title }}</p>
            <p class="mt-1 text-muted">{{ job.text }}</p>
          </li>
        }
      </ol>

      <h2 class="mt-16 font-mono text-sm text-accent">Idiomas</h2>
      <ul class="mt-4 flex flex-wrap gap-3">
        @for (lang of site.languages; track lang.name) {
          <li class="border border-line px-3 py-1 font-mono text-sm">
            {{ lang.name }} <span class="ml-2 text-muted">· {{ lang.level }}</span>
          </li>
        }
      </ul>

      <h2 class="mt-16 font-mono text-sm text-accent">Certificaciones</h2>
      <p class="mt-3 text-muted">Próximamente.</p>
    </section>
  `
})
export default class Estudios {
  site = site;
}