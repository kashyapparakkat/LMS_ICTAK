import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SignupacknowledgeComponent } from './signupacknowledge.component';

describe('SignupacknowledgeComponent', () => {
  let component: SignupacknowledgeComponent;
  let fixture: ComponentFixture<SignupacknowledgeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SignupacknowledgeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SignupacknowledgeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
