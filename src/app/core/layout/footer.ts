import { Component } from '@angular/core';
import { site } from '../../data/site';

@Component({
  selector: 'app-footer',
  template: `
    <footer class="wrap mt-24 sm:mt-32">
      <div class="flex flex-col gap-2 border-t py-6 text-sm text-muted sm:flex-row sm:items-center sm:justify-between">
        <p>{{ site.name }} · {{ site.location }} · {{ year }}</p>
        <ul class="-mx-2 flex">
          <li><a [href]="'mailto:' + site.email" class="navlink flex min-h-11 items-center px-2">Email</a></li>
          <li><a [href]="site.github" target="_blank" rel="noopener" class="navlink flex min-h-11 items-center px-2">GitHub</a></li>
          <li><a [href]="site.linkedin" target="_blank" rel="noopener" class="navlink flex min-h-11 items-center px-2">LinkedIn</a></li>
          <li><a [href]="site.cv" [attr.download]="site.cvFileName" class="navlink flex min-h-11 items-center px-2">CV</a></li>
        </ul>
      </div>
    </footer>
  `
})
export class Footer {
  site = site;
  year = new Date().getFullYear();
}
