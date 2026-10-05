import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { site } from '../../data/site';

@Component({
  selector: 'app-inicio',
  imports: [RouterLink],
  template: `
    <section class="relative isolate py-16 sm:py-24">
      <div class="dots absolute inset-0 -z-10" aria-hidden="true"></div>

      <h1 class="reveal font-display text-[clamp(3.25rem,11vw,8.5rem)] font-semibold leading-[0.92]">
        <span class="block">{{ first }}</span>
        <span class="block">{{ last }}</span>
      </h1>
      <p class="reveal mt-6 font-mono text-sm text-muted" style="--i: 1">{{ site.role }}</p>
      <p class="reveal mt-10 max-w-2xl font-display text-3xl font-semibold sm:text-4xl" style="--i: 2">{{ site.tagline }}</p>
      <p class="reveal mt-5 max-w-xl text-lg text-muted" style="--i: 3">{{ site.intro }}</p>

      <div class="reveal mt-10 flex flex-wrap gap-4" style="--i: 4">
        <a routerLink="/proyectos" class="btn btn-solid">Ver proyectos</a>
        <a routerLink="/contacto" class="btn btn-ghost">Contacto</a>
      </div>

      <dl class="reveal mt-20 grid gap-8 border-t pt-6 sm:grid-cols-3" style="--i: 5">
        @for (f of facts; track f.label) {
          <div>
            <dt class="font-mono text-xs text-muted">{{ f.label }}</dt>
            <dd class="mt-2">{{ f.text }}</dd>
          </div>
        }
      </dl>
    </section>
  `
})
export default class Inicio {
  site = site;
  first = site.name.split(' ').slice(0, 2).join(' ');
  last = site.name.split(' ').slice(2).join(' ');
  facts = [
    { label: 'Ahora', text: site.education[0].title + ' · ' + site.education[0].center },
    { label: 'Antes', text: site.education[1].title + ' · Prácticas en ' + site.experience[0].company },
    { label: 'Busco', text: site.seeking }
  ];
}