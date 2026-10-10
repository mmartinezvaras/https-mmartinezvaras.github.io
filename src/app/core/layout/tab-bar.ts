import { Component, ElementRef, computed, inject, signal, viewChild } from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';
import { NavigationEnd, Router, RouterLink } from '@angular/router';
import { filter, map } from 'rxjs';
import { site } from '../../data/site';
import { primaryLinks, secondaryLinks } from './nav';

// Barra de pestañas inferior (solo móvil) y hoja "Más" con las secciones secundarias.
// La hoja es un <dialog> nativo: atrapa el foco, se cierra con Esc y se arrastra hacia abajo para cerrarla.
@Component({
  selector: 'app-tab-bar',
  imports: [RouterLink],
  template: `
    <nav aria-label="Secciones" class="tabbar glass md:hidden">
      <ul class="flex">
        @for (link of links; track link.path; let i = $index) {
          <li class="flex flex-1">
            <a class="tab" [routerLink]="link.path" [attr.data-on]="active() === link.path"
               [attr.aria-current]="active() === link.path ? 'page' : null"
               (click)="onTab(link.path)">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
                @switch (i) {
                  @case (0) { <path d="M3.5 10.5 12 3.5l8.5 7V20a.5.5 0 0 1-.5.5h-5v-6h-6v6H4a.5.5 0 0 1-.5-.5Z" /> }
                  @case (1) { <rect x="3.5" y="3.5" width="7" height="7" rx="2" /><rect x="13.5" y="3.5" width="7" height="7" rx="2" /><rect x="3.5" y="13.5" width="7" height="7" rx="2" /><rect x="13.5" y="13.5" width="7" height="7" rx="2" /> }
                  @case (2) { <circle cx="12" cy="8" r="4" /><path d="M4.5 20.5a7.5 7.5 0 0 1 15 0" /> }
                  @case (3) { <rect x="3" y="5" width="18" height="14" rx="2.5" /><path d="m3.5 6.5 8.5 6.5 8.5-6.5" /> }
                }
              </svg>
              {{ link.label }}
            </a>
          </li>
        }
        <li class="flex flex-1">
          <button type="button" class="tab" [attr.data-on]="inMore()" aria-haspopup="dialog" (click)="open()">
            <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
              <circle cx="5.5" cy="12" r="1.6" /><circle cx="12" cy="12" r="1.6" /><circle cx="18.5" cy="12" r="1.6" />
            </svg>
            Más
          </button>
        </li>
      </ul>
    </nav>

    <dialog #sheet class="sheet md:hidden" aria-labelledby="sheet-title"
            (cancel)="$event.preventDefault(); close()" (click)="onBackdrop($event)">
      <div class="sheet-grip" (pointerdown)="dragStart($event)" (pointermove)="dragMove($event)"
           (pointerup)="dragEnd($event)" (pointercancel)="dragEnd($event)">
        <span class="sheet-handle" aria-hidden="true"></span>
        <h2 id="sheet-title" class="text-xl">Más</h2>
      </div>

      <ul class="mt-3 overflow-hidden rounded-2xl bg-bg">
        @for (link of more; track link.path) {
          <li class="border-b last:border-b-0">
            <a class="flex min-h-14 items-center justify-between px-4 text-[1.0625rem] transition-colors active:bg-card" [routerLink]="link.path"
               [attr.aria-current]="active() === link.path ? 'page' : null" (click)="close()">
              {{ link.label }}
              <svg viewBox="0 0 24 24" class="size-4 text-muted" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" aria-hidden="true"><path d="m9 6 6 6-6 6" /></svg>
            </a>
          </li>
        }
      </ul>

      <a class="btn btn-solid mt-4 w-full" [href]="site.cv" [attr.download]="site.cvFileName">Descargar CV</a>
      <button type="button" class="btn btn-ghost mt-3 w-full" (click)="close()">Cerrar</button>
    </dialog>
  `
})
export class TabBar {
  site = site;
  links = primaryLinks;
  more = secondaryLinks;

  private router = inject(Router);
  private url = toSignal(
    this.router.events.pipe(
      filter((e) => e instanceof NavigationEnd),
      map(() => this.router.url)
    ),
    { initialValue: this.router.url }
  );
  // Ruta de primer nivel: /proyectos/rag-pdfs cuenta como /proyectos
  active = computed(() => '/' + (this.url().split(/[/?#]/)[1] ?? ''));
  inMore = computed(() => this.more.some((l) => l.path === this.active()));

  private sheet = viewChild.required<ElementRef<HTMLDialogElement>>('sheet');
  private drag = signal<{ y: number; t: number; dy: number } | null>(null);

  // Pulsar la pestaña en la que ya estás vuelve arriba, como en iOS
  onTab(path: string) {
    if (path === this.active()) {
      const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
      window.scrollTo({ top: 0, behavior: reduce ? 'auto' : 'smooth' });
    }
  }

  open() {
    const d = this.sheet().nativeElement;
    d.removeAttribute('data-closing');
    d.style.transform = '';
    d.showModal();
  }

  close() {
    const d = this.sheet().nativeElement;
    if (!d.open || d.dataset['closing']) return;
    d.style.transform = '';
    d.style.transition = '';
    d.dataset['closing'] = 'true';
    let done = false;
    const finish = () => {
      if (done) return;
      done = true;
      d.close();
      d.removeAttribute('data-closing');
    };
    d.addEventListener('transitionend', finish, { once: true });
    setTimeout(finish, 280);
  }

  // Un toque fuera de la hoja (en el fondo oscurecido) la cierra
  onBackdrop(e: MouseEvent) {
    const d = this.sheet().nativeElement;
    if (e.target !== d) return;
    const r = d.getBoundingClientRect();
    const inside = e.clientX >= r.left && e.clientX <= r.right && e.clientY >= r.top && e.clientY <= r.bottom;
    if (!inside) this.close();
  }

  // Arrastrar hacia abajo: la hoja sigue al dedo 1:1 y se cierra si se suelta lejos o con un gesto rápido
  dragStart(e: PointerEvent) {
    (e.currentTarget as HTMLElement).setPointerCapture(e.pointerId);
    this.drag.set({ y: e.clientY, t: performance.now(), dy: 0 });
    this.sheet().nativeElement.style.transition = 'none';
  }

  dragMove(e: PointerEvent) {
    const s = this.drag();
    if (!s) return;
    const raw = e.clientY - s.y;
    // Hacia arriba ofrece resistencia en lugar de un tope seco
    const dy = raw >= 0 ? raw : -Math.sqrt(-raw) * 2;
    this.drag.set({ ...s, dy });
    this.sheet().nativeElement.style.transform = `translateY(${dy}px)`;
  }

  dragEnd(e: PointerEvent) {
    const s = this.drag();
    if (!s) return;
    this.drag.set(null);
    const velocity = s.dy / Math.max(1, performance.now() - s.t);
    const d = this.sheet().nativeElement;
    if (s.dy > 120 || (s.dy > 10 && velocity > 0.11)) {
      this.close();
    } else {
      d.style.transition = '';
      d.style.transform = '';
    }
  }
}
