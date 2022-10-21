import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StudentUpdateAssignmentComponent } from './student-update-assignment.component';

describe('StudentUpdateAssignmentComponent', () => {
  let component: StudentUpdateAssignmentComponent;
  let fixture: ComponentFixture<StudentUpdateAssignmentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StudentUpdateAssignmentComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StudentUpdateAssignmentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
