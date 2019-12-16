import { TestBed } from '@angular/core/testing';

import { InputQuestionsService } from './input-questions.service';

describe('InputQuestionsService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: InputQuestionsService = TestBed.get(InputQuestionsService);
    expect(service).toBeTruthy();
  });
});
