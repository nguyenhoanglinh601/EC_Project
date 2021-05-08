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
import { CartComponent } from 'src/app/Modules/order/Page/cart/cart.component';
import { OrderRoutingModule } from 'src/app/Modules/order/order-routing.module';
import { UserRoutingModule } from 'src/app/Modules/user/user-routing.module';
import { CustomerAuthenticationComponent } from 'src/app/Modules/user/customer-authentication/customer-authentication.component';
import { OrderListComponent } from 'src/app/Modules/order/Page/order-list/order-list.component';

import { TestLayoutComponent } from './Share/Layouts/test-layout/test-layout.component';
import { HeaderComponent } from './Share/Layouts/header/header.component';

import { ButtonFlatMaterialComponent } from './Share/Materials/button-flat-material/button-flat-material.component';
import { MatButtonModule } from '@angular/material/button';
import {ToggleButtonModule} from 'primeng/togglebutton';
import {MatMenuModule} from '@angular/material/menu';

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
import { ItemComponent } from 'src/app/Modules/order/Page/cart/sub-component/item/item.component';
import { DiscountComponent } from 'src/app/Modules/order/Page/cart/sub-component/discount/discount.component';
import { PaymentComponent } from 'src/app/Modules/order/Page/cart/sub-component/payment/payment.component';
import { OrderInformationComponent } from 'src/app/Modules/order/Page/cart/sub-component/order-information/order-information.component';
import { OrderDetailComponent } from 'src/app/Modules/order/Page/order-list/sub-component/order-detail/order-detail.component';

import {CarouselModule} from 'primeng/carousel';
import {ButtonModule} from 'primeng/button';
import {RippleModule} from 'primeng/ripple';

import { MatCardModule } from '@angular/material/card';
import { LayoutModule } from 'src/app/Share/Layouts/layout.module';
// import {InputNumberModule} from 'primeng/inputnumber';
// import { FormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { AdministratorRoutingModule } from 'src/app/Modules/administrator/administrator-routing.module';
import { LoginComponent } from 'src/app/Modules/administrator/Page/login/login.component';
import { HeaderAdminComponent } from 'src/app/Share/Layouts/header-admin/header-admin.component';
import { FooterAdminComponent } from 'src/app/Share/Layouts/footer-admin/footer-admin.component';
import { SidebarModule } from 'primeng/sidebar';
import { ManagementComponent } from './Modules/product/Page/management/management.component';
import {PaginatorModule} from 'primeng/paginator';
import { AddProductComponent } from './Modules/product/Page/management/sub-component/add-product/add-product.component';
import { EditProductComponent } from './Modules/product/Page/management/sub-component/edit-product/edit-product.component';
// import * as $ from 'jquery';
// import * as bootstrap from "bootstrap";
import { BrandManagementComponent } from 'src/app/Modules/product/Page/management/sub-component/brand-management/brand-management.component';
import { IntroduceComponent } from 'src/app/Modules/product/Page/home/sub-component/introduce/introduce.component';
import { FeedbackComponent } from 'src/app/Modules/product/Page/home/sub-component/feedback/feedback.component';
import { PopupMessageComponent } from './Share/popup-message/popup-message.component';
import { GeneralCarouselComponent } from 'src/app/Modules/product/Page/home/sub-component/general-carousel/general-carousel.component';
import { ListCameraWifiComponent } from 'src/app/Modules/product/Page/home/sub-component/list-camera-wifi/list-camera-wifi.component';
import { ListCameraSetComponent } from 'src/app/Modules/product/Page/home/sub-component/list-camera-set/list-camera-set.component';
import { ListSmartKeyComponent } from 'src/app/Modules/product/Page/home/sub-component/list-smart-key/list-smart-key.component';

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
    ResultsComponent,
    CartComponent,
    ItemComponent,
    DiscountComponent,
    PaymentComponent,
    OrderInformationComponent,
    CustomerAuthenticationComponent,
    OrderListComponent,
    OrderDetailComponent,
    LoginComponent,
    HeaderAdminComponent,
    FooterAdminComponent,
    ManagementComponent,
    AddProductComponent,
    EditProductComponent,
    BrandManagementComponent,
    IntroduceComponent,
    FeedbackComponent,
    PopupMessageComponent,
    GeneralCarouselComponent,
    ListCameraWifiComponent,
    ListCameraSetComponent,
    ListSmartKeyComponent
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
    OrderRoutingModule,
    LayoutModule,
    // InputNumberModule,
    // FormsModule,
    MatInputModule,
    MatFormFieldModule,
    UserRoutingModule,
    AdministratorRoutingModule,
    SidebarModule,
    PaginatorModule,
    
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
