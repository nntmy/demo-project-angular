import { Component, OnInit } from "@angular/core";
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

  constructor(
    public todoSer: TodoService, 
    private _router: Router,
    ) {}

  ngOnInit() {
    this.showTodo();
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

  editButtonClick(todoId: number) {
    this._router.navigate(["/edit", todoId]);
  }

  getIndex(id: number): number {
    let result = 0;
    this.todoArray.forEach((task, index) => {
      if (task.id == id) {
        return (result = index);
      }
    });
    return result;
  }
  deleteButtonClick(id: number) {
    this.sub = this.todoSer.deleteData(id).subscribe(
      () => {
        //let index = this.getIndex(data.id);
        //this.todoArray.splice(id);
        //this._router.navigate(['']);
        window.location.reload();
      },
      error => {
        console.log(`error`);
      }
    );
  }
}
