import { Component } from '@angular/core';
import { site } from '../../data/site';

@Component({
  selector: 'app-skills',
  template: `
    <section class="mx-auto max-w-5xl py-16">
      <p class="font-mono text-sm text-accent">03 / Skills</p>
      <h1 class="mt-4 text-4xl font-semibold sm:text-6xl">Lo que uso.</h1>

      <div class="mt-12 divide-y divide-line border-y border-line">
        @for (group of site.skills; track group.category) {
          <div class="grid gap-4 py-8 sm:grid-cols-[12rem_1fr]">
            <h2 class="font-mono text-sm text-accent">{{ group.category }}</h2>
            <ul class="flex flex-wrap gap-3">
              @for (skill of group.items; track skill.name) {
                <li class="border border-line px-3 py-1 font-mono text-sm">
                  {{ skill.name }}
                  @if (skill.learning) {
                    <span class="ml-2 text-muted">· aprendiendo</span>
                  }
                </li>
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
}