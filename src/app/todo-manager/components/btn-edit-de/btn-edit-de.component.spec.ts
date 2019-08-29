import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BtnEditDeComponent } from './btn-edit-de.component';

describe('BtnEditDeComponent', () => {
  let component: BtnEditDeComponent;
  let fixture: ComponentFixture<BtnEditDeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BtnEditDeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BtnEditDeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
