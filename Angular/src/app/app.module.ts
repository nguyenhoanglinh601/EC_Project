import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { TestComponent } from './Modules/test-module/test/test.component';
import { TestModuleRoutingModule } from './Modules/test-module/test-module-routing.module';
import { HomeComponent } from './Modules/product/Page/home/home.component';
import { ProductRoutingModule } from './Modules/product/product-routing.module';

import { TestLayoutComponent } from './Share/Layouts/test-layout/test-layout.component';
import { HeaderComponent } from './Share/Layouts/header/header.component';

import { ButtonFlatMaterialComponent } from './Share/Materials/button-flat-material/button-flat-material.component';
import { MatButtonModule } from '@angular/material/button';
import {ToggleButtonModule} from 'primeng/togglebutton';
import {MatMenuModule} from '@angular/material/menu';

import { from } from 'rxjs';
import { MenuCategoriesComponent } from './Share/Layouts/header/Sub-components/menu-categories/menu-categories.component';
import { MenuButtonComponent } from './Share/Materials/menu-button/menu-button/menu-button.component';
import { SearchBarComponent } from './Share/Layouts/header/Sub-components/search-bar/search-bar/search-bar.component';
import { FooterComponent } from './Share/Layouts/footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    TestComponent,
    ButtonFlatMaterialComponent,
    TestLayoutComponent,
    HeaderComponent,
    HomeComponent,
    MenuCategoriesComponent,
    MenuButtonComponent,
    SearchBarComponent,
    FooterComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatButtonModule,
    TestModuleRoutingModule,  
    HttpClientModule,
    ToggleButtonModule,
    ProductRoutingModule,
    FontAwesomeModule,
    MatButtonModule,
    MatMenuModule,

    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
