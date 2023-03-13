import { StocktableComponent } from './pages/stocktable/stocktable.component';
import { StocksTradingComponent } from './pages/dashboard/stocks-trading/stocks-trading.component';
import { GeolocationComponent } from './pages/dashboard/geolocation/geolocation.component';
import { DonorsComponent } from './pages/dashboard/donors/donors.component';
import { StockComponent } from './pages/dashboard/stock/stock.component';
import { MainComponent } from './pages/dashboard/main/main.component';
import { OrdersComponent } from './pages/dashboard/orders/orders.component';
import { DashboardComponent } from './pages/dashboard/dashboard/dashboard.component';
import { LoginComponent } from './pages/auth/login/login.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NotificationComponent } from './pages/dashboard/notification/notification.component';

const routes: Routes = [
  {
    path: 'tables',
    component: StocktableComponent
  },
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'admin',
    component: MainComponent,
    children:[
      {
        path: 'dashboard',
        component: DashboardComponent
      },
      {
        path: 'donors',
        component: DonorsComponent
      },
      {
        path: 'geolocations',
        component: GeolocationComponent
      },
      {
        path: 'orders',
        component: OrdersComponent
      },
      {
        path: 'notifications',
        component: NotificationComponent
      },
      {
        path: 'stocks',
        component: StockComponent
      },
      {
        path: 'stocks-trading',
        component: StocksTradingComponent
      }
    ]
  },
  // { path: '', redirectTo: 'login', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
