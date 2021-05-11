import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CartComponent } from './Page/cart/cart.component';
import { OrderListComponent } from './Page/order-list/order-list.component';

const routes: Routes = [
  {path: "cart", component: CartComponent},
  {path: "orders", children: [
    {path: "", component: OrderListComponent}
  ]}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class OrderRoutingModule { }
