import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';

import { EditarPerfilComponent } from './components/editar-perfil/editar-perfil.component';
import { FooterComponent } from './components/footer/footer.component';
import { FormHomeComponent } from './components/form-home/form-home.component';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { NgbdCarouselPauseComponent } from 'src/app/components/ngbd-carousel-pause/ngbd-carousel-pause.component';
import { NotFoundComponentComponent } from './components/not-found-component/not-found-component.component';
import { RegisterComponent } from './components/register/register.component';
import { SearchComponent } from './components/search/search.component';
import { ServiceAddComponent } from './components/service-add/service-add.component';
import { ServicesListComponent } from './components/services-list/services-list.component';
import { SuppliersListComponent } from './components/suppliers-list/suppliers-list.component';
import { UsersListComponent } from './components/users-list/users-list.component';

import { UsersService } from './services/users.service';

import { ButtonModule } from 'primeng/button';
import { CardModule } from 'primeng/card';
import { ContextMenuModule } from 'primeng/contextmenu';
import { DataViewModule } from 'primeng/dataview';
import { DialogModule } from 'primeng/dialog';
import { DropdownModule } from 'primeng/dropdown';
import { InputTextModule } from 'primeng/inputtext';
import { ListboxModule } from 'primeng/listbox';
import { GalleriaModule } from 'primeng/galleria';
import { PanelMenuModule } from 'primeng/panelmenu';
import { PanelModule } from 'primeng/panel';
import { SidebarModule } from 'primeng/sidebar';
import { TabMenuModule } from 'primeng/tabmenu';


import { NgbModule } from '@ng-bootstrap/ng-bootstrap';


@NgModule({
  declarations: [
    AppComponent,
    EditarPerfilComponent,
    FooterComponent,
    FormHomeComponent,
    HomeComponent,
    LoginComponent,
    NavbarComponent,
    NotFoundComponentComponent,
    RegisterComponent,
    SearchComponent,
    ServicesListComponent,
    ServiceAddComponent,
    SuppliersListComponent,
    UsersListComponent,
    NgbdCarouselPauseComponent,
  ],
  imports: [
    AppRoutingModule,
    BrowserAnimationsModule,
    BrowserModule,
    ButtonModule,
    CardModule,
    ContextMenuModule,
    DataViewModule,
    DialogModule,
    DropdownModule,
    FormsModule,
    GalleriaModule,
    HttpClientModule,
    InputTextModule,
    NgbModule,
    ListboxModule,
    PanelModule,
    TabMenuModule,
    SidebarModule,
    PanelMenuModule,
  ],
  providers: [UsersService],
  bootstrap: [AppComponent]
})
export class AppModule { }
