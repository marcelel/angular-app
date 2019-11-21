import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ToursComponent } from './tours.component';

describe('ToursComponentComponent', () => {
  let component: ToursComponent;
  let fixture: ComponentFixture<ToursComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ToursComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ToursComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
