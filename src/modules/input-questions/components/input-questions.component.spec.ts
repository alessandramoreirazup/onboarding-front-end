import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InputQuestionsComponent } from './input-questions.component';

describe('InputQuestionsComponent', () => {
  let component: InputQuestionsComponent;
  let fixture: ComponentFixture<InputQuestionsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InputQuestionsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InputQuestionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
