import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateassignmenttrainerComponent } from './updateassignmenttrainer.component';

describe('UpdateassignmenttrainerComponent', () => {
  let component: UpdateassignmenttrainerComponent;
  let fixture: ComponentFixture<UpdateassignmenttrainerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpdateassignmenttrainerComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UpdateassignmenttrainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
