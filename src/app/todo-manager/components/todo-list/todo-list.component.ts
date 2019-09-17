import { Component, OnInit, Input } from "@angular/core";
import { TodoService } from "../../services/todo.service";
import { Subscription } from "rxjs";
import { Todo } from "./../../todo";
import { Router, ActivatedRoute } from "@angular/router";

@Component({
  selector: "app-todo-list",
  templateUrl: "./todo-list.component.html",
  styleUrls: ["./todo-list.component.css"]
})
export class TodoListComponent implements OnInit {
  public todoArray: Todo[];
  public sub: Subscription;

  public colorDe: string = "A86AD1";
  sendData: Todo;
  displayDialog = true;
  @Input() selecTodo: Todo;

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
  constructor(public todoSer: TodoService, public router: Router) {}

  ngOnInit() {
    this.showTodo();
  }
  //show value data of server
  showTodo(): void {
    this.todoSer.getTodo().subscribe(
      data => {
        console.log(data);
        this.todoArray = data;
      },
      error => {
        this.todoSer.handleError(error);
      }
    );
  }

  getArrChange(event) {
    this.todoArray = event;
  }
  selectedTodo(event) {
    this.selecTodo = event;
  }
  //gui data sang lib btn-dialog
  getData(todo: Todo) {
    this.sendData = todo;

    console.log("sendData", this.sendData);
  }

  deleteClick(todo: Todo) {
    this.todoArray = this.todoArray.filter(h => h != todo);
    this.todoSer.deleteData(todo).subscribe();
  }

  editButtonClick(todoId: number) {
    this.router.navigate(["/edit", todoId]);
  }

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
}
