import { Component, OnInit ,Input, Renderer2, ElementRef, Output, EventEmitter  } from '@angular/core';
//import { Todo } from 'src/app/todo-manager/todo';
//import { TodoService } from 'src/app/todo-manager/services/todo.service';
//import { Router } from '@angular/router';

@Component({
  selector: "lib-format-paragraph",
  template: `
    <button pButton type="button" icon="pi pi-pencil">
      <ng-content></ng-content>
    </button>
  `,
  styles: [
    `
      div {
        padding: 20px;
        margin: 10px auto;
        box-shadow: 1px 3px 10px 1px rgba(0, 0, 0, 0.3);
        border-radius: 7px;
      }
    `
  ]
})
export class FormatParagraphComponent implements OnInit {
  // @Input() task: Todo;
  // @Input() arr: Todo[];
  // @Output("deleteButtonClick") arrAfterDe = new EventEmitter<Todo[]>();
  // @Output("selectTodo") selcTodo = new EventEmitter<Todo>();

  //selectedTodo: Todo;
  //displayDialog:boolean;

  constructor(
    private renderer: Renderer2,
    private el: ElementRef
    //public todoSer: TodoService,
    //private _router: Router
  ) {}
  ngOnInit() {}

  // editButtonClick(todoId: number) {
  //   this._router.navigate(["/edit", todoId]);
  // }

  // deleteButtonClick(todo: Todo) {
  //   console.log("toaaaaaaaaaa", this.arr);
  //   this.arr = this.arr.filter(h => h !== todo);
  //   this.todoSer.deleteData(todo).subscribe();
  //   this.arrAfterDe.emit(this.arr);
  // }

  // selectTodo(task: Todo) {
  //   this.selectedTodo = task;
  //   //this.displayDialog = true;
  //   this.selcTodo.emit(this.selectedTodo);
  //   //console.log('seleccccccccccc',task);
  //   //event.preventDefault();
  // }
}
