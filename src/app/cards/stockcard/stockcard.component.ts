import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-stockcard',
  templateUrl: './stockcard.component.html',
  styleUrls: ['./stockcard.component.css']
})
export class StockcardComponent implements OnInit{


  @Input() cardTitle?: string
  // public theCallback?: Function
  @Input() theCallback?: Function;

//   suggestionWasClicked(): void {
//     this.cardClick.emit([]);
// }

  ngOnInit(): void {
    
  }
}
