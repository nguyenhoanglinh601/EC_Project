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
import {RippleModule} from 'primeng/ripple';

import { MatCardModule } from '@angular/material/card';
import { ProductDetailComponent } from './Page/product-detail/product-detail.component';
import { GeneralInformationComponent } from './Page/product-detail/sub-component/general-information/general-information.component';
import { PolicyServiceComponent } from './Page/product-detail/sub-component/policy-service/policy-service.component';
import { SimilarProductComponent } from './Page/product-detail/sub-component/similar-product/similar-product.component';
import { DetailProductComponent } from './Page/product-detail/sub-component/detail-product/detail-product.component';
import { SameBrandComponent } from './Page/product-detail/sub-component/same-brand/same-brand.component';
import { SpecificationTableComponent } from './Page/product-detail/sub-component/detail-product/sub-component/specification-table/specification-table.component';
import { SpecificationTableModalComponent } from './Page/product-detail/sub-component/detail-product/sub-component/specification-table-modal/specification-table-modal.component';
import { FilterComponent } from './Page/filter/filter.component';
import { FilterContentComponent } from './Page/filter/sub-component/filter-content/filter-content.component';
import { ResultsComponent } from './Page/filter/sub-component/results/results.component';
import { ManagementComponent } from './Page/management/management.component';
import { HeaderAdminComponent } from 'src/app/Share/Layouts/header-admin/header-admin.component';
import { SidebarModule } from 'primeng/sidebar';
import {PaginatorModule} from 'primeng/paginator';
import { AddProductComponent } from './Page/management/sub-component/add-product/add-product.component';
import { EditProductComponent } from './Page/management/sub-component/edit-product/edit-product.component';
import { BrandManagementComponent } from './Page/management/sub-component/brand-management/brand-management.component';

import { MenuCategoriesComponent } from 'src/app/Share/Layouts/header/Sub-components/menu-categories/menu-categories.component';
import { SearchBarComponent } from 'src/app/Share/Layouts/header/Sub-components/search-bar/search-bar/search-bar.component';
import { MatMenuModule } from '@angular/material/menu';
import { IntroduceComponent } from './Page/home/sub-component/introduce/introduce.component';
import { FeedbackComponent } from './Page/home/sub-component/feedback/feedback.component';
import { GeneralCarouselComponent } from './Page/home/sub-component/general-carousel/general-carousel.component';
import { ListCameraWifiComponent } from './Page/home/sub-component/list-camera-wifi/list-camera-wifi.component';
import { ListCameraSetComponent } from './Page/home/sub-component/list-camera-set/list-camera-set.component';
import { ListSmartKeyComponent } from './Page/home/sub-component/list-smart-key/list-smart-key.component';
import { ListRecordDeviceComponent } from './Page/home/sub-component/list-record-device/list-record-device.component';

@NgModule({
  declarations: [
    // HomeComponent,
    HeaderComponent,
    FooterComponent,
    ListBrandComponent,
    ListBestSaleComponent,
    ListProductComponent,
    // AdvertisementComponent,
    ProductDetailComponent,
    // GeneralInformationComponent,
    PolicyServiceComponent,
    SimilarProductComponent,
    DetailProductComponent,
    SameBrandComponent,
    SpecificationTableComponent,
    SpecificationTableModalComponent,
    // FilterComponent,
    FilterContentComponent,
    // ResultsComponent,
    // ManagementComponent,
    HeaderAdminComponent,
    SearchBarComponent,
    // AddProductComponent,
    // EditProductComponent,
    // BrandManagementComponent,
    MenuCategoriesComponent,
    IntroduceComponent,
    FeedbackComponent,
    GeneralCarouselComponent,
    ListCameraWifiComponent,
    ListCameraSetComponent,
    ListSmartKeyComponent,
    ListRecordDeviceComponent
  ],
  imports: [
    CommonModule,
    ProductRoutingModule,
    CarouselModule,
    ButtonModule,
    MatCardModule,
    RippleModule,
    SidebarModule,
    PaginatorModule,
    MatMenuModule
  ]
})
export class ProductModule { }
