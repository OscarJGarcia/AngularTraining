import { TestBed } from '@angular/core/testing';

import { ConfirmationGuard } from './confirmation.guard';

describe('ConfirmationGuardGuard', () => {
  let guard: ConfirmationGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(ConfirmationGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
