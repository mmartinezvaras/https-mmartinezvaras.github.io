import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-sobre-mi',
  standalone: true,
  imports: [CommonModule],
  template: '<h2>Sobre Mí</h2><p>Demostración de contenido sobre mí.</p>'
})
export default class SobreMiComponent {}
