import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { Reveal } from '../../core/reveal';
import { ProjectCard } from '../../core/ui/project-card';
import { projects } from '../../data/projects';
import { site } from '../../data/site';

@Component({
  selector: 'app-inicio',
  imports: [RouterLink, Reveal, ProjectCard],
  template: `
    <section class="wrap pb-20 pt-10 sm:pb-28 sm:pt-24">
      <img appReveal src="avatar.webp" width="237" height="237" alt="Retrato de Marcos"
           class="avatar mb-7 size-20 sm:size-24" fetchpriority="high" />
      <p appReveal class="eyebrow">{{ site.role }}</p>
      <h1 appReveal class="mt-4 text-[clamp(3rem,12vw,7.5rem)] leading-[0.98] tracking-[-0.045em]" style="--i: 1">
        <span class="block">{{ first }}</span>
        <span class="block text-muted">{{ last }}</span>
      </h1>
      <p appReveal class="mt-8 max-w-2xl text-[clamp(1.5rem,4vw,2.25rem)] font-semibold leading-tight tracking-[-0.025em]" style="--i: 2">
        {{ site.tagline }}
      </p>
      <p appReveal class="lead mt-4 max-w-2xl" style="--i: 3">{{ site.intro }}</p>

      <div appReveal class="mt-10 flex flex-col gap-3 min-[420px]:flex-row" style="--i: 4">
        <a routerLink="/proyectos" class="btn btn-solid">Ver proyectos</a>
        <a [href]="site.cv" [attr.download]="site.cvFileName" class="btn btn-ghost">Descargar CV</a>
      </div>

      <dl appReveal class="mt-16 grid gap-px overflow-hidden rounded-3xl bg-line sm:grid-cols-3" style="--i: 5">
        @for (f of facts; track f.label) {
          <div class="bg-card p-6">
            <dt class="text-sm font-semibold text-muted">{{ f.label }}</dt>
            <dd class="mt-2 leading-snug">{{ f.text }}</dd>
          </div>
        }
      </dl>
    </section>

    @if (featured) {
      <section class="wrap" aria-label="Proyecto destacado">
        <app-project-card appReveal [project]="featured" size="hero" />
      </section>
    }

    <section class="wrap mt-20 sm:mt-28" aria-labelledby="mas-proyectos">
      <div appReveal class="flex items-end justify-between gap-6">
        <h2 id="mas-proyectos" class="text-[clamp(1.75rem,5vw,3rem)]">Más proyectos.</h2>
        <a routerLink="/proyectos" class="btn-link inline-flex shrink-0 items-center">Ver todos <span aria-hidden="true">&nbsp;›</span></a>
      </div>
      <ul appReveal class="rail mt-8" style="--i: 1">
        @for (p of more; track p.slug) {
          <li><app-project-card [project]="p" /></li>
        }
      </ul>
    </section>

    <section class="wrap mt-20 sm:mt-28">
      <div appReveal class="panel px-6 py-12 text-center sm:px-12 sm:py-20">
        <h2 class="text-[clamp(2rem,6vw,3.5rem)]">¿Hablamos?</h2>
        <p class="lead mx-auto mt-4 max-w-xl">{{ site.seeking }}</p>
        <div class="mt-8 flex flex-col justify-center gap-3 min-[420px]:flex-row">
          <a routerLink="/contacto" class="btn btn-solid">Contactar</a>
          <a [href]="site.linkedin" target="_blank" rel="noopener" class="btn btn-ghost">
            LinkedIn <span aria-hidden="true">↗</span><span class="sr-only">(se abre en otra pestaña)</span>
          </a>
        </div>
      </div>
    </section>
  `
})
export default class Inicio {
  site = site;
  first = site.name.split(' ').slice(0, 2).join(' ');
  last = site.name.split(' ').slice(2).join(' ');
  featured = projects.find((p) => p.featured);
  more = projects.filter((p) => !p.featured).slice(0, 3);
  facts = [
    { label: 'Ahora', text: site.education[0].title + ' · ' + site.education[0].center },
    { label: 'Antes', text: 'DAM · Prácticas en ' + site.experience[0].company },
    { label: 'Busco', text: 'Prácticas o primer empleo · ' + site.availability }
  ];
}
