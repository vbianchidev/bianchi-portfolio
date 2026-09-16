import { Injectable } from '@angular/core';
import hljs from 'highlight.js';
import { Marked, Token } from 'marked';

@Injectable({ providedIn: 'root' })
export class MarkdownRendererService {
  private readonly marked = new Marked({
    breaks: true,
    gfm: true,
    walkTokens: (token: Token): void => this.highlightCode(token),
  });

  public render(markdown: string): string {
    return this.marked.parse(markdown, { async: false }) as string;
  }

  private highlightCode(token: Token): void {
    if (token.type !== 'code') {
      return;
    }

    const language = token.lang?.split(' ')[0];
    token.text =
      language && hljs.getLanguage(language)
        ? hljs.highlight(token.text, { language, ignoreIllegals: true }).value
        : hljs.highlightAuto(token.text).value;
    token.escaped = true;
  }
}
