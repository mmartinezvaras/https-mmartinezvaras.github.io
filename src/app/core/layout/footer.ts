import { Component } from '@angular/core';
import { site } from '../../data/site';

@Component({
  selector: 'app-footer',
  template: `
    <footer class="px-6 py-4 border-t">
      <p>{{ site.name }}</p>
    </footer>
  `
})
export class Footer {
  site = site;
}