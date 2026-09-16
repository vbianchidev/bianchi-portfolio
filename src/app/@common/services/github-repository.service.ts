import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { GithubRepository } from '../types';

@Injectable({ providedIn: 'root' })
export class GithubRepositoryService {
  private readonly http = inject(HttpClient);
  private readonly apiUrl = 'https://api.github.com/users/vbianchidev/repos?sort=updated&per_page=100';

  public getPublicRepositories(): Observable<ReadonlyArray<GithubRepository>> {
    return this.http.get<ReadonlyArray<GithubRepository>>(this.apiUrl).pipe(
      map((repositories) => repositories.filter((repository) => !repository.fork)),
    );
  }
}
