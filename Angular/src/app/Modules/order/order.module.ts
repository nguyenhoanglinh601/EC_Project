import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { OrderRoutingModule } from './order-routing.module';
import { CartComponent } from './Page/cart/cart.component';

import { HeaderComponent } from 'src/app/Share/Layouts/header/header.component';
import { FooterComponent } from 'src/app/Share/Layouts/footer/footer.component';
import { ItemComponent } from './Page/cart/sub-component/item/item.component';
import { DiscountComponent } from './Page/cart/sub-component/discount/discount.component';
import { PaymentComponent } from './Page/cart/sub-component/payment/payment.component';
import { OrderInformationComponent } from './Page/cart/sub-component/order-information/order-information.component';

// import {InputNumberModule} from 'primeng/inputnumber';
// import { FormsModule } from '@angular/forms';

import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { OrderListComponent } from './Page/order-list/order-list.component';
import { OrderDetailComponent } from './Page/order-list/sub-component/order-detail/order-detail.component';

@NgModule({
  declarations: [
    CartComponent,
    HeaderComponent,
    FooterComponent,
    ItemComponent,
    DiscountComponent,
    PaymentComponent,
    OrderInformationComponent,
    OrderListComponent,
    OrderDetailComponent
  ],
  imports: [
    CommonModule,
    OrderRoutingModule,
    // InputNumberModule,
    // FormsModule,
    MatInputModule,
    MatFormFieldModule
  ]
})
export class OrderModule { }