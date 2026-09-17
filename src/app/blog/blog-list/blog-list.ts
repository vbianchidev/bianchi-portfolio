import { Component, DestroyRef, inject, signal } from '@angular/core';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { RouterLink } from '@angular/router';
import { BuiTypewriter } from '@bianchi-ui';
import { TranslatePipe } from '@ngx-translate/core';
import { BuiDatePipe } from '../../@common/pipe/bui-date.pipe';
import { BlogService } from '../../@common/services/blog.service';
import { BlogPost } from '../../@common/types';

@Component({
  templateUrl: './blog-list.html',
  styleUrl: './blog-list.scss',
  imports: [BuiTypewriter, BuiDatePipe, RouterLink, TranslatePipe],
})
export class BlogList {
  private readonly blogService = inject(BlogService);
  private readonly destroyRef = inject(DestroyRef);

  protected readonly posts = signal<ReadonlyArray<BlogPost>>([]);
  protected readonly loading = signal(true);
  protected readonly hasError = signal(false);

  public constructor() {
    this.blogService
      .getPosts()
      .pipe(takeUntilDestroyed(this.destroyRef))
      .subscribe({
        next: (posts) => {
          this.posts.set(posts);
          this.loading.set(false);
        },
        error: () => {
          this.hasError.set(true);
          this.loading.set(false);
        },
      });
  }
}
