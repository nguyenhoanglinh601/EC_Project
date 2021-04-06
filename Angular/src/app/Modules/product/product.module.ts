import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductRoutingModule } from './product-routing.module';

import { HomeComponent } from './Page/home/home.component';

import { HeaderComponent } from '../../Share/Layouts/header/header.component';
import { FooterComponent } from '../../Share/Layouts/footer/footer.component';
import { ListBrandComponent } from './Page/home/sub-component/list-brand/list-brand.component';
import { ListBestSaleComponent } from './Page/home/sub-component/list-best-sale/list-best-sale.component';
import { ListProductComponent } from './Page/home/sub-component/list-product/list-product.component';
import { AdvertisementComponent } from './Page/home/sub-component/advertisement/advertisement.component';

import {CarouselModule} from 'primeng/carousel';
import {ButtonModule} from 'primeng/button';

import { MatCardModule } from '@angular/material/card';
import { ProductDetailComponent } from './Page/product-detail/product-detail.component';
import { GeneralInformationComponent } from './Page/product-detail/sub-component/general-information/general-information.component';
import { PolicyServiceComponent } from './Page/product-detail/sub-component/policy-service/policy-service.component';
import { SimilarProductComponent } from './Page/product-detail/sub-component/similar-product/similar-product.component';
import { DetailProductComponent } from './Page/product-detail/sub-component/detail-product/detail-product.component';
import { SameBrandComponent } from './Page/product-detail/sub-component/same-brand/same-brand.component';

@NgModule({
  declarations: [
    HomeComponent,
    HeaderComponent,
    FooterComponent,
    ListBrandComponent,
    ListBestSaleComponent,
    ListProductComponent,
    AdvertisementComponent,
    ProductDetailComponent,
    GeneralInformationComponent,
    PolicyServiceComponent,
    SimilarProductComponent,
    DetailProductComponent,
    SameBrandComponent
  ],
  imports: [
    CommonModule,
    ProductRoutingModule,
    CarouselModule,
    ButtonModule,
    MatCardModule
  ]
})
export class ProductModule { }
