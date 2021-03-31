import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TestComponent } from './Modules/test-module/test/test.component';
import { TestModuleRoutingModule } from './Modules/test-module/test-module-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


import { ButtonFlatMaterialComponent } from './Share/Materials/button-flat-material/button-flat-material.component';
import { MatButtonModule } from '@angular/material/button';
import { TestLayoutComponent } from './Share/Layouts/test-layout/test-layout.component';

import {ToggleButtonModule} from 'primeng/togglebutton';

@NgModule({
  declarations: [
    AppComponent,
    TestComponent,
    ButtonFlatMaterialComponent,
    TestLayoutComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatButtonModule,
    TestModuleRoutingModule,
    AppRoutingModule,
    HttpClientModule,
    ToggleButtonModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
