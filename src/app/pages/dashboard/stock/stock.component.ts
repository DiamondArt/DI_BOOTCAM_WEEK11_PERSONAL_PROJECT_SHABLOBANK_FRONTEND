import { Blood } from './../../../models/blood';
import { StockService } from './../../../services/stock.service';
import { Component, OnInit } from '@angular/core';
import { Subject } from 'rxjs';

@Component({
  selector: 'app-stock',
  templateUrl: './stock.component.html',
  styleUrls: ['./stock.component.css']
})
export class StockComponent  implements OnInit{

  pageTitle: string = "Gestion de Stock"
  pageUrl: string= "/admin/stocks"

  bloods:Blood[] = [] ;
  loader: boolean = false;
  destroy$: Subject<boolean> = new Subject<boolean>();

  constructor(
    public serviceStock: StockService
  ) {}

  getAllBloods() {
    this.loader = true;
    this.serviceStock.getAllStocks().subscribe({
      next: data => {
        this.bloods = data as any
        console.log(this.bloods);
        this.loader = false;
      },
      error: error => {

      }
    })
  }

  navigateTo(bloodType: string) {
    this.loader = true;
    this.serviceStock.getStocksByType(bloodType).subscribe({
      next: data => {
        this.bloods = data as any
        console.log(data);
        
        console.log(this.bloods);
        this.loader = false;
      },
      error: error =>{
          console.log(error);
      }
    })
  }

  public thecallback = () => {
    alert("hello")
  }


  ngOnInit() {
    this.getAllBloods();
    // console.log("========= bloods list ==========");
    
    // // console.log(this.bloods);
    // console.log(this.li);

    // this.serviceStock.getStocks().subscribe(Response  =>{
    //   console.log("**************************");
    //   this.bloods = Response;
    //   // console.log(Response)
    // });
   
    // this.serviceStock.getStocks().subscribe((data:any) => {
    //   //   this.bloods = data;
    //   console.log(data);
    //   this.bloods = data
    // });
  
  }

  ngAfterInit(){
    console.log(this.bloods);
  }
}
