import { Component, computed, inject } from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { map } from 'rxjs';
import { Reveal } from '../../core/reveal';
import { projects } from '../../data/projects';

@Component({
  selector: 'app-proyecto-detalle',
  imports: [RouterLink, Reveal],
  template: `
    <div class="wrap pt-4 sm:pt-10">
      <a routerLink="/proyectos" class="btn-link -ml-1 inline-flex items-center pl-1">
        <span aria-hidden="true">‹&nbsp;</span>Proyectos
      </a>
    </div>

    @if (project(); as p) {
      <article>
        <header class="wrap pt-8 sm:pt-14">
          <p appReveal class="eyebrow">{{ p.name }} · {{ p.area }}@if (p.status) { · {{ p.status }}}</p>
          <h1 appReveal class="display mt-3 max-w-[14ch]" style="--i: 1">{{ p.headline }}</h1>
          <p appReveal class="lead mt-5 max-w-2xl" style="--i: 2">{{ p.value }}</p>

          <div appReveal class="mt-8 flex flex-col gap-3 min-[420px]:flex-row" style="--i: 3">
            <a class="btn btn-solid" [href]="p.repo" target="_blank" rel="noopener">
              Ver en GitHub <span aria-hidden="true">↗</span><span class="sr-only">(se abre en otra pestaña)</span>
            </a>
            @if (p.demo) {
              <a class="btn btn-ghost" [href]="p.demo" target="_blank" rel="noopener">
                Ver demo <span aria-hidden="true">↗</span><span class="sr-only">(se abre en otra pestaña)</span>
              </a>
            }
          </div>
        </header>

        <div class="wrap mt-14">
          <div appReveal class="panel grid gap-8 px-6 py-10 sm:p-14 md:grid-cols-[auto_1fr] md:items-end md:gap-16">
            <div>
              <p class="metric text-[clamp(5rem,22vw,9rem)]">{{ p.metric.value }}</p>
              <p class="mt-3 max-w-sm text-muted">{{ p.metric.label }}</p>
            </div>
            <div class="md:justify-self-end md:text-right">
              <h2 class="text-sm font-semibold text-muted">Stack</h2>
              <ul class="mt-3 flex flex-wrap gap-2 md:justify-end">
                @for (t of p.stack; track t) {
                  <li class="rounded-full bg-bg px-3 py-1.5 text-sm">{{ t }}</li>
                }
              </ul>
            </div>
          </div>
        </div>

        <dl class="wrap mt-16 sm:mt-24">
          @for (s of sections(); track s.title; let i = $index) {
            <div appReveal class="grid gap-3 border-t py-8 sm:py-10 md:grid-cols-[14rem_1fr] md:gap-10">
              <dt class="text-[1.375rem] font-semibold tracking-[-0.02em]">{{ s.title }}</dt>
              <dd class="max-w-[65ch] text-[1.125rem] leading-relaxed text-muted">{{ s.text }}</dd>
            </div>
          }
        </dl>

        <nav class="wrap mt-10" aria-label="Otros proyectos">
          <div class="grid gap-3 sm:grid-cols-2">
            @if (prev(); as q) {
              <a class="card block px-6 py-5" [routerLink]="['/proyectos', q.slug]">
                <span class="text-sm text-muted">‹ Anterior</span>
                <span class="mt-1 block text-lg font-semibold tracking-[-0.015em]">{{ q.headline }}</span>
              </a>
            }
            @if (next(); as q) {
              <a class="card block px-6 py-5 sm:col-start-2 sm:text-right" [routerLink]="['/proyectos', q.slug]">
                <span class="text-sm text-muted">Siguiente ›</span>
                <span class="mt-1 block text-lg font-semibold tracking-[-0.015em]">{{ q.headline }}</span>
              </a>
            }
          </div>
        </nav>
      </article>
    } @else {
      <section class="wrap pt-10">
        <h1 class="display">Proyecto no encontrado.</h1>
        <a routerLink="/proyectos" class="btn btn-solid mt-8">Ver todos los proyectos</a>
      </section>
    }
  `
})
export default class ProyectoDetalle {
  // El componente se reutiliza al ir de un proyecto a otro, así que el slug se escucha, no se lee una vez
  private slug = toSignal(inject(ActivatedRoute).paramMap.pipe(map((m) => m.get('slug'))));
  private index = computed(() => projects.findIndex((p) => p.slug === this.slug()));

  project = computed(() => projects[this.index()]);
  prev = computed(() => projects[this.index() - 1]);
  next = computed(() => projects[this.index() + 1]);

  sections = computed(() => {
    const p = this.project();
    return p
      ? [
          { title: 'Problema', text: p.problem },
          { title: 'Datos', text: p.data },
          { title: 'Enfoque', text: p.approach },
          { title: 'Resultado', text: p.result },
          { title: 'Aprendizajes', text: p.learnings }
        ]
      : [];
  });
}
