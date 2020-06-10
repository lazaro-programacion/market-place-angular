import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NotFoundComponentComponent } from './components/not-found-component/not-found-component.component';
import { ServicesListComponent } from './components/services-list/services-list.component';
import { SearchComponent } from './components/search/search.component';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: ServicesListComponent },
  { path: 'servicios', component: ServicesListComponent },
  { path: ':page', component: NotFoundComponentComponent },

  
  {path: 'buscar/:search', component: SearchComponent},
  {path: 'buscar', component: SearchComponent},
 
  { path: '**', component: NotFoundComponentComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
