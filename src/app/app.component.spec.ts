import { TestBed, async } from "@angular/core/testing";
//module
import { RouterTestingModule } from "@angular/router/testing";

import { HttpClientTestingModule } from "@angular/common/http/testing";
//component
import { AppComponent } from "./app.component";
import { TodoComponent } from "./todo-manager/components/todo/todo.component";
import { NO_ERRORS_SCHEMA } from "@angular/core";

describe("AppComponent", () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [RouterTestingModule, HttpClientTestingModule],
      declarations: [AppComponent, TodoComponent],
      schemas: [NO_ERRORS_SCHEMA]
    }).compileComponents();
  }));

  it("should create the app", () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  });
  // let appComponent = new AppComponent();

  // it('should create the app', () => {
  //   const app = appComponent;
  //   expect(app).toBeTruthy();
  // });
});
