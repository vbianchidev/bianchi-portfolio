import { Component, inject } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  template: `<router-outlet />`,
})
export class App {
  private readonly translate = inject(TranslateService);

  constructor() {
    this.translate.addLangs(['pt', 'en', 'es']);
  }
}
