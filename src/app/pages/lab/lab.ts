import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-lab',
  standalone: true,
  imports: [CommonModule],
  template: '<h2>Lab</h2><p>Demostración de contenido del laboratorio.</p>'
})
export default class LabComponent {}