import { Component, OnInit, Input, Output, EventEmitter } from "@angular/core";
import { Todo } from "../../todo";
import { TodoService } from "../../services/todo.service";
import { Router } from "@angular/router";

@Component({
  selector: "app-btn-edit-de",
  templateUrl: "./btn-edit-de.component.html",
  styleUrls: ["./btn-edit-de.component.css"]
})
export class BtnEditDeComponent implements OnInit {
  @Input() task: Todo;
  @Input() arr: Todo[];
  @Output("deleteButtonClick") arrAfterDe = new EventEmitter<Todo[]>();
  @Output("selectTodo") selcTodo = new EventEmitter<Todo>();

  selectedTodo: Todo;
  //displayDialog:boolean;

  constructor(public todoSer: TodoService, private _router: Router) {}

  ngOnInit() {}

  editButtonClick(todoId: number) {
    this._router.navigate(["/edit", todoId]);
  }

  deleteButtonClick(todo: Todo) {
    //console.log("toaaaaaaaaaa", this.arr);
    this.arr = this.arr.filter(h => h !== todo);
    this.todoSer.deleteData(todo).subscribe();
    this.arrAfterDe.emit(this.arr);
  }

  selectTodo(task: Todo) {
    this.selectedTodo = task;
    //this.displayDialog = true;
    this.selcTodo.emit(this.selectedTodo);
    //console.log('seleccccccccccc',task);
    //event.preventDefault();
  }
}
