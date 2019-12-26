import { TestBed } from '@angular/core/testing';

import { QuestionsListService } from './questions-list.service';

describe('QuestionsListService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: QuestionsListService = TestBed.get(QuestionsListService);
    expect(service).toBeTruthy();
  });
});
