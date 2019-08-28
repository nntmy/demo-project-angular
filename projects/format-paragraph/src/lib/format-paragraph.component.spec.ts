import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormatParagraphComponent } from './format-paragraph.component';

describe('FormatParagraphComponent', () => {
  let component: FormatParagraphComponent;
  let fixture: ComponentFixture<FormatParagraphComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormatParagraphComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormatParagraphComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
