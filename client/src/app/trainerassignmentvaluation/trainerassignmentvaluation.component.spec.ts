import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TrainerassignmentvaluationComponent } from './trainerassignmentvaluation.component';

describe('TrainerassignmentvaluationComponent', () => {
  let component: TrainerassignmentvaluationComponent;
  let fixture: ComponentFixture<TrainerassignmentvaluationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TrainerassignmentvaluationComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TrainerassignmentvaluationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
