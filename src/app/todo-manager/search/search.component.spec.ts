import { async, ComponentFixture, TestBed } from "@angular/core/testing";
//module
import { FormsModule } from "@angular/forms";
import { RouterTestingModule } from "@angular/router/testing";
import { HttpClientTestingModule } from "@angular/common/http/testing";
//component
import { SearchComponent } from "./search.component";
//module
import { FormatTableButtonModule } from "format-table-button";

//service
import { TodoService } from "../services/todo.service";
import { NO_ERRORS_SCHEMA } from "@angular/core";

describe("SearchComponent", () => {
  let component: SearchComponent;
  let fixture: ComponentFixture<SearchComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SearchComponent],
      imports: [
        FormatTableButtonModule,
        RouterTestingModule,
        HttpClientTestingModule,
        FormsModule
      ],
      providers: [TodoService],
      schemas: [NO_ERRORS_SCHEMA]
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
