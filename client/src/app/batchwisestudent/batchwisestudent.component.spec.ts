import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BatchwisestudentComponent } from './batchwisestudent.component';

describe('BatchwisestudentComponent', () => {
  let component: BatchwisestudentComponent;
  let fixture: ComponentFixture<BatchwisestudentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BatchwisestudentComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BatchwisestudentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
