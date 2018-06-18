import { TestBed, inject } from '@angular/core/testing';

import { SignUpDetailsService } from './sign-up-details.service';

describe('SignUpDetailsService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [SignUpDetailsService]
    });
  });

  it('should be created', inject([SignUpDetailsService], (service: SignUpDetailsService) => {
    expect(service).toBeTruthy();
  }));
});
