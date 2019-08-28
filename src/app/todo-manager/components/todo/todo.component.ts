import { Component, OnInit, OnDestroy ,Output,EventEmitter} from "@angular/core";
import { TodoService } from "../../services/todo.service";
import { Subscription } from "rxjs";
import { Todo } from "./../../todo";
import {ThemePalette} from '@angular/material/core';
Todo;
Subscription;
TodoService;


@Component({
  selector: "app-todo",
  templateUrl: "./todo.component.html",
  styleUrls: ["./todo.component.css"]
})
export class TodoComponent implements OnInit, OnDestroy {

  @Output('outColor') colorConnect = new EventEmitter<string>();
  public colorDefault:string;
 public check:boolean =false;

  //public clickValue:boolean = false ;
  constructor(
    public todoSer: TodoService
    ) {}


  ngOnInit() {
    this.colorDefault= '#ffffff';
   
  }

  
 
  getColor(event:string){
    this.colorDefault = event;
    console.log('mau lay duoc '+ this.colorDefault);
  }
  //nhan mau tu todo
  setMyStyles() {
    //console.log('set my style');
    let styles = {
      'background-color': this.colorDefault
      
    };
    return styles;
  }
  
  ngOnDestroy(): void {
    //Called once, before the instance is destroyed.
    //Add 'implements OnDestroy' to the class.
  }
}
