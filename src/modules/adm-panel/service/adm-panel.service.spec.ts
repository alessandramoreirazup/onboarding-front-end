import { TestBed } from '@angular/core/testing';

import { AdmPanelService } from './adm-panel.service';

describe('AdmPanelService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: AdmPanelService = TestBed.get(AdmPanelService);
    expect(service).toBeTruthy();
  });
});
