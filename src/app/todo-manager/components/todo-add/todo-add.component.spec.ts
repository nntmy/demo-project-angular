import { async, ComponentFixture, TestBed } from "@angular/core/testing";
//module
import { FormsModule, ReactiveFormsModule } from "@angular/forms";

import { RouterTestingModule } from "@angular/router/testing";
//component
import { TodoAddComponent } from "./todo-add.component";
import { HttpClientTestingModule } from "@angular/common/http/testing";
import { NO_ERRORS_SCHEMA } from "@angular/core";
import { Todo } from "../../todo";

describe("TodoAddComponent", () => {
  let component: TodoAddComponent;
  let fixture: ComponentFixture<TodoAddComponent>;
  let legend: HTMLElement;
  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TodoAddComponent],
      imports: [
        FormsModule,
        RouterTestingModule,
        HttpClientTestingModule,
        ReactiveFormsModule
      ],
      schemas: [NO_ERRORS_SCHEMA]
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TodoAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    const title = "Edit task";
    component.id = 1;
    component.pageTitle = title;
    component.getOTodo(1);
    expect(component).toBeTruthy();
    legend = fixture.nativeElement.querySelector("title");
  });
  it("getOtodo", () => {
    const exp: Todo = {
      id: 3,
      title: "B",
      date: "2019-09-12",
      status: true,
      block: "B"
    };
    component.editTodo(exp);
    component.getOTodo(1);
    expect(component.editTodo).toBeTruthy();
  });
});
