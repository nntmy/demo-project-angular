import { Component, OnInit, Input } from "@angular/core";
import { TodoService } from "../../services/todo.service";
import { Subscription } from "rxjs";
import { Todo } from "./../../todo";
import { Router, ActivatedRoute } from "@angular/router";
import { SelectItem } from "primeng/components/common/selectitem";

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

  tmp: Todo[];
  status: SelectItem[] = [];
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
    //kiem tra xem gia tri true da co trong mang status chua
    let a = this.status.find(item => item.value == true);
    //kiem tra xem gia tri false da co trong mang status chua
    let b = this.status.find(item => item.value == false);
    //duyet mang array
    for (let i = 0; i < array.length; i++) {
      //object.status = true va mang status chua co gia tri true
      if (array[i].status == true && a == null) {
        //push label va value vao mang
        this.status.push({ label: "Complete", value: true });
        //kiem tra lai xem gia tri true da co trong mang status chua
        a = this.status.find(item => item.value == true);
      } else if (array[i].status == false && b == null) {
        //push label va value vao mang
        this.status.push({ label: "Watting", value: false });
        //kiem tra lai xem gia tri false da co trong mang status chua
        b = this.status.find(item => item.value == false);
      }
    }
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
