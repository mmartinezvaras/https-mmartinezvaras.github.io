import { Component, inject } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { projects } from '../../data/projects';

@Component({
  selector: 'app-proyecto-detalle',
  imports: [RouterLink],
  template: `
    <section class="max-w-3xl py-16 sm:py-24">
      <a routerLink="/proyectos" class="font-mono text-sm text-muted hover:text-accent">← Proyectos</a>

      @if (project) {
        <h1 class="reveal mt-6 text-4xl sm:text-6xl">{{ project.title }}</h1>
        <p class="reveal mt-6 text-lg text-muted" style="--i: 1">{{ project.summary }}</p>

        <ul class="reveal mt-6 flex flex-wrap gap-x-4 gap-y-1 font-mono text-xs text-muted" style="--i: 1">
          @for (t of project.tags; track t) {
            <li>{{ t }}</li>
          }
        </ul>

        <dl class="reveal mt-12 divide-y border-y" style="--i: 2">
          @for (s of sections; track s.title) {
            <div class="grid gap-3 py-8 sm:grid-cols-[9rem_1fr]">
              <dt class="font-mono text-sm text-accent">{{ s.title }}</dt>
              <dd class="text-muted">{{ s.text }}</dd>
            </div>
          }
        </dl>

        <a [href]="project.repo" target="_blank" rel="noopener" class="btn btn-solid mt-10">Ver repositorio</a>
      } @else {
        <h1 class="mt-6 text-4xl">Proyecto no encontrado.</h1>
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