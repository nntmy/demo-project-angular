import { async, ComponentFixture, TestBed } from "@angular/core/testing";
//module
import { FormsModule, ReactiveFormsModule } from "@angular/forms";

import { RouterTestingModule } from "@angular/router/testing";
//component
import { TodoAddComponent } from "./todo-add.component";
import { HttpClientTestingModule } from "@angular/common/http/testing";
import { NO_ERRORS_SCHEMA } from "@angular/core";

describe("TodoAddComponent", () => {
  let component: TodoAddComponent;
  let fixture: ComponentFixture<TodoAddComponent>;

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
    expect(component).toBeTruthy();
  });
});
