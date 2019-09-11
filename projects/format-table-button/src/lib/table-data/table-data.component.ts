import { Component, OnInit, Input ,Output,EventEmitter} from "@angular/core";
import { Todo } from "../todo";
import { SelectItem } from "primeng/components/common/selectitem";
@Component({
  selector: "lib-table-data",
  templateUrl: "./table-data.component.html",
  styleUrls: ["./table-data.component.css"]
})
export class TableDataComponent implements OnInit {
  // @Input() title: string;
  // @Input() date: string;
  // @Input() status: boolean;
  // @Input() block: string;

  @Input() listTodo: Todo[];

  @Output('sendTodo') todo = new EventEmitter<Todo>();
  @Output('sendId') id = new EventEmitter<number>();
  @Output('sendDialog') dialog = new EventEmitter<Todo>();
  constructor() {}

  ngOnInit() {
    }
    sendTask(task:Todo){
    this.todo.emit(task);

    }
    sendId(id:number){
      this.id.emit(id);
    }
    sendDialog(dialog:Todo){
      this.dialog.emit(dialog);
    }
}
