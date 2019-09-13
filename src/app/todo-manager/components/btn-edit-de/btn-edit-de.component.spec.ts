import { async, ComponentFixture, TestBed } from "@angular/core/testing";
//module
//import { RouterModule } from '@angular/router';
import { RouterTestingModule } from "@angular/router/testing";
import { HttpClient, HttpHandler } from "@angular/common/http";
import { HttpClientTestingModule } from "@angular/common/http/testing";
//component
import { BtnEditDeComponent } from "./btn-edit-de.component";

describe("BtnEditDeComponent", () => {
  let component: BtnEditDeComponent;
  let fixture: ComponentFixture<BtnEditDeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [BtnEditDeComponent],
      imports: [RouterTestingModule, HttpClientTestingModule],
      providers: [HttpHandler, HttpClient]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BtnEditDeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
