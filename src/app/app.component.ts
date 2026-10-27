import { Component, OnInit, signal } from '@angular/core';
import { Router, RouterOutlet, NavigationEnd } from '@angular/router';
import { filter } from 'rxjs/operators';
import { HeaderComponent } from './components/header/header.component';
import { HeroComponent } from './components/hero/hero.component';
import { ActivitiesComponent } from './components/activities/activities.component';
import { NovidadesComponent } from './components/novidades/novidades.component';
import { CtaComponent } from './components/cta/cta.component';
import { FooterComponent } from './components/footer/footer.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    HeaderComponent,
    HeroComponent,
    ActivitiesComponent,
    NovidadesComponent,
    CtaComponent,
    FooterComponent,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent implements OnInit {
  readonly isHomePage = signal(true);

  constructor(private router: Router) {}

  ngOnInit(): void {
    // Remove loader
    setTimeout(() => {
      const load = document.getElementById('load');
      if (load) {
        load.classList.add('loader-removed');
      }
    }, 400);

    // Track route changes to show home sections vs sub-pages
    this.router.events
      .pipe(filter((event) => event instanceof NavigationEnd))
      .subscribe((event: NavigationEnd) => {
        const cleanUrl = (event.urlAfterRedirects || event.url || '')
          .split('?')[0]
          .split('#')[0]
          .replace(/\/$/, '');
        this.isHomePage.set(cleanUrl === '');
        window.scrollTo(0, 0);
      });

    // Set initial state
    const initialUrl = (this.router.url || '')
      .split('?')[0]
      .split('#')[0]
      .replace(/\/$/, '');
    this.isHomePage.set(initialUrl === '');
  }
}
