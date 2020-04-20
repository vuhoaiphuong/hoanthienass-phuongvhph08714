import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import {CustomerService } from './customer.service';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FoodComponent } from './food/food.component';
import { MenuComponent } from './menu/menu.component';
import { AddTableComponent } from './add-table/add-table.component';
import { HomeComponent } from './home/home.component';
import { CustomerSaysComponent } from './customer-says/customer-says.component';
import { AdminComponent } from './admin/admin.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ProductManagerComponent } from './product-manager/product-manager.component';
import { TableEditComponent } from './table-edit/table-edit.component';
import { AboutComponent } from './about/about.component';
import { ServiceComponent } from './service/service.component';
import { ChefsComponent } from './chefs/chefs.component';


@NgModule({
  declarations: [
    AppComponent,
    FoodComponent,
    MenuComponent,
    AddTableComponent,
    HomeComponent,
    CustomerSaysComponent,
    AdminComponent,
    DashboardComponent,
    ProductManagerComponent,
    TableEditComponent,
    AboutComponent,
    ServiceComponent,
    ChefsComponent,
   
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [CustomerService],
  bootstrap: [AppComponent]
})
export class AppModule {}
