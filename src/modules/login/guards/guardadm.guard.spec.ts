import { TestBed, async, inject } from '@angular/core/testing';

import { GuardAdmGuard } from './guardadm.guard';

describe('GuardadmGuard', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [GuardAdmGuard]
    });
  });

  it('should ...', inject([GuardAdmGuard], (guard: GuardAdmGuard) => {
    expect(guard).toBeTruthy();
  }));
});
