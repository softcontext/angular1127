import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SortPipeComponent } from './sort-pipe.component';

describe('SortPipeComponent', () => {
  let component: SortPipeComponent;
  let fixture: ComponentFixture<SortPipeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SortPipeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SortPipeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
