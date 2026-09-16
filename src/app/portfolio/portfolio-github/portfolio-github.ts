import { Component, inject, signal } from '@angular/core';
import { TranslatePipe } from '@ngx-translate/core';
import { SectionTitleComponent } from '../../@common/components/section-title/section-title.component';
import { GithubRepositoryService } from '../../@common/services/github-repository.service';
import { GithubRepository } from '../../@common/types';

@Component({
  selector: 'app-portfolio-github',
  templateUrl: './portfolio-github.html',
  styleUrl: './portfolio-github.scss',
  imports: [SectionTitleComponent, TranslatePipe],
})
export class PortfolioGithub {
  private readonly githubRepositoryService = inject(GithubRepositoryService);

  protected readonly repositories = signal<ReadonlyArray<GithubRepository>>([]);
  protected readonly loading = signal(true);
  protected readonly hasError = signal(false);

  public constructor() {
    this.githubRepositoryService.getPublicRepositories().subscribe({
      next: (repositories) => this.repositories.set(repositories.slice(0, 4)),
      error: () => {
        this.hasError.set(true);
        this.loading.set(false);
      },
      complete: () => this.loading.set(false),
    });
  }
}
