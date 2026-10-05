import { Component } from '@angular/core';
import { site } from '../../data/site';

type Group = (typeof site.skills)[number];

@Component({
  selector: 'app-skills',
  template: `
    <section class="py-16 sm:py-24">
      <h1 class="reveal max-w-3xl text-5xl sm:text-7xl">Lo que uso.</h1>

      <div class="reveal mt-14 divide-y border-y" style="--i: 1">
        @for (group of site.skills; track group.category) {
          <div class="grid gap-3 py-8 sm:grid-cols-[13rem_1fr]">
            <h2 class="font-mono text-sm font-normal tracking-normal text-accent">{{ group.category }}</h2>
            <ul class="flex flex-wrap gap-x-6 gap-y-2 font-mono text-base">
              @for (name of list(group); track name) {
                <li>{{ name }}</li>
              }
            </ul>
          </div>
        }
      </div>
    </section>
  `
})
export default class Skills {
  site = site;

  list(group: Group): string[] {
    return group.items.map((i) => (i.learning ? i.name + ' (aprendiendo)' : i.name));
  }
}