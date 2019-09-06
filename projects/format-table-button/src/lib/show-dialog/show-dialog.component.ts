import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'lib-show-dialog',
  templateUrl: './show-dialog.component.html',
  styleUrls: ['./show-dialog.component.css']
})
export class ShowDialogComponent implements OnInit {

  @Input() titleDialog : string ;
  @Input() dateDialog:string;
  @Input() statusDialog:boolean;
  @Input() blockDialog:string;
  constructor() { 
    console.log('loggggggggggggggggggggggggggg');
  }

  ngOnInit() {
    // this.titleDialog=null;
    // this.dateDialog=null;
    // this.statusDialog=true;
    // this.blockDialog=null;
  }

}
