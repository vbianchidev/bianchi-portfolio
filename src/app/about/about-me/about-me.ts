import { Component } from '@angular/core';
import { TranslatePipe } from '@ngx-translate/core';
import { SectionTitleComponent } from '../../@common/components/section-title/section-title.component';

@Component({
  selector: 'app-about-me',
  templateUrl: './about-me.html',
  imports: [TranslatePipe, SectionTitleComponent],
  styleUrl: './about-me.scss',
})
export class AboutMe {
  public downloadResume(): void {
    const link = document.createElement('a');
    link.href = 'vitor-bianchi-resume.pdf';
    link.download = 'vitor-bianchi-resume.pdf';
    link.click();
  }
}
