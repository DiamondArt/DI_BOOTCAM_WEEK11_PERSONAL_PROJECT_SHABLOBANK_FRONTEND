import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LeafletModule } from '@asymmetrik/ngx-leaflet';
import { LoginComponent } from './pages/auth/login/login.component';
import { DashboardComponent } from './pages/dashboard/dashboard/dashboard.component';
import { OrdersComponent } from './pages/dashboard/orders/orders.component';
import { TopNavbarComponent } from './layout/top-navbar/top-navbar.component';
import { SidebarComponent } from './layout/sidebar/sidebar.component';
import { MenuComponent } from './components/menu/menu.component';
import { BreadcrumbComponent } from './components/breadcrumb/breadcrumb.component';
import { MainComponent } from './pages/dashboard/main/main.component';
import { StockComponent } from './pages/dashboard/stock/stock.component';
import { GeolocationComponent } from './pages/dashboard/geolocation/geolocation.component';
import { NotificationComponent } from './pages/dashboard/notification/notification.component';
import { DonorsComponent } from './pages/dashboard/donors/donors.component';
import { StocksTradingComponent } from './pages/dashboard/stocks-trading/stocks-trading.component';
import { HttpClientModule } from '@angular/common/http';
import { StockcardComponent } from './cards/stockcard/stockcard.component';
import { StockTablecardComponent } from './cards/stock-tablecard/stock-tablecard.component';
import { NgxExtendedPdfViewerModule } from 'ngx-extended-pdf-viewer'
import {DataTablesModule} from 'angular-datatables';
import { StocktableComponent } from './pages/stocktable/stocktable.component'

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    DashboardComponent,
    OrdersComponent,
    TopNavbarComponent,
    SidebarComponent,
    MenuComponent,
    BreadcrumbComponent,
    MainComponent,
    StockComponent,
    GeolocationComponent,
    NotificationComponent,
    DonorsComponent,
    StocksTradingComponent,
    StockcardComponent,
    StockTablecardComponent,
    StocktableComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    LeafletModule,
    HttpClientModule,
    NgxExtendedPdfViewerModule,
    DataTablesModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
