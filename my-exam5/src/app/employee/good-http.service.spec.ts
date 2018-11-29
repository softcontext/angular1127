import { TestBed } from '@angular/core/testing';

import { GoodHttpService } from './good-http.service';

describe('GoodHttpService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: GoodHttpService = TestBed.get(GoodHttpService);
    expect(service).toBeTruthy();
  });
});
