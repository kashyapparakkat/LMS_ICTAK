import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TrainerCoursesMeanComponent } from './trainer-courses-mean.component';

describe('TrainerCoursesMeanComponent', () => {
  let component: TrainerCoursesMeanComponent;
  let fixture: ComponentFixture<TrainerCoursesMeanComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TrainerCoursesMeanComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TrainerCoursesMeanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
