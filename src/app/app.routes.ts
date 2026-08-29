import { Routes } from '@angular/router';
import { DefaultLayout } from './@common/layout/default-layout';
import { About } from './about/about';
import { Home } from './home/home';

export const routes: Routes = [
  {
    path: '',
    component: DefaultLayout,
    children: [
      { path: '', component: Home },
      { path: 'about', component: About },
    ],
  },
  { path: '**', redirectTo: '' },
];
