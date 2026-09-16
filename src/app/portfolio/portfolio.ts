import { Component } from '@angular/core';
import { PortfolioDisplay } from './portfolio-display/portfolio-display';
import { PortfolioFigma } from './portfolio-figma/portfolio-figma';
import { PortfolioGithub } from './portfolio-github/portfolio-github';

@Component({
  templateUrl: './portfolio.html',
  imports: [PortfolioDisplay, PortfolioGithub, PortfolioFigma],
})
export class Portfolio {}
