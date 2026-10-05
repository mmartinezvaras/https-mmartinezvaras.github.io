import { Component } from '@angular/core';
import { site } from '../../data/site';

@Component({
  selector: 'app-footer',
  template: `
    <footer class="mx-auto mt-24 w-full max-w-5xl border-t px-6 py-8">
      <div class="flex flex-wrap items-baseline justify-between gap-4 text-sm text-muted">
        <p>{{ site.name }} · {{ year }}</p>
        <p class="flex gap-5 font-mono">
          <a [href]="'mailto:' + site.email" class="hover:text-fg">Email</a>
          <a [href]="site.github" target="_blank" rel="noopener" class="hover:text-fg">GitHub</a>
          <a [href]="site.linkedin" target="_blank" rel="noopener" class="hover:text-fg">LinkedIn</a>
        </p>
      </div>
    </footer>
  `
})
export class Footer {
  site = site;
  year = new Date().getFullYear();
}