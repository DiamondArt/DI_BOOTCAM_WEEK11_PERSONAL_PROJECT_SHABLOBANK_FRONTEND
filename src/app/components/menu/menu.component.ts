import { IMenu } from './../menu';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit{

  public menuProperties : Array<IMenu> = [ 
    {
      id: 1,
      name: "Tableau de bord",
      url: "/admin/dashboard",
      icon: "iconsminds-home",

   },
   {
    id: 2,
    name: "Gestion de stock",
    url: "admin/stocks",
    icon: "iconsminds-digital-drawing",

 },
 {
  id: 3,
  name: "Commande",
  url: "admin/orders",
  icon: "iconsminds-ambulance",

},
{
  id: 4,
  name: "Donneurs",
  url: "admin/donors",
  icon: "iconsminds-mens",
},
{
  id: 5,
  name: "Statut",
  url: "admin/geolocations",
  icon: "iconsminds-map2",
 
},
{
  id: 6,
  name: "Notifications",
  url: "admin/notifications",
  icon: "iconsminds-bell",
  
},
{
  id: 7,
  name: "Echange de stock",
  url: "admin/stocks-trading",
  icon: "iconsminds-sync",
  
}
]

  constructor(private router: Router) {
  }

  ngOnInit(): void {
    console.log(this.menuProperties);
    // console.log(this.menuProperties[0].submenu?[0].url);
    
    
  }
  navigateTo(url?: string): void {
    this.router.navigate([url])
  }
}
