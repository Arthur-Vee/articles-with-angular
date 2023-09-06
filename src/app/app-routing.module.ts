import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ArticlePageComponent } from './article-page/article-page.component';
import { ArticleCardComponent } from './article-card/article-card.component';

const routes: Routes = [
  { path: 'articles', component: ArticleCardComponent },
  { path: 'articles/:id', component: ArticlePageComponent },
  { path: '', redirectTo: '/articles', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
