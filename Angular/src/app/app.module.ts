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
import { ProductDetailComponent } from './Modules/product/Page/product-detail/product-detail.component';
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
import { ListBrandComponent } from './Modules/product/Page/home/sub-component/list-brand/list-brand.component';
import { ListBestSaleComponent } from './Modules/product/Page/home/sub-component/list-best-sale/list-best-sale.component';
import { ListProductComponent } from './Modules/product/Page/home/sub-component/list-product/list-product.component';
import { AdvertisementComponent } from './Modules/product/Page/home/sub-component/advertisement/advertisement.component';
import { GeneralInformationComponent } from './Modules/product/Page/product-detail/sub-component/general-information/general-information.component';
import { PolicyServiceComponent } from './Modules/product/Page/product-detail/sub-component/policy-service/policy-service.component';
import { SimilarProductComponent } from './Modules/product/Page/product-detail/sub-component/similar-product/similar-product.component';
import { DetailProductComponent } from './Modules/product/Page/product-detail/sub-component/detail-product/detail-product.component';
import { SameBrandComponent } from './Modules/product/Page/product-detail/sub-component/same-brand/same-brand.component';
import { SpecificationTableComponent } from 'src/app/Modules/product/Page/product-detail/sub-component/detail-product/sub-component/specification-table/specification-table.component';
import { SpecificationTableModalComponent } from './Modules/product/Page/product-detail/sub-component/detail-product/sub-component/specification-table-modal/specification-table-modal.component';
import { FilterComponent } from 'src/app/Modules/product/Page/filter/filter.component';
import { FilterContentComponent } from 'src/app/Modules/product/Page/filter/sub-component/filter-content/filter-content.component';
import { ResultsComponent } from 'src/app/Modules/product/Page/filter/sub-component/results/results.component';

import {CarouselModule} from 'primeng/carousel';
import {ButtonModule} from 'primeng/button';
import {RippleModule} from 'primeng/ripple';

import { MatCardModule } from '@angular/material/card';


@NgModule({
  declarations: [
    AppComponent,
    TestComponent,
    ButtonFlatMaterialComponent,
    TestLayoutComponent,
    HeaderComponent,
    HomeComponent,
    ProductDetailComponent,
    MenuCategoriesComponent,
    MenuButtonComponent,
    SearchBarComponent,
    FooterComponent,
    ListBrandComponent,
    ListBestSaleComponent,
    ListProductComponent,
    AdvertisementComponent,
    GeneralInformationComponent,
    PolicyServiceComponent,
    SimilarProductComponent,
    DetailProductComponent,
    SameBrandComponent,
    SpecificationTableComponent,
    SpecificationTableModalComponent,
    FilterComponent,
    FilterContentComponent,
    ResultsComponent
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
    CarouselModule,
    ButtonModule,
    MatCardModule,
    RippleModule,
    
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
