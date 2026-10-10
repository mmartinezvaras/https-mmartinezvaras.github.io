import { Component, input } from '@angular/core';
import { RouterLink } from '@angular/router';
import { Project } from '../../data/projects';

// Tarjeta de proyecto. Orden de lectura pensado para alguien no técnico:
// 1) el problema, 2) qué consigue (el único elemento en color de acento), 3) cómo está hecho, discreto.
// 'hero' es el proyecto principal; 'tile' el resto.
@Component({
  selector: 'app-project-card',
  imports: [RouterLink],
  host: { class: 'block h-full' },
  template: `
    @let p = project();
    @if (size() === 'hero') {
      <article class="panel overflow-hidden px-6 py-9 sm:p-12 lg:p-16">
        <p class="eyebrow">Proyecto destacado · {{ p.name }}</p>
        <h2 class="mt-4 max-w-[22ch] text-[clamp(1.75rem,5.5vw,3.25rem)] leading-[1.08]">{{ p.problem }}</h2>

        <div class="mt-10 sm:mt-14">
          <p class="impact text-[clamp(3rem,13vw,6.5rem)]">{{ p.impact.value }}</p>
          <p class="mt-4 max-w-xl text-[1.1875rem] leading-snug">{{ p.impact.label }}</p>
        </div>

        <div class="mt-10 grid gap-8 border-t pt-8 md:grid-cols-[1fr_auto] md:items-end md:gap-16">
          <div>
            <h3 class="text-sm font-semibold text-muted">Cómo está hecho</h3>
            <p class="mt-2 max-w-2xl text-[0.9375rem] text-muted">{{ p.how }}</p>
            <ul class="stack mt-4" aria-label="Tecnologías">
              @for (t of p.stack; track t) { <li>{{ t }}</li> }
            </ul>
          </div>
          <div class="flex flex-col gap-3 min-[420px]:flex-row md:justify-end">
            <a class="btn btn-solid" [routerLink]="['/proyectos', p.slug]">Ver el proyecto</a>
            <a class="btn btn-ghost" [href]="p.repo" target="_blank" rel="noopener">
              Código en GitHub <span aria-hidden="true">↗</span><span class="sr-only">(se abre en otra pestaña)</span>
            </a>
          </div>
        </div>
      </article>
    } @else {
      <article class="card flex h-full flex-col px-6 py-7 sm:p-8">
        <p class="eyebrow">
          {{ p.name }}@if (p.status) {<span> · {{ p.status }}</span>}
        </p>
        <h3 class="mt-3 text-[1.25rem] leading-[1.22] sm:text-[1.375rem]">
          <a class="stretched" [routerLink]="['/proyectos', p.slug]">{{ p.problem }}</a>
        </h3>

        <div class="mt-auto pt-8">
          <p class="impact text-[2.25rem]">{{ p.impact.value }}</p>
          <p class="mt-2 leading-snug">{{ p.impact.label }}</p>
          <ul class="stack mt-6 border-t pt-4" aria-label="Tecnologías">
            @for (t of p.stack; track t) { <li>{{ t }}</li> }
          </ul>
          <a class="above btn-link mt-2 inline-flex items-center" [href]="p.repo" target="_blank" rel="noopener">
            Código en GitHub <span aria-hidden="true">&nbsp;↗</span><span class="sr-only">: {{ p.name }} (se abre en otra pestaña)</span>
          </a>
        </div>
      </article>
    }
  `
})
export class ProjectCard {
  project = input.required<Project>();
  size = input<'hero' | 'tile'>('tile');
}
