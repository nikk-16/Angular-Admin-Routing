import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CartComponent } from 'src/shared/components/cart/cart.component';
import { CreateComponent } from 'src/shared/components/create/create.component';
import { DashboardComponent } from 'src/shared/components/dashboard/dashboard.component';
import { LoginComponent } from 'src/shared/components/login/login.component';
import { MarketComponent } from 'src/shared/components/market/market.component';
import { ProductComponent } from 'src/shared/components/product/product.component';
import { RegisterComponent } from 'src/shared/components/register/register.component';
import { SidebarComponent } from 'src/shared/components/sidebar/sidebar.component';
import { TopbarComponent } from 'src/shared/components/topbar/topbar.component';
import { UsersComponent } from 'src/shared/components/users/users.component';
import { ViewComponent } from 'src/shared/components/view/view.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgChartsModule } from 'ng2-charts';
import { StatsComponent } from 'src/shared/components/dashboard/stats/stats.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { EditComponent } from 'src/shared/components/edit/edit.component';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    LoginComponent,
    RegisterComponent,
    UsersComponent,
    ViewComponent,
    CreateComponent,
    ProductComponent,
    MarketComponent,
    CartComponent,
    SidebarComponent,
    TopbarComponent,
    StatsComponent,
    EditComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    NgChartsModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
