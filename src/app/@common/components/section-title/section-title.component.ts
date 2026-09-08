import { Component, input, InputSignal } from '@angular/core';

@Component({
  selector: 'app-section-title',
  templateUrl: './section-title.component.html',
  styleUrls: ['./section-title.component.scss'],
})
export class SectionTitleComponent {
  public readonly title: InputSignal<string> = input.required<string>();
  public readonly sectionName: InputSignal<string> = input.required<string>();
}
