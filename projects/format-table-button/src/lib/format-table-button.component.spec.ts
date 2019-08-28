import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormatTableButtonComponent } from './format-table-button.component';

describe('FormatTableButtonComponent', () => {
  let component: FormatTableButtonComponent;
  let fixture: ComponentFixture<FormatTableButtonComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormatTableButtonComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormatTableButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
