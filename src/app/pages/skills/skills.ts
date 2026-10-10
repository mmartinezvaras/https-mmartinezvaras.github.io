import { Component } from '@angular/core';
import { Reveal } from '../../core/reveal';
import { site } from '../../data/site';

@Component({
  selector: 'app-skills',
  imports: [Reveal],
  template: `
    <section class="wrap pt-12 sm:pt-24">
      <p appReveal class="eyebrow">Skills</p>
      <h1 appReveal class="display mt-3" style="--i: 1">Lo que uso.</h1>
      <p appReveal class="lead mt-5 max-w-2xl" style="--i: 2">
        Sin barras de porcentaje: lo que he usado en proyectos reales y lo que estoy aprendiendo ahora.
      </p>

      <div class="mt-12 grid gap-3 md:grid-cols-2 md:gap-5">
        @for (group of site.skills; track group.category; let i = $index) {
          <section appReveal class="panel px-6 py-7 sm:p-8" [style.--i]="i % 2">
            <h2 class="text-2xl">{{ group.category }}</h2>
            <ul class="mt-5 flex flex-wrap gap-2">
              @for (item of group.items; track item.name) {
                <li class="rounded-full bg-bg px-3.5 py-1.5 text-[0.9375rem]">
                  {{ item.name }}
                  @if (item.learning) {
                    <span class="ml-1 text-sm text-muted">· aprendiendo</span>
                  }
                </li>
              }
            </ul>
          </section>
        }
      </div>
    </section>
  `
})
export default class Skills {
  site = site;
}
