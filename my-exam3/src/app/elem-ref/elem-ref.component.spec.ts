import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ElemRefComponent } from './elem-ref.component';

describe('ElemRefComponent', () => {
  let component: ElemRefComponent;
  let fixture: ComponentFixture<ElemRefComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ElemRefComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ElemRefComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
