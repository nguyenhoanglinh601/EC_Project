import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TestModuleRoutingModule } from './test-module-routing.module';
import { TestComponent } from './test/test.component';

import { ButtonFlatMaterialComponent } from '../../Share/Materials/button-flat-material/button-flat-material.component';
import { TestLayoutComponent } from '../../Share/Layouts/test-layout/test-layout.component';

import {ToggleButtonModule} from 'primeng/togglebutton';

@NgModule({
  declarations: [
    TestComponent,
    ButtonFlatMaterialComponent,
    TestLayoutComponent,
  ],
  imports: [
    CommonModule,
    TestModuleRoutingModule,
    ToggleButtonModule
  ]
})
export class TestModuleModule { }
