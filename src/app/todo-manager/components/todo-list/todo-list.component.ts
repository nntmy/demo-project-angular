import { Component, OnInit, Input } from "@angular/core";
import { TodoService } from "../../services/todo.service";
import { Subscription } from "rxjs";
import { Todo } from "./../../todo";
import { Router } from "@angular/router";

@Component({
  selector: "app-todo-list",
  templateUrl: "./todo-list.component.html",
  styleUrls: ["./todo-list.component.css"]
})
export class TodoListComponent implements OnInit {
  public todoArray: Todo[] = [];
  public sub: Subscription;

  public colorDe: string = "A86AD1";
  
  
  @Input() selecTodo:Todo;
  
  // filTodo: Todo[];

  // private _searchText: string;

  // filter
  // get searchText(): string {
  //   return this._searchText;
  // }
  // set searchText(value: string) {
  //   this._searchText = value;
  //   this.filTodo = this.filterTodo(value);
  // }

  // filterTodo(key: string) {
  //   return this.todoArray.filter(
  //     todo => todo.title.toLowerCase().indexOf(key.toLowerCase()) !== -1
  //   );
  // }
  //
  constructor(public todoSer: TodoService) {}

  ngOnInit() {
    this.showTodo();
    //this.filTodo = this.todoArray;
  }
  //show value data of server
  showTodo(): void {
    this.sub = this.todoSer.getTodo().subscribe(
      data => {
        console.log(data);
        this.todoArray = data;
      },
      error => {
        console.log(`error`);
      }
    );
  }

  getArrChange(event){
    this.todoArray=event;
  }
  // editButtonClick(todoId: number) {
  //   this._router.navigate(["/edit", todoId]);
  // }

  // getIndex(id: number): number {
  //   let result = 0;
  //   this.todoArray.forEach((task, index) => {
  //     if (task.id == id) {
  //       return (result = index);
  //     }
  //   });
  //   return result;
  // }
  //deleteButtonClick(todo:Todo) {

  // this.todoArray = this.todoArray.filter(h => h !== todo);
  // this.todoSer.deleteData(todo).subscribe(
  // data => {
  //console.log('data',data);
  //let index = this.getIndex(data.id);
  //console.log('data id ',data.id,'index',index);
  //this.todoArray=data;
  //this.todoArray.splice(index,1);

  //this._router.navigate(['']);
  //window.location.reload();
  // },
  // error => {
  // console.log(`error`);
  // }
  // );
  //}

  selectedTodo(event){
    this.selecTodo=event;
   
    //console.log('list',this.selecTodo,this.displayDialog);
    //event.preventDefault();
    
    }
}
