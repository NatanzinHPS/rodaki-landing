import { Component, signal } from '@angular/core';
import { LandingPageComponent } from './components/landing-page/landing-page';

@Component({
  selector: 'app-root',
  imports: [LandingPageComponent],
  template: '<app-landing-page></app-landing-page>',
  styleUrl: './app.scss'
})
export class App {
  protected readonly title = signal('rodaki-landing');
}
