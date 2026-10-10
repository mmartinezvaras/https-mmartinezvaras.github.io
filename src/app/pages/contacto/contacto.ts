import { Component, computed, signal } from '@angular/core';
import { Reveal } from '../../core/reveal';
import { site } from '../../data/site';

@Component({
  selector: 'app-contacto',
  imports: [Reveal],
  template: `
    <section class="wrap pt-12 sm:pt-24">
      <p appReveal class="eyebrow">Contacto</p>
      <h1 appReveal class="display mt-3" style="--i: 1">Hablemos.</h1>
      <p appReveal class="lead mt-5 max-w-2xl" style="--i: 2">{{ site.seeking }} {{ site.availability }}.</p>

      <div class="mt-12 grid gap-5 md:grid-cols-2">
        <div class="flex flex-col gap-5">
          <ul appReveal class="panel overflow-hidden" aria-label="Formas de contacto">
            @for (c of channels; track c.label) {
              <li class="border-b last:border-b-0">
                <a class="flex min-h-16 items-center gap-4 px-6 transition-colors active:bg-bg" [href]="c.href"
                   [attr.target]="c.external ? '_blank' : null" [attr.rel]="c.external ? 'noopener' : null">
                  <span class="w-20 shrink-0 font-semibold">{{ c.label }}</span>
                  <span class="min-w-0 flex-1 truncate text-muted">{{ c.text }}</span>
                  <svg viewBox="0 0 24 24" class="size-4 shrink-0 text-muted" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" aria-hidden="true"><path d="m9 6 6 6-6 6" /></svg>
                  @if (c.external) { <span class="sr-only">(se abre en otra pestaña)</span> }
                </a>
              </li>
            }
          </ul>

          <div appReveal class="panel px-6 py-8 sm:p-8" style="--i: 1">
            <h2 class="text-2xl">Mi CV</h2>
            <p class="mt-2 text-muted">Una página con formación, experiencia, proyectos y habilidades.</p>
            <a [href]="site.cv" [attr.download]="site.cvFileName" class="btn btn-solid mt-6">Descargar CV (PDF)</a>
          </div>
        </div>

        <form appReveal class="panel px-6 py-8 sm:p-8" style="--i: 2" (submit)="$event.preventDefault(); send()">
          <h2 class="text-2xl">Escríbeme</h2>
          <p class="mt-2 text-muted">Se abrirá tu aplicación de correo con el mensaje ya escrito.</p>

          <label for="name" class="mt-6 block text-sm font-semibold">Tu nombre</label>
          <input id="name" type="text" autocomplete="name" enterkeyhint="next"
                 class="field mt-2" (input)="name.set(value($event))" />

          <label for="message" class="mt-5 block text-sm font-semibold">Mensaje</label>
          <textarea id="message" rows="5" class="field mt-2 resize-y" (input)="message.set(value($event))"></textarea>

          <button type="submit" class="btn btn-solid mt-6 w-full sm:w-auto">Abrir en mi correo</button>
        </form>
      </div>
    </section>
  `
})
export default class Contacto {
  site = site;
  name = signal('');
  message = signal('');

  channels = [
    { label: 'Email', text: site.email, href: 'mailto:' + site.email, external: false },
    { label: 'LinkedIn', text: 'Marcos María Martínez Varas', href: site.linkedin, external: true },
    { label: 'GitHub', text: 'github.com/mmartinezvaras', href: site.github, external: true }
  ];

  private mailto = computed(() => {
    const subject = 'Contacto desde tu portfolio' + (this.name() ? ' - ' + this.name() : '');
    const body = this.message() + (this.name() ? '\n\n' + this.name() : '');
    return 'mailto:' + site.email + '?subject=' + encodeURIComponent(subject) + '&body=' + encodeURIComponent(body);
  });

  value(e: Event) {
    return (e.target as HTMLInputElement | HTMLTextAreaElement).value;
  }

  send() {
    window.location.href = this.mailto();
  }
}
