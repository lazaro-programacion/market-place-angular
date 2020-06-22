import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NotFoundComponentComponent } from './components/not-found-component/not-found-component.component';
import { ServicesListComponent } from './components/services-list/services-list.component';
import { ServiceAddComponent } from './components/service-add/service-add.component';
import { HomeComponent } from './components/home/home.component';
import { SearchComponent } from './components/search/search.component';
import { UsersListComponent } from './components/users-list/users-list.component';
import { EditarPerfilComponent } from './components/editar-perfil/editar-perfil.component';

import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { SuppliersListComponent } from './components/suppliers-list/suppliers-list.component';
import { Supplier } from './models/supplier';
import { SupplierviewComponent } from './components/supplierview/supplierview.component';


const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'lista', component: UsersListComponent },
  { path: 'service', component: ServicesListComponent },
  { path: 'supplier', component: SuppliersListComponent },
  { path: 'service/add', component: ServiceAddComponent },
  { path: 'login', component: LoginComponent },
  { path: 'registro', component: RegisterComponent },
  { path: 'buscador/:search', component: SearchComponent },
  { path: 'buscador/', component: SearchComponent },
  { path: 'editar-perfil', component: EditarPerfilComponent },
  { path: 'editar-perfil/:id', component: EditarPerfilComponent },
  { path: 'supplier/view/:id', component: SupplierviewComponent},
  { path: ':page', component: NotFoundComponentComponent },
  { path: '**', component: NotFoundComponentComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
