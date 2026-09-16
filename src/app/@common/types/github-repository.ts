export interface GithubRepository {
  readonly id: number;
  readonly name: string;
  readonly description: string | null;
  readonly html_url: string;
  readonly homepage: string | null;
  readonly language: string | null;
  readonly stargazers_count: number;
  readonly fork: boolean;
}
