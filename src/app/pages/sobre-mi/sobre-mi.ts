import { Component } from '@angular/core';
import { site } from '../../data/site';

@Component({
  selector: 'app-sobre-mi',
  template: `
    <section class="py-16 sm:py-24">
      <h1 class="reveal max-w-3xl text-5xl sm:text-7xl">Datos, IA y sistemas que duran.</h1>

      <div class="mt-14 grid gap-12 md:grid-cols-[1fr_1.4fr]">
        <div class="reveal" style="--i: 1">
          <p class="text-lg text-muted">{{ site.intro }}</p>
          <h2 class="mt-8 font-mono text-sm font-normal tracking-normal text-accent">Qué busco</h2>
          <p class="mt-2 text-lg">{{ site.seeking }}</p>
        </div>

        <dl class="reveal divide-y border-y" style="--i: 2">
          @for (item of site.interests; track item.title) {
            <div class="grid gap-2 py-6 sm:grid-cols-[8rem_1fr]">
              <dt class="font-mono text-sm text-accent">{{ item.title }}</dt>
              <dd class="text-muted">{{ item.text }}</dd>
            </div>
          }
        </dl>
      </div>
    </section>
  `
})
export default class SobreMi {
  site = site;
}