import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FilterComponent } from './Page/filter/filter.component';
import { HomeComponent } from './Page/home/home.component';
import { ManagementComponent } from './Page/management/management.component';
import { BrandManagementComponent } from './Page/management/sub-component/brand-management/brand-management.component';
import { ProductDetailComponent } from './Page/product-detail/product-detail.component';

const routes: Routes = [
  {path:"", component: HomeComponent},
  {path:"product/:id", component: ProductDetailComponent},
  {path:"products/search/:keyword", component: FilterComponent},

  //DEFINE EVERY SEPERATE ROUTE
  // {path:"filter/:category", component: FilterComponent},
  // {path:"filter/:category/:brand", component: FilterComponent}

  //DEFINE ONLY CHILD ROUTE
  { path: "products/filter",
    children: [
      {path: "brand/:brand", component: FilterComponent},
      {path: ":category", component: FilterComponent},
      {path: ":category/:brand", component: FilterComponent}
    ]
  },
  {path: "products/management", children: [
    {path: "", component: ManagementComponent},
    {path: "brand", component: BrandManagementComponent}
  ]}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProductRoutingModule { }
