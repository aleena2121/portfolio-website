import { PortfolioComponent } from './portfolio/portfolio.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContactComponent } from './contact/contact.component';
import { ReactiveFormsModule } from '@angular/forms';

export const routes: Routes = [
    { path: '', component: PortfolioComponent },
    { path: 'portfolio', component: PortfolioComponent },
    { path: 'contact', component: ContactComponent }
];

@NgModule({
    imports: [RouterModule.forRoot(routes), ReactiveFormsModule],
    exports: [RouterModule]
  })
export class AppRoutingModule { }