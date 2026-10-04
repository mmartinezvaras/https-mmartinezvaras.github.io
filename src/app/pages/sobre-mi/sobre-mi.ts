import { Component } from '@angular/core';
import { site } from '../../data/site';

@Component({
  selector: 'app-sobre-mi',
  template: `
    <section class="mx-auto max-w-5xl py-16">
      <p class="font-mono text-sm text-accent">01 / Sobre mí</p>
      <h1 class="mt-4 text-4xl font-semibold sm:text-6xl">Datos, IA y sistemas que duran.</h1>

      <div class="mt-12 grid gap-12 md:grid-cols-[2fr_3fr]">
        <div>
          <p class="text-lg text-muted">{{ site.intro }}</p>
          <p class="mt-6 border-l-2 border-accent pl-4">{{ site.seeking }}</p>
        </div>

        <ul class="divide-y divide-line border-y border-line">
          @for (item of site.interests; track item.title) {
            <li class="grid gap-2 py-6 sm:grid-cols-[8rem_1fr]">
              <h2 class="font-mono text-sm text-accent">{{ item.title }}</h2>
              <p class="text-muted">{{ item.text }}</p>
            </li>
          }
        </ul>
      </div>
    </section>
  `
})
export default class SobreMi {
  site = site;
}