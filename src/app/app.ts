import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Header } from './core/layout/header';
import { Footer } from './core/layout/footer';
import { TabBar } from './core/layout/tab-bar';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Header, Footer, TabBar],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {}
