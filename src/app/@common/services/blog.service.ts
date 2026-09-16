import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { map, Observable, switchMap, throwError } from 'rxjs';
import { BlogPost } from '../types';

@Injectable({ providedIn: 'root' })
export class BlogService {
  private readonly http = inject(HttpClient);

  public getPosts(): Observable<ReadonlyArray<BlogPost>> {
    return this.http.get<ReadonlyArray<BlogPost>>('/blog/posts.json');
  }

  public getPostContent(post: BlogPost): Observable<string> {
    return this.http.get(`/blog/${post.file}`, { responseType: 'text' });
  }

  public getPostById(id: string): Observable<BlogPost> {
    return this.getPosts().pipe(
      map((posts) => posts.find((post) => post.id === id)),
      switchMap((post) => (post ? [post] : throwError(() => new Error('Post not found')))),
    );
  }
}
