import { Component, input } from '@angular/core';
import { RouterLink } from '@angular/router';
import { Project } from '../../data/projects';

// Tarjeta de proyecto con dos tamaños: 'hero' para el proyecto principal y 'tile' para el resto.
@Component({
  selector: 'app-project-card',
  imports: [RouterLink],
  host: { class: 'block h-full' },
  template: `
    @let p = project();
    @if (size() === 'hero') {
      <article class="panel overflow-hidden px-6 py-9 sm:p-12 lg:p-16">
        <p class="eyebrow">Proyecto destacado · {{ p.area }}</p>
        <h2 class="display mt-4 max-w-[13ch]">{{ p.headline }}</h2>
        <p class="lead mt-5 max-w-2xl">{{ p.value }}</p>

        <div class="mt-12 grid gap-10 md:grid-cols-[auto_1fr] md:items-end md:gap-16">
          <div>
            <p class="metric text-[clamp(5.5rem,24vw,10rem)]">{{ p.metric.value }}</p>
            <p class="mt-3 max-w-xs text-muted">{{ p.metric.label }}</p>
          </div>
          <div class="md:justify-self-end md:text-right">
            <ul class="stack md:justify-end" aria-label="Stack">
              @for (t of p.stack; track t) { <li>{{ t }}</li> }
            </ul>
            <div class="mt-6 flex flex-wrap gap-3 md:justify-end">
              <a class="btn btn-solid" [routerLink]="['/proyectos', p.slug]">Ver caso de estudio</a>
              <a class="btn btn-ghost" [href]="p.repo" target="_blank" rel="noopener">
                GitHub <span aria-hidden="true">↗</span><span class="sr-only">(se abre en otra pestaña)</span>
              </a>
              @if (p.demo) {
                <a class="btn btn-ghost" [href]="p.demo" target="_blank" rel="noopener">
                  Demo <span aria-hidden="true">↗</span><span class="sr-only">(se abre en otra pestaña)</span>
                </a>
              }
            </div>
          </div>
        </div>
      </article>
    } @else {
      <article class="card flex h-full flex-col px-6 py-7 sm:p-8">
        <p class="eyebrow">
          {{ p.area }}@if (p.status) {<span class="text-muted"> · {{ p.status }}</span>}
        </p>
        <h3 class="mt-3 text-[1.75rem]">
          <a class="stretched" [routerLink]="['/proyectos', p.slug]">{{ p.headline }}</a>
        </h3>
        <p class="mt-3 text-muted">{{ p.value }}</p>

        <div class="mt-auto pt-9">
          <p class="metric text-[3.5rem]">{{ p.metric.value }}</p>
          <p class="mt-2 text-[0.9375rem] leading-snug text-muted">{{ p.metric.label }}</p>
          <ul class="stack mt-6" aria-label="Stack">
            @for (t of p.stack; track t) { <li>{{ t }}</li> }
          </ul>
          <div class="above mt-4 flex gap-6">
            <a class="btn-link inline-flex items-center" [href]="p.repo" target="_blank" rel="noopener">
              GitHub <span aria-hidden="true">&nbsp;↗</span><span class="sr-only">: {{ p.name }} (se abre en otra pestaña)</span>
            </a>
            @if (p.demo) {
              <a class="btn-link inline-flex items-center" [href]="p.demo" target="_blank" rel="noopener">
                Demo <span aria-hidden="true">&nbsp;↗</span><span class="sr-only">: {{ p.name }} (se abre en otra pestaña)</span>
              </a>
            }
          </div>
        </div>
      </article>
    }
  `
})
export class ProjectCard {
  project = input.required<Project>();
  size = input<'hero' | 'tile'>('tile');
}
