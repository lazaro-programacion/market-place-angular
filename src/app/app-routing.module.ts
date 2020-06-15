import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NotFoundComponentComponent } from './components/not-found-component/not-found-component.component';
import { ServicesListComponent } from './components/services-list/services-list.component';
import { HomeComponent } from './components/home/home.component';
import { SearchComponent } from './components/search/search.component';
import { UsersListComponent } from './components/users-list/users-list.component';
// import { BuscadorComponent } from './components/buscador/buscador.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';


const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'lista', component: UsersListComponent },
  { path: 'service', component: ServicesListComponent },
  { path: 'login', component: LoginComponent},
  { path: 'registro', component: RegisterComponent},
  {path: 'buscador/:search', component: SearchComponent},
  // {path: 'buscador', component: BuscadorComponent},
  { path: ':page', component: NotFoundComponentComponent },
  {path: 'buscar/:search', component: SearchComponent},

/*   {path: 'buscar', component: SearchComponent},
 */  { path: '**', component: NotFoundComponentComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
