import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdministratorRoutingModule } from './administrator-routing.module';
import { LoginComponent } from './Page/login/login.component';

import { HeaderAdminComponent } from 'src/app/Share/Layouts/header-admin/header-admin.component';
import { FooterAdminComponent } from 'src/app/Share/Layouts/footer-admin/footer-admin.component';

@NgModule({
  declarations: [LoginComponent],
  imports: [
    CommonModule,
    AdministratorRoutingModule,
    HeaderAdminComponent,
    FooterAdminComponent
  ]
})
export class AdministratorModule { }
