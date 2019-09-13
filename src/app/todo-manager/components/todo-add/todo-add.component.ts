import { TodoService } from "./../../services/todo.service";
import { Component, OnInit } from "@angular/core";
import { FormGroup, FormBuilder, Validators } from "@angular/forms";
import { Todo } from "./../../todo";
import { Subscription } from "rxjs";
import { Router, ActivatedRoute } from "@angular/router";

@Component({
  selector: "app-todo-add",
  templateUrl: "./todo-add.component.html",
  styleUrls: ["./todo-add.component.css"]
})
export class TodoAddComponent implements OnInit {
  //khai bao object co kieu trar ve todo
  public oTodo: Todo;
  public frmAdd: FormGroup;
  public sub: Subscription;
  public pageTitle: string;
  id: number;

  constructor(
    private _formBuilder: FormBuilder,
    public todoSer: TodoService,
    public router: Router,
    public route: ActivatedRoute
  ) {}

  ngOnInit() {
    this.createForm();
    this.route.paramMap.subscribe(params => {
      //const Id = +params.get('id');
      const Id = +params.get("id");
      //kiem tra id , true => edit ,false => create
      if (Id) {
        this.id = Id;
        //console.log('da nhan id');
        this.pageTitle = "Edit task ";
        this.getOTodo(Id);
      } else {
        this.pageTitle = "Create task";
        this.oTodo = {
          id: null,
          title: "",
          date: "",
          status: false,
          block: null
        };
      }
    });
  }
  createForm() {
    this.frmAdd = this._formBuilder.group({
      //key value : ['gia tri mac dinh ',[validator]]
      title: ["", Validators.required],
      date: ["", [Validators.required]],
      status: [false, [Validators.required]],
      block: [""]
    });
    //console.log('frmaaaaaaaaaa',this.frmAdd);
  }
  //lay todo theo id
  getOTodo(id: number) {
    this.todoSer.getTodoId(id).subscribe(
      (task: Todo) => {
        this.editTodo(task);
        this.oTodo = task;
      },
      (err: any) => console.log(err)
    );
  }
  //gan gia tri len de chinh sua
  editTodo(task: Todo) {
    this.frmAdd.patchValue({
      title: task.title,
      date: task.date,
      status: task.status,
      block: task.block
    });
  }
  //gan gia tri cua frmadd vao object todo
  addFormToOTodo() {
    this.oTodo.title = this.frmAdd.value.title;
    this.oTodo.date = this.frmAdd.value.date;
    this.oTodo.status = this.frmAdd.value.status;
    // if (this.frmAdd.value.status == "true") {

    //   console.log('asasssssssssssssssssss',this.oTodo.block);
    //   return (this.oTodo.status = true);

    // } else {
    //   return (this.oTodo.status = false);
    // }
    this.oTodo.block = this.frmAdd.value.block;
  }
  onSubmit() {
    //console.log(this.frmAdd.value.status);

    this.addFormToOTodo();
    //console.log(this.oTodo);
    if (this.oTodo.id) {
      this.todoSer.saveData(this.oTodo).subscribe(
        () => this.router.navigate(["todoList"]),
        error => {
          console.log(`error`);
        }
      );
    } else {
      this.todoSer.addNewtask(this.oTodo).subscribe(
        () => this.router.navigate(["todoList"]),
        error => {
          console.log(`error`);
        }
      );
    }
  }
}
