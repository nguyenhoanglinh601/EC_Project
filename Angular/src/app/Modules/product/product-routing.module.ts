import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FilterComponent } from './Page/filter/filter.component';
import { HomeComponent } from './Page/home/home.component';
import { ProductDetailComponent } from './Page/product-detail/product-detail.component';

const routes: Routes = [
  {path:"", component: HomeComponent},
  {path:"product/:id", component: ProductDetailComponent},
  {path:"filter/:keyword", component: FilterComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProductRoutingModule { }
