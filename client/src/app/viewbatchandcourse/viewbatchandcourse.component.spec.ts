import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewbatchandcourseComponent } from './viewbatchandcourse.component';

describe('ViewbatchandcourseComponent', () => {
  let component: ViewbatchandcourseComponent;
  let fixture: ComponentFixture<ViewbatchandcourseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewbatchandcourseComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ViewbatchandcourseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
