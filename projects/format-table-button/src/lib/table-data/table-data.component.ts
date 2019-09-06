import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'lib-table-data',
  templateUrl: './table-data.component.html',
  styleUrls: ['./table-data.component.css']
})
export class TableDataComponent implements OnInit {
  @Input() title :string ;
  @Input() date:string;
  @Input() status:boolean;
  @Input() block:string;
  constructor() { }

  ngOnInit() {
  }

}
