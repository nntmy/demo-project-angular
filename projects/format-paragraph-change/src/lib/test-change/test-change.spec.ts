import { async, ComponentFixture, TestBed } from "@angular/core/testing";

import { TestChangeComponent } from "./test-change";

describe("TestChangeComponent", () => {
  let component: TestChangeComponent;
  let fixture: ComponentFixture<TestChangeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [TestChangeComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TestChangeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
