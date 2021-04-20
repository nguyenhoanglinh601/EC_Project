import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserRoutingModule } from './user-routing.module';
import { CustomerAuthenticationComponent } from './customer-authentication/customer-authentication.component';

import { HeaderComponent } from 'src/app/Share/Layouts/header/header.component';
import { FooterComponent } from 'src/app/Share/Layouts/footer/footer.component';

import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';

@NgModule({
  declarations: [
    CustomerAuthenticationComponent,
    HeaderComponent,
    FooterComponent
  ],
  imports: [
    CommonModule,
    UserRoutingModule,
    MatInputModule,
    MatFormFieldModule
  ]
})
export class UserModule { }
