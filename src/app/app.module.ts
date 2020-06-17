import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';

import { NavbarComponent } from './components/navbar/navbar.component';
import { ServicesListComponent } from './components/services-list/services-list.component';
import { SuppliersListComponent } from './components/suppliers-list/suppliers-list.component';
import { HomeComponent } from './components/home/home.component';
import { SearchComponent } from './components/search/search.component';
import { NotFoundComponentComponent } from './components/not-found-component/not-found-component.component';
import { FooterComponent } from './components/footer/footer.component';
import { FormHomeComponent } from './components/form-home/form-home.component';
import { UsersListComponent } from './components/users-list/users-list.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { EditarPerfilComponent } from './components/editar-perfil/editar-perfil.component';
import { ServiceAddComponent } from './components/service-add/service-add.component';

import { UsersService } from './services/users.service';

import {ButtonModule} from 'primeng/button';
import {CardModule} from 'primeng/card';
import {CarouselModule} from 'primeng/carousel';
import {ContextMenuModule} from 'primeng/contextmenu';
import {DataViewModule} from 'primeng/dataview';
import {DialogModule} from 'primeng/dialog';
import {DropdownModule} from 'primeng/dropdown';
import {InputTextModule} from 'primeng/inputtext';
import {ListboxModule} from 'primeng/listbox';
import {GalleriaModule} from 'primeng/galleria';
import {PanelMenuModule} from 'primeng/panelmenu';
import {PanelModule} from 'primeng/panel';
import {SidebarModule} from 'primeng/sidebar';
import {TabMenuModule} from 'primeng/tabmenu';


import { NgbModule } from '@ng-bootstrap/ng-bootstrap';


@NgModule({
  declarations: [
    AppComponent,
    ServicesListComponent,
    SuppliersListComponent,
    SearchComponent,
    HomeComponent,
    NavbarComponent,
    NotFoundComponentComponent,
    LoginComponent,
    RegisterComponent,
    FooterComponent,
    FormHomeComponent,
    UsersListComponent,
    EditarPerfilComponent,
    ServiceAddComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    CardModule,
    ButtonModule,
    DataViewModule,
    PanelModule,
    DialogModule,
    InputTextModule,
    ContextMenuModule,
    TabMenuModule,
    SidebarModule,
    PanelMenuModule,
    NgbModule,
    ListboxModule,
    HttpClientModule,
    CarouselModule,
    GalleriaModule,
    DropdownModule,

  ],
  providers: [UsersService],
  bootstrap: [AppComponent]
})
export class AppModule { }
