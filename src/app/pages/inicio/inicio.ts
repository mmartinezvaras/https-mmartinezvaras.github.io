import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-inicio',
  standalone: true,
  imports: [CommonModule],
  template: '<h2>Bienvenido</h2><p>Demostración de contenido inicial.</p>'
})
export default class InicioComponent {}
