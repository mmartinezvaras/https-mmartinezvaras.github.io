import { Component, computed, signal } from '@angular/core';
import { site } from '../../data/site';

@Component({
  selector: 'app-contacto',
  template: `
    <section class="py-16 sm:py-24">
      <h1 class="reveal text-5xl sm:text-7xl">Hablemos.</h1>
      <p class="reveal mt-6 max-w-2xl text-lg text-muted" style="--i: 1">{{ site.seeking }}</p>

      <div class="reveal mt-14 grid gap-12 md:grid-cols-2" style="--i: 2">
        <dl class="divide-y border-y">
          <div class="grid gap-1 py-5 sm:grid-cols-[6rem_1fr]">
            <dt class="font-mono text-sm text-accent">Email</dt>
            <dd><a [href]="'mailto:' + site.email" class="hover:text-accent">{{ site.email }}</a></dd>
          </div>
          <div class="grid gap-1 py-5 sm:grid-cols-[6rem_1fr]">
            <dt class="font-mono text-sm text-accent">GitHub</dt>
            <dd><a [href]="site.github" target="_blank" rel="noopener" class="hover:text-accent">Ver perfil</a></dd>
          </div>
          <div class="grid gap-1 py-5 sm:grid-cols-[6rem_1fr]">
            <dt class="font-mono text-sm text-accent">LinkedIn</dt>
            <dd><a [href]="site.linkedin" target="_blank" rel="noopener" class="hover:text-accent">Ver perfil</a></dd>
          </div>
        </dl>

        <div>
          <label for="name" class="font-mono text-sm text-accent">Tu nombre</label>
          <input id="name" type="text" autocomplete="name"
                 class="mt-2 w-full bg-transparent px-3 py-2 ring-1 ring-line focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent"
                 (input)="update($event.target, 'name')" />

          <label for="message" class="mt-6 block font-mono text-sm text-accent">Mensaje</label>
          <textarea id="message" rows="5"
                    class="mt-2 w-full bg-transparent px-3 py-2 ring-1 ring-line focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent"
                    (input)="update($event.target, 'message')"></textarea>

          <a [href]="mailto()" class="btn btn-solid mt-6">Abrir en mi correo</a>
          <p class="mt-3 text-sm text-muted">Se abrirá tu aplicación de correo con el mensaje ya escrito.</p>
        </div>
      </div>

      <a [href]="site.cv" download class="btn btn-ghost mt-16">Descargar CV</a>
    </section>
  `
})
export default class Contacto {
  site = site;
  name = signal('');
  message = signal('');

  mailto = computed(() => {
    const subject = 'Contacto desde tu portfolio' + (this.name() ? ' - ' + this.name() : '');
    const body = this.message() + (this.name() ? '\n\n' + this.name() : '');
    return 'mailto:' + site.email + '?subject=' + encodeURIComponent(subject) + '&body=' + encodeURIComponent(body);
  });

  update(target: EventTarget | null, field: 'name' | 'message') {
    const value = (target as HTMLInputElement | HTMLTextAreaElement).value;
    if (field === 'name') {
      this.name.set(value);
    } else {
      this.message.set(value);
    }
  }
}