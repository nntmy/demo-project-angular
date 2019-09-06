import { Component, OnInit,Input,Output,EventEmitter } from '@angular/core';


@Component({
  selector: 'lib-btn-delete',
  templateUrl: './btn-delete.component.html',
  styleUrls: ['./btn-delete.component.css']
})
export class BtnDeleteComponent implements OnInit {
  
  @Output('send') sendData= new EventEmitter<string>();
  a ='abc';
  constructor() { }

  ngOnInit() {
  }

  clickButton(){
  this.sendData.emit(this.a);

  }
}
