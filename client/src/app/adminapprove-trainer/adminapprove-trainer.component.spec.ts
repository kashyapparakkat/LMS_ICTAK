import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminapproveTrainerComponent } from './adminapprove-trainer.component';

describe('AdminapproveTrainerComponent', () => {
  let component: AdminapproveTrainerComponent;
  let fixture: ComponentFixture<AdminapproveTrainerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminapproveTrainerComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdminapproveTrainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
