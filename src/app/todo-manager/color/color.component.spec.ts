import { async, ComponentFixture, TestBed } from "@angular/core/testing";

import { ColorComponent } from "./color.component";
import { HttpClientTestingModule } from "@angular/common/http/testing";

describe("ColorComponent", () => {
  let component: ColorComponent;
  let fixture: ComponentFixture<ColorComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ColorComponent],
      imports: [HttpClientTestingModule]
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ColorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
