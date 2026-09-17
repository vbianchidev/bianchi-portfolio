import { Component, DestroyRef, inject, signal, ViewEncapsulation } from '@angular/core';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { TranslatePipe } from '@ngx-translate/core';
import { forkJoin, map, of, switchMap, tap } from 'rxjs';
import { BuiDatePipe } from '../../@common/pipe/bui-date.pipe';
import { BlogService } from '../../@common/services/blog.service';
import { MarkdownRendererService } from '../../@common/services/markdown-renderer.service';
import { BlogPost as BlogPostModel } from '../../@common/types';

@Component({
  templateUrl: './blog-post.html',
  styleUrl: './blog-post.scss',
  imports: [BuiDatePipe, RouterLink, TranslatePipe],
  encapsulation: ViewEncapsulation.None,
})
export class BlogPost {
  private readonly route = inject(ActivatedRoute);
  private readonly blogService = inject(BlogService);
  private readonly markdownRenderer = inject(MarkdownRendererService);
  private readonly destroyRef = inject(DestroyRef);

  protected readonly post = signal<BlogPostModel | null>(null);
  protected readonly content = signal('');
  protected readonly loading = signal(true);
  protected readonly hasError = signal(false);

  public constructor() {
    this.route.paramMap
      .pipe(
        map((parameters) => parameters.get('id')),
        tap(() => {
          this.loading.set(true);
          this.hasError.set(false);
        }),
        switchMap((id) => this.blogService.getPostById(id ?? '')),
        switchMap((post) =>
          forkJoin({
            post: of(post),
            markdown: this.blogService.getPostContent(post),
          }),
        ),
        takeUntilDestroyed(this.destroyRef),
      )
      .subscribe({
        next: ({ post, markdown }) => {
          this.post.set(post);
          this.content.set(this.markdownRenderer.render(markdown));
          this.loading.set(false);
        },
        error: () => {
          this.hasError.set(true);
          this.loading.set(false);
        },
      });
  }
}
