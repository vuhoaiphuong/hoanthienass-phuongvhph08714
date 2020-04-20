import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
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
import { FoodComponent } from './food/food.component';


const routes: Routes = [
 
  
  {path:'', redirectTo:'home',pathMatch:'full'},

  {path:'add-table',component:AddTableComponent},

  {path:'home',component:HomeComponent,
  children: [
     { path: '', redirectTo: 'about', pathMatch: 'full'},
    {path:'about',component:AboutComponent},
    {path:'service',component:ServiceComponent},
     {path:'menu',component:MenuComponent},
    {path:'chefs',component:ChefsComponent},
    {path:'food',component:FoodComponent},
    {path:'customer-says',component:CustomerSaysComponent},
    
  ]
},

{ path: 'admin', component: AdminComponent, 
  children: [
    { path: '', redirectTo: 'dashbord', pathMatch: 'full'},
    { path: 'dashbord', component: DashboardComponent},
    { path: 'product-manager', component: ProductManagerComponent},
    {path: 'table-edit/:customerID', component: TableEditComponent},
  ]
},
 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
