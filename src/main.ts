import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app/app.component';
import { PortfolioComponent } from './app/portfolio/portfolio.component';

const routes: Routes = [
  { path: '', component: PortfolioComponent }
];

bootstrapApplication(AppComponent, appConfig)
  .catch((err) => console.error(err));
