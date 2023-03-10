import { Router } from '@angular/router';
import { Component, Input, OnInit, NgModule } from '@angular/core';

@Component({
  selector: 'app-breadcrumb',
  templateUrl: './breadcrumb.component.html',
  styleUrls: ['./breadcrumb.component.css']
})
export class BreadcrumbComponent implements OnInit {
  @Input() pageTitle?: string
  @Input() pageUrl?: string

  constructor(private router: Router){}

  navigateTo(url?: string): void {
    this.router.navigate([url])
  }

  ngOnInit(): void {
    // console.log(this.menuProperties[0].submenu?[0].url);
  }

}
