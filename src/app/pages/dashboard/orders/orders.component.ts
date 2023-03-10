import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.css']
})
export class OrdersComponent implements OnInit {
  constructor(){}
  pageTitle: string = "Commandes "
  pageUrl: string= "/admin/orders"

  ngOnInit(): void {
    
  }

}
