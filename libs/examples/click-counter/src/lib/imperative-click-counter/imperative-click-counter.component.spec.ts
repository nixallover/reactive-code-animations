import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ImperativeClickCounterComponent } from './imperative-click-counter.component';

describe('ImperativeClickCounterComponent', () => {
  let component: ImperativeClickCounterComponent;
  let fixture: ComponentFixture<ImperativeClickCounterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ImperativeClickCounterComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ImperativeClickCounterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
