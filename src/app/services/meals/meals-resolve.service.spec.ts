import { TestBed } from '@angular/core/testing';

import { MealsResolveService } from './meals-resolve.service';

describe('MealsResolveService', () => {
  let service: MealsResolveService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MealsResolveService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
