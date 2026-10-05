import { Component } from '@angular/core';
import { notes } from '../../data/notes';

@Component({
  selector: 'app-lab',
  template: `
    <section class="max-w-3xl py-16 sm:py-24">
      <h1 class="reveal text-5xl sm:text-7xl">Notas y experimentos.</h1>

      <div class="reveal mt-12 divide-y border-y" style="--i: 1">
        @for (n of notes; track n.slug) {
          <article class="py-10">
            <p class="font-mono text-sm text-muted">{{ n.date }}</p>
            <h2 class="mt-2 text-3xl">{{ n.title }}</h2>
            <ul class="mt-3 flex flex-wrap gap-x-4 gap-y-1 font-mono text-xs text-accent">
              @for (t of n.tags; track t) {
                <li>{{ t }}</li>
              }
            </ul>
            @for (p of n.body; track $index) {
              <p class="mt-5 text-muted">{{ p }}</p>
            }
          </article>
        }
      </div>
    </section>
  `
})
export default class Lab {
  notes = notes;
}