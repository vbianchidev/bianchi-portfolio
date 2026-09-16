import { Routes } from '@angular/router';
import { DefaultLayout } from './@common/layout/default-layout';
import { Home } from './home/home';

export const routes: Routes = [
  {
    path: '',
    component: DefaultLayout,
    children: [
      { path: '', component: Home },
      {
        path: 'about',
        loadComponent: () => import('./about/about').then((module) => module.About),
      },
      {
        path: 'portfolio',
        loadComponent: () => import('./portfolio/portfolio').then((module) => module.Portfolio),
      },
    ],
  },
  { path: '**', redirectTo: '' },
];
