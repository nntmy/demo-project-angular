import { ComponentFixture, TestBed } from "@angular/core/testing";
//module
import { FormatTableButtonModule } from "format-table-button";

import { MatButtonModule } from "@angular/material/button";
import { RouterTestingModule } from "@angular/router/testing";
import { HttpClientTestingModule } from "@angular/common/http/testing";
//component
import { TodoComponent } from "./todo.component";
import { ColorComponent } from "../../color/color.component";
import { SearchComponent } from "../../search/search.component";
//service
import { TodoService } from "../../services/todo.service";
import { NO_ERRORS_SCHEMA } from "@angular/core";

describe("TodoComponent", () => {
  let component: TodoComponent;
  let fixture: ComponentFixture<TodoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TodoComponent, ColorComponent, SearchComponent],
      imports: [
        FormatTableButtonModule,
        RouterTestingModule,
        HttpClientTestingModule
      ],
      providers: [TodoService],
      schemas: [NO_ERRORS_SCHEMA]
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TodoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
