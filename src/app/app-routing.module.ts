import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { LoginComponent } from './login/login.component';

import {IdeasComponent} from './ideas/ideas.component';
import {ListeDesIdeesComponent} from './liste-des-idees/liste-des-idees.component';
import {VisitorsBookComponent} from './comments/visitors-book/visitors-book.component';

export const routes: Routes = [
  { path: 'home', component: HomeComponent },
  // { path: 'VisitorsBook', component: VisitorsBookComponent },
  { path: 'login', component: LoginComponent },
  { path: '', component: HomeComponent },
  { path: 'ideas', component: IdeasComponent },
  { path: 'listeDesIdees', component: ListeDesIdeesComponent },
  // { path: 'Ideas', loadChildren: './ideas/ideas.module#IdeasModule' },
  // { path: 'Scenes', loadChildren: './scenes/scenes.module#ScenesModule' },
  { path: 'book', loadChildren: './comments/comments.module#CommentsModule' },
  //{ path: 'book1', loadChildren: '/app/comments/comments.module#CommentsModule' },
  { path: '**', component: PageNotFoundComponent}

  // { path: '', redirectTo: 'contact', pathMatch: 'full'},
  // { path: 'items', loadChildren: 'app/items/items.module#ItemsModule' },
  // { path: 'customers', loadChildren: 'app/customers/customers.module#CustomersModule' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
