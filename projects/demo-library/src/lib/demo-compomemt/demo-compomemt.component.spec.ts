import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DemoCompomemtComponent } from './demo-compomemt.component';

describe('DemoCompomemtComponent', () => {
  let component: DemoCompomemtComponent;
  let fixture: ComponentFixture<DemoCompomemtComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DemoCompomemtComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DemoCompomemtComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
