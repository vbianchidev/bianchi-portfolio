import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavbarComponent } from '../components';

@Component({
  imports: [NavbarComponent, RouterOutlet],
  template: `
    <app-navbar />

    <main class="d-flex flex-col flex-1 items-center justify-center">
      <router-outlet />
    </main>
  `,
  styles: [
    `
      :host {
        display: flex;
        flex-direction: column;
        min-height: 100dvh;

        main {
          contain: layout;
        }
      }
    `,
  ],
})
export class DefaultLayout {}
