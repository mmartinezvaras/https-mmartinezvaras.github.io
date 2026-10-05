import { Component, computed, signal } from '@angular/core';
import { RouterLink } from '@angular/router';
import { projects } from '../../data/projects';

@Component({
  selector: 'app-proyectos',
  imports: [RouterLink],
  template: `
    <section class="py-16 sm:py-24">
      <h1 class="reveal max-w-3xl text-5xl sm:text-7xl">Lo que he construido.</h1>

      <div class="reveal mt-10 flex flex-wrap gap-2" style="--i: 1" role="group" aria-label="Filtrar por etiqueta">
        <button type="button" class="btn btn-chip btn-sm" [attr.aria-pressed]="selected() === null" (click)="select(null)">Todos</button>
        @for (tag of tags; track tag) {
          <button type="button" class="btn btn-chip btn-sm" [attr.aria-pressed]="selected() === tag" (click)="select(tag)">{{ tag }}</button>
        }
      </div>

      <ul class="reveal mt-12 divide-y border-y" style="--i: 2">
        @for (p of visible(); track p.slug) {
          <li>
            <a [routerLink]="['/proyectos', p.slug]" class="group grid gap-4 py-8 sm:grid-cols-[1fr_16rem] sm:gap-10">
              <div class="transition-transform duration-200 ease-out group-hover:translate-x-1">
                <h2 class="text-3xl transition-colors duration-150 group-hover:text-accent">{{ p.title }}</h2>
                <p class="mt-2 max-w-2xl text-muted">{{ p.summary }}</p>
              </div>
              <ul class="flex flex-wrap content-start gap-x-3 gap-y-1 font-mono text-xs text-muted sm:justify-end">
                @for (t of p.tags; track t) {
                  <li>{{ t }}</li>
                }
              </ul>
            </a>
          </li>
        }
      </ul>
    </section>
  `
})
export default class Proyectos {
  projects = projects;
  tags = [...new Set(projects.flatMap((p) => p.tags))].sort();
  selected = signal<string | null>(null);
  visible = computed(() => {
    const t = this.selected();
    return t ? this.projects.filter((p) => p.tags.includes(t)) : this.projects;
  });

  select(tag: string | null) {
    this.selected.set(tag);
  }
}