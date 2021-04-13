import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { MenuCategoriesComponent } from './header/Sub-components/menu-categories/menu-categories.component';
import { SearchBarComponent } from './header/Sub-components/search-bar/search-bar/search-bar.component';
import { MatMenuModule } from '@angular/material/menu';
import { ProductRoutingModule } from 'src/app/Modules/product/product-routing.module';

@NgModule({
    declarations: [
      HeaderComponent,
      MenuCategoriesComponent,
      SearchBarComponent
    ],
    imports: [
      CommonModule,
      MatMenuModule,
      ProductRoutingModule
    ]
  })
  export class LayoutModule { }