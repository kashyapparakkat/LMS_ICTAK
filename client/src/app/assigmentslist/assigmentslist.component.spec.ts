import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AssigmentslistComponent } from './assigmentslist.component';

describe('AssigmentslistComponent', () => {
  let component: AssigmentslistComponent;
  let fixture: ComponentFixture<AssigmentslistComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AssigmentslistComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AssigmentslistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
