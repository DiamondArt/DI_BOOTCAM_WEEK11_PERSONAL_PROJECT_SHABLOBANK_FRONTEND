import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class StockService {

  constructor(private http: HttpClient) { }
  rootURL = 'http://localhost:8080/api';

  httpHeaders() {
    return new HttpHeaders({
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Methods': 'POST,GET,OPTIONS,PUT',
      'Accept': 'application/json',
    });
  };

  getAllStocks() {
    return this.http.get(this.rootURL + '/blood',{headers : this.httpHeaders()});
  }

  getStocksByType(bloodType: string ) {
    return this.http.get(this.rootURL + '/blood/groupe/'+bloodType,{headers : this.httpHeaders()});
  }

  GetAllInvoice(){
    return this.http.get('https://jsonplaceholder.typicode.com/users');
  }
}
