import { Routes } from '@angular/router';
import { DefaultLayout } from './@common/layout/default-layout';
import { About } from './about/about';
import { BlogList } from './blog/blog-list/blog-list';
import { BlogPost } from './blog/blog-post/blog-post';
import { Home } from './home/home';
import { Portfolio } from './portfolio/portfolio';

export const routes: Routes = [
  {
    path: '',
    component: DefaultLayout,
    children: [
      { path: '', component: Home },
      {
        path: 'about',
        component: About,
      },
      {
        path: 'portfolio',
        component: Portfolio,
      },
      {
        path: 'blog',
        component: BlogList,
      },
      {
        path: 'blog/:id',
        component: BlogPost,
      },
    ],
  },
  { path: '**', redirectTo: '' },
];
