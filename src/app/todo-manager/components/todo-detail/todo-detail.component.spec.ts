import { ComponentFixture, TestBed } from "@angular/core/testing";
//module
import { DialogModule } from "primeng/dialog";
//component
import { TodoDetailComponent } from "./todo-detail.component";
import { HttpClientTestingModule } from "@angular/common/http/testing";
import { NO_ERRORS_SCHEMA } from "@angular/core";

describe("TodoDetailComponent", () => {
  let component: TodoDetailComponent;
  let fixture: ComponentFixture<TodoDetailComponent>;
  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TodoDetailComponent],
      imports: [HttpClientTestingModule, DialogModule],
      schemas: [NO_ERRORS_SCHEMA]
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TodoDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
