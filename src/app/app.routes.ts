import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    children: [],
  },
  {
    path: 'sobre-nos',
    loadComponent: () =>
      import('./pages/about/about.component').then((m) => m.AboutComponent),
  },
  {
    path: 'nosso-patrono-espiritual',
    loadComponent: () =>
      import('./pages/patron/patron.component').then((m) => m.PatronComponent),
  },
  {
    path: 'transparencia',
    loadComponent: () =>
      import('./pages/transparencia/transparencia.component').then(
        (m) => m.TransparenciaComponent,
      ),
  },
  {
    path: 'centros',
    loadComponent: () =>
      import('./pages/centers/centers.component').then(
        (m) => m.CentersComponent,
      ),
  },
  {
    path: 'centros/:id',
    loadComponent: () =>
      import('./pages/centers/center-detail/center-detail.component').then(
        (m) => m.CenterDetailComponent,
      ),
  },
  {
    path: 'atividades',
    loadComponent: () =>
      import('./pages/activities/activities.component').then(
        (m) => m.ActivitiesComponent,
      ),
  },
  {
    path: 'atividades/:id',
    loadComponent: () =>
      import(
        './pages/activities/activity-detail/activity-detail.component'
      ).then((m) => m.ActivityDetailComponent),
  },
  {
    path: 'grade-de-horarios',
    loadComponent: () =>
      import('./pages/horarios/horarios.component').then(
        (m) => m.HorariosComponent,
      ),
  },
  {
    path: 'novidades',
    loadComponent: () =>
      import('./pages/news/news.component').then((m) => m.NewsComponent),
  },
  {
    path: 'contato',
    loadComponent: () =>
      import('./pages/contact/contact.component').then(
        (m) => m.ContactComponent,
      ),
  },
  {
    path: 'quero-ajudar',
    loadComponent: () =>
      import('./pages/help/help.component').then((m) => m.HelpComponent),
  },
  {
    path: '**',
    loadComponent: () =>
      import('./pages/not-found/not-found.component').then(
        (m) => m.NotFoundComponent,
      ),
  },
];
