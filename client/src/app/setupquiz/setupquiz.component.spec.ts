import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SetupquizComponent } from './setupquiz.component';

describe('SetupquizComponent', () => {
  let component: SetupquizComponent;
  let fixture: ComponentFixture<SetupquizComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SetupquizComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SetupquizComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
