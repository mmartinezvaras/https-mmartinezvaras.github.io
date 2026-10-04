import { Component, computed, signal } from '@angular/core';
import { RouterLink } from '@angular/router';
import { projects } from '../../data/projects';

@Component({
  selector: 'app-proyectos',
  imports: [RouterLink],
  template: `
    <section class="mx-auto max-w-5xl py-16">
      <p class="font-mono text-sm text-accent">04 / Proyectos</p>
      <h1 class="mt-4 text-4xl font-semibold sm:text-6xl">Lo que he construido.</h1>

      <div class="mt-10 flex flex-wrap gap-2" role="group" aria-label="Filtrar por etiqueta">
        <button type="button"
                class="border px-3 py-1 font-mono text-sm transition-colors duration-200"
                [class]="selected() === null ? 'border-accent text-accent' : 'border-line text-muted hover:text-fg'"
                [attr.aria-pressed]="selected() === null"
                (click)="select(null)">Todos</button>
        @for (tag of tags; track tag) {
          <button type="button"
                  class="border px-3 py-1 font-mono text-sm transition-colors duration-200"
                  [class]="selected() === tag ? 'border-accent text-accent' : 'border-line text-muted hover:text-fg'"
                  [attr.aria-pressed]="selected() === tag"
                  (click)="select(tag)">{{ tag }}</button>
        }
      </div>

      <ul class="mt-12 divide-y divide-line border-y border-line">
        @for (p of visible(); track p.slug) {
          <li>
            <a [routerLink]="['/proyectos', p.slug]"
               class="group grid gap-3 py-8 transition-colors duration-200 sm:grid-cols-[1fr_auto]">
              <div>
                <h2 class="text-2xl font-semibold group-hover:text-accent">{{ p.title }}</h2>
                <p class="mt-2 max-w-2xl text-muted">{{ p.summary }}</p>
              </div>
              <ul class="flex flex-wrap content-start gap-2 sm:max-w-xs sm:justify-end">
                @for (t of p.tags; track t) {
                  <li class="font-mono text-xs text-muted">{{ t }}</li>
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