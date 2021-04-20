import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CustomerAuthenticationComponent } from './customer-authentication/customer-authentication.component';

const routes: Routes = [
  {path: "search-order", component: CustomerAuthenticationComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserRoutingModule { }
