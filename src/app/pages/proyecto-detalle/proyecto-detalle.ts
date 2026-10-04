import { Component, inject } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { projects } from '../../data/projects';

@Component({
  selector: 'app-proyecto-detalle',
  imports: [RouterLink],
  template: `
    <section class="mx-auto max-w-3xl py-16">
      <a routerLink="/proyectos" class="font-mono text-sm text-muted hover:text-accent">← Proyectos</a>

      @if (project) {
        <h1 class="mt-6 text-4xl font-semibold sm:text-6xl">{{ project.title }}</h1>
        <p class="mt-6 text-lg text-muted">{{ project.summary }}</p>

        <ul class="mt-6 flex flex-wrap gap-2">
          @for (t of project.tags; track t) {
            <li class="border border-line px-3 py-1 font-mono text-xs">{{ t }}</li>
          }
        </ul>

        <div class="mt-12 divide-y divide-line border-y border-line">
          @for (s of sections; track s.title) {
            <div class="grid gap-3 py-8 sm:grid-cols-[9rem_1fr]">
              <h2 class="font-mono text-sm text-accent">{{ s.title }}</h2>
              <p class="text-muted">{{ s.text }}</p>
            </div>
          }
        </div>

        <a [href]="project.repo" target="_blank" rel="noopener"
           class="mt-10 inline-block border border-fg bg-fg px-5 py-3 font-mono text-sm text-bg transition-opacity duration-200 hover:opacity-80">
          Ver repositorio
        </a>
      } @else {
        <h1 class="mt-6 text-4xl font-semibold">Proyecto no encontrado.</h1>
      }
    </section>
  `
})
export default class ProyectoDetalle {
  project = projects.find((p) => p.slug === inject(ActivatedRoute).snapshot.paramMap.get('slug'));

  sections = this.project
    ? [
        { title: 'Problema', text: this.project.problem },
        { title: 'Datos', text: this.project.data },
        { title: 'Enfoque', text: this.project.approach },
        { title: 'Resultado', text: this.project.result },
        { title: 'Aprendizajes', text: this.project.learnings },
      ]
    : [];
}