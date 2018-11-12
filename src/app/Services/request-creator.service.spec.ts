import { TestBed } from '@angular/core/testing';

import { RequestCreatorService } from './request-creator.service';

describe('RequestCreatorService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: RequestCreatorService = TestBed.get(RequestCreatorService);
    expect(service).toBeTruthy();
  });
});
