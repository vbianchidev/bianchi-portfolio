import { Component, inject, OnInit, signal } from '@angular/core';
import { TranslatePipe, TranslateService } from '@ngx-translate/core';
import { SectionTitleComponent } from '../../@common/components/section-title/section-title.component';

@Component({
  selector: 'app-about-skills',
  templateUrl: './about-skills.html',
  styleUrl: './about-skills.scss',
  imports: [SectionTitleComponent, TranslatePipe],
})
export class AboutSkills implements OnInit {
  private translate = inject(TranslateService);

  protected skills = signal<string[]>([]);

  ngOnInit(): void {
    this.translate.get('ABOUT-SKILLS.SKILLS').subscribe((skills: string[]) => {
      this.skills.set(skills);
    });
  }
}
