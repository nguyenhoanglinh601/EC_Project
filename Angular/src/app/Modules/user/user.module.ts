import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserRoutingModule } from './user-routing.module';
import { CustomerAuthenticationComponent } from './customer-authentication/customer-authentication.component';

import { HeaderComponent } from 'src/app/Share/Layouts/header/header.component';
import { FooterComponent } from 'src/app/Share/Layouts/footer/footer.component';

import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';

import { SearchBarComponent } from 'src/app/Share/Layouts/header/Sub-components/search-bar/search-bar/search-bar.component';
import { MenuCategoriesComponent } from 'src/app/Share/Layouts/header/Sub-components/menu-categories/menu-categories.component';
import { MatMenuModule } from '@angular/material/menu';

@NgModule({
  declarations: [
    CustomerAuthenticationComponent,
    HeaderComponent,
    FooterComponent,
    SearchBarComponent,
    MenuCategoriesComponent
  ],
  imports: [
    CommonModule,
    UserRoutingModule,
    MatInputModule,
    MatFormFieldModule,
    MatMenuModule
  ]
})
export class UserModule { }
