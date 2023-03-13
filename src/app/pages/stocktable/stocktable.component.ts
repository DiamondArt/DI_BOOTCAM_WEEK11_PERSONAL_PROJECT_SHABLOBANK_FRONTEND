import { Component, OnInit } from '@angular/core';
import { StockService } from 'src/app/services/stock.service';
import { Subject } from 'rxjs'
@Component({
  selector: 'app-stocktable',
  templateUrl: './stocktable.component.html',
  styleUrls: ['./stocktable.component.css']
})
export class StocktableComponent implements OnInit {

  constructor(
    public service: StockService
  ) {}

  Invoiceheader: any;
  pdfurl = '';
  invoiceno: any;
  dtoptions: DataTables.Settings = {};
  dtTrigger:Subject<any>=new Subject<any>();

  ngOnInit(): void {
    this.dtoptions = {
      pagingType: 'full_numbers',
      searching:true,
    //  paging:false
    lengthChange:false,
    language:{
      searchPlaceholder:'Text Customer'
    }
  };
  this.LoadInvoice();

}
LoadInvoice() {
  this.service.GetAllInvoice().subscribe(res => {
    this.Invoiceheader = res;
    this.dtTrigger.next(null);
  });
}

}
