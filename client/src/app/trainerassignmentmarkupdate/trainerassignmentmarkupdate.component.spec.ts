import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TrainerassignmentmarkupdateComponent } from './trainerassignmentmarkupdate.component';

describe('TrainerassignmentmarkupdateComponent', () => {
  let component: TrainerassignmentmarkupdateComponent;
  let fixture: ComponentFixture<TrainerassignmentmarkupdateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TrainerassignmentmarkupdateComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TrainerassignmentmarkupdateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
