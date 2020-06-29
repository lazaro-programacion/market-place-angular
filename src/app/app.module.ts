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
import { AngularFileUploaderModule } from 'angular-file-uploader';


import { UsersService } from './services/users.service';
import { EmailSupplierService } from './services/email-supplier.service';

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
import {SplitButtonModule} from 'primeng/splitbutton';

import { ScrollingModule } from '@angular/cdk/scrolling';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { SupplierviewComponent } from './components/supplierview/supplierview.component';

import { PasswordForgotComponent } from './components/password-forgot/password-forgot.component';
import { ContactUsComponent } from './components/contact-us/contact-us.component';
import { FormVendorComponent } from './components/form-vendor/form-vendor.component';

import { SupplierAddComponent } from './components/supplier-add/supplier-add.component';
import { SupplierEditComponent } from './components/supplier-edit/supplier-edit.component';
import { ShowSuppliersComponent } from './components/show-suppliers/show-suppliers.component';
import { CarritoComponent } from './components/carrito/carrito.component';
import { ActiveUser1Pipe } from './pipes/active-user1.pipe';
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
    PasswordForgotComponent,
    SupplierviewComponent,
    ContactUsComponent,
    FormVendorComponent,
    SupplierAddComponent,
    SupplierEditComponent,
    ShowSuppliersComponent,
    CarritoComponent,
    ActiveUser1Pipe
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
    AngularFileUploaderModule,
    SplitButtonModule,
    ScrollingModule

  ],
  providers: [UsersService, EmailSupplierService],
  bootstrap: [AppComponent]
})
export class AppModule { }
