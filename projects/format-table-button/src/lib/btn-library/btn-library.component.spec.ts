import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BtnLibraryComponent } from './btn-library.component';

describe('BtnLibraryComponent', () => {
  let component: BtnLibraryComponent;
  let fixture: ComponentFixture<BtnLibraryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BtnLibraryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BtnLibraryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
