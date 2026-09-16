import { Component, inject } from '@angular/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import { TranslatePipe } from '@ngx-translate/core';
import { SectionTitleComponent } from '../../@common/components/section-title/section-title.component';
import { FigmaProject } from '../../@common/types';
import { FIGMA_PROJECTS } from './figma-projects';

interface EmbeddedFigmaProject extends FigmaProject {
  readonly embedUrl: SafeResourceUrl;
}

@Component({
  selector: 'app-portfolio-figma',
  templateUrl: './portfolio-figma.html',
  styleUrl: './portfolio-figma.scss',
  imports: [SectionTitleComponent, TranslatePipe],
})
export class PortfolioFigma {
  private readonly sanitizer = inject(DomSanitizer);

  protected readonly embeddedProjects: EmbeddedFigmaProject[] = FIGMA_PROJECTS.map((project) => ({
    ...project,
    embedUrl: this.sanitizer.bypassSecurityTrustResourceUrl(
      `https://www.figma.com/embed?embed_host=share&url=${encodeURIComponent(project.fileUrl)}`,
    ),
  }));
}
