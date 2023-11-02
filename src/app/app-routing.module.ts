import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CartComponent } from 'src/shared/components/cart/cart.component';
import { CreateComponent } from 'src/shared/components/create/create.component';
import { DashboardComponent } from 'src/shared/components/dashboard/dashboard.component';
import { EditComponent } from 'src/shared/components/edit/edit.component';
import { LoginComponent } from 'src/shared/components/login/login.component';
import { MarketComponent } from 'src/shared/components/market/market.component';
import { ProductComponent } from 'src/shared/components/product/product.component';
import { RegisterComponent } from 'src/shared/components/register/register.component';
import { UsersComponent } from 'src/shared/components/users/users.component';
import { ViewComponent } from 'src/shared/components/view/view.component';

const routes: Routes = [
  {
    path: "",
    component: DashboardComponent
  },
  {
    path: "dashboard",
    component: DashboardComponent
  },
  {
    path: "log-in",
    component: LoginComponent
  },
  {
    path: "register",
    component: RegisterComponent
  },
  {
    path: "users",
    component: UsersComponent
  },
  {
    path: "Users/View/:id",
    component: ViewComponent
  },
  {
    path: "Users/create",
    component: CreateComponent
  },
  {
    path: "Users/edit/:id",
    component: EditComponent
  },
  {
    path: "product",
    component: ProductComponent
  },
  {
    path: "market",
    component: MarketComponent
  },
  {
    path: "cart",
    component: CartComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
