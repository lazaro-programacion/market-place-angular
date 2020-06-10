import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NotFoundComponentComponent } from './components/not-found-component/not-found-component.component';
import { ServicesListComponent } from './components/services-list/services-list.component';
import { HomeComponent } from './components/home/home.component';
const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'service', component: ServicesListComponent },
  { path: ':page', component: NotFoundComponentComponent },
  { path: '**', component: NotFoundComponentComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
