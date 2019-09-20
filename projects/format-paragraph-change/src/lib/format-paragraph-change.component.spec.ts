import { async, ComponentFixture, TestBed } from "@angular/core/testing";

import { FormatParagraphChangeComponent } from "./format-paragraph-change.component";

describe("FormatParagraphChangeComponent", () => {
  let component: FormatParagraphChangeComponent;
  let fixture: ComponentFixture<FormatParagraphChangeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [FormatParagraphChangeComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormatParagraphChangeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
