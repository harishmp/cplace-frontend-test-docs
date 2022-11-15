import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CplaceSingleTextControlComponent } from './cplace-single-text-control.component';

describe('CplaceSingleTextControlComponent', () => {
  let component: CplaceSingleTextControlComponent;
  let fixture: ComponentFixture<CplaceSingleTextControlComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CplaceSingleTextControlComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CplaceSingleTextControlComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
