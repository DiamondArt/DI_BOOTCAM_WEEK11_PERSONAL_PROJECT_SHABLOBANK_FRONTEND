import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  pageTitle: string = "Tableau de bord"
  pageUrl: string= "/admin/dashboard"

  constructor(){}
  ngOnInit(): void {
    
  }


}
