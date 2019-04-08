import { TestBed } from '@angular/core/testing';

import { ShowingService } from './showing.service';

describe('ShowingService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ShowingService = TestBed.get(ShowingService);
    expect(service).toBeTruthy();
  });
});
