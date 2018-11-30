import { TestBed, async, inject } from '@angular/core/testing';

import { ContactCanActivateGuard } from './contact-can-activate.guard';

describe('ContactCanActivateGuard', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ContactCanActivateGuard]
    });
  });

  it('should ...', inject([ContactCanActivateGuard], (guard: ContactCanActivateGuard) => {
    expect(guard).toBeTruthy();
  }));
});
