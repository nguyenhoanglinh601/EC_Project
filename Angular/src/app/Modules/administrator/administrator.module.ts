import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdministratorRoutingModule } from './administrator-routing.module';
import { LoginComponent } from './Page/login/login.component';

import { HeaderAdminComponent } from 'src/app/Share/Layouts/header-admin/header-admin.component';
import { FooterAdminComponent } from 'src/app/Share/Layouts/footer-admin/footer-admin.component';
import { MatFormFieldModule } from '@angular/material/form-field';
import { SidebarModule } from 'primeng/sidebar';
import { ButtonModule } from 'primeng/button';

@NgModule({
  declarations: [
    // LoginComponent,
    HeaderAdminComponent,
    FooterAdminComponent],
  imports: [
    CommonModule,
    AdministratorRoutingModule,
    MatFormFieldModule,
    SidebarModule,
    ButtonModule
  ]
})
export class AdministratorModule { }
