import { Component } from '@angular/core';

@Component({
  selector: 'app-stock',
  templateUrl: './stock.component.html',
  styleUrls: ['./stock.component.css']
})
export class StockComponent {
  pageTitle: string = "Gestion de Stock"
  pageUrl: string= "/admin/stocks"
}
