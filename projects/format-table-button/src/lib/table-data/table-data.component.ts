import { Component, OnInit, Input, Output, EventEmitter } from "@angular/core";
import { Todo } from "../todo";
import { SelectItem } from "primeng/components/common/selectitem";
@Component({
  selector: "lib-table-data",
  templateUrl: "./table-data.component.html",
  styleUrls: ["./table-data.component.css"]
})
export class TableDataComponent implements OnInit {
  @Input() listTodo: Todo[];

  @Output("sendTodo") todo = new EventEmitter<Todo>();
  @Output("sendId") id = new EventEmitter<number>();
  @Output("sendDialog") dialog = new EventEmitter<Todo>();

  todoArray: Todo[];
  cols: any[];
  first: number = 0;
  status: SelectItem[];
  title: SelectItem[];
  clonedCars: { [s: string]: Todo } = {};
  item: string;

  selectedStatus: string[] = [];
  selectedTitle: string[] = [];
  selectedRow: SelectItem[];

  date: Date;

  show: boolean = false;
  constructor() {}

  ngOnInit() {
    this.cols = [
      { field: "title", header: "Title" },
      { field: "date", header: "Date" },
      { field: "status", header: "Status" },
      { field: "block", header: "Block" },
      { field: "button", header: "" }
    ];

    this.status = [
      { label: "Complete", value: true },
      { label: "Watting", value: false }
    ];
  }
  sendTask(task: Todo) {
    this.todo.emit(task);
  }
  sendId(id: number) {
    this.id.emit(id);
  }
  sendDialog(dialog: Todo) {
    this.dialog.emit(dialog);
  }
}
