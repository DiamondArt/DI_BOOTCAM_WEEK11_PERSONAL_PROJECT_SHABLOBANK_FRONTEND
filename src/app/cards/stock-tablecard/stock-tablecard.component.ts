import { Blood } from './../../models/blood';
import { Component, Input, OnInit } from '@angular/core';
import { StockService } from 'src/app/services/stock.service';
import { Subject } from 'rxjs'

@Component({
  selector: 'app-stock-tablecard',
  templateUrl: './stock-tablecard.component.html',
  styleUrls: ['./stock-tablecard.component.css']
})
export class StockTablecardComponent implements OnInit {

  constructor(
    public service: StockService
  ) {}

  @Input() loader: boolean = false;
  @Input() bloods: Blood[] = []

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
      searchPlaceholder:'Search'
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
