import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MeanMay22Component } from './mean-may22.component';

describe('MeanMay22Component', () => {
  let component: MeanMay22Component;
  let fixture: ComponentFixture<MeanMay22Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MeanMay22Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MeanMay22Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
