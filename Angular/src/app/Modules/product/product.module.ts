import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductRoutingModule } from './product-routing.module';
import { HomeComponent } from './Page/home/home.component';

import { HeaderComponent } from '../../Share/Layouts/header/header.component';
import { FooterComponent } from '../../Share/Layouts/footer/footer.component';

@NgModule({
  declarations: [
    HomeComponent,
    HeaderComponent,
    FooterComponent
  ],
  imports: [
    CommonModule,
    ProductRoutingModule,
  ]
})
export class ProductModule { }
