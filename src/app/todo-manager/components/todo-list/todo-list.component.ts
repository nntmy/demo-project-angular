import { Component, OnInit, Input } from "@angular/core";
import { Router, ActivatedRoute } from "@angular/router";

import { Subscription } from "rxjs";
import { SelectItem } from "primeng/components/common/selectitem";

import { TodoService } from "../../services/todo.service";
import { Todo } from "./../../todo";

@Component({
  selector: "app-todo-list",
  templateUrl: "./todo-list.component.html",
  styleUrls: ["./todo-list.component.css"]
})
export class TodoListComponent implements OnInit {
  @Input() selecTodo: Todo;

  public colorDe: string = "A86AD1";
  displayDialog = true;

  public todoArray: Todo[];
  public sub: Subscription;
  sendData: Todo;

  tmp: Todo[];
  status: SelectItem[] = [];

  constructor(public todoSer: TodoService, public router: Router) {}

  ngOnInit() {
    this.showTodo();
  }

  //show value data of server
  showTodo(): void {
    this.todoSer.getTodo().subscribe(
      data => {
        this.todoArray = data.sort((a, b) => b.id - a.id);

        this.selctStatus(this.todoArray);
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
  selctStatus(array: Todo[]) {
    this.status = [];
    //check value true exist yet?
    let a = this.status.find(item => item.value == true);
    //check value false exist yet?
    let b = this.status.find(item => item.value == false);
    //browser the array
    for (let i = 0; i < array.length; i++) {
      //object.status = true and status array not have value true
      if (array[i].status == true && a == null) {
        //push label and value into array
        this.status.push({ label: "Complete", value: true });
        //check again value true exist yet ?
        a = this.status.find(item => item.value == true);
      } else if (array[i].status == false && b == null) {
        this.status.push({ label: "Watting", value: false });

        b = this.status.find(item => item.value == false);
      }
    }
  }
}
