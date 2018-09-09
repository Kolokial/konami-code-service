import { TestBed, inject } from '@angular/core/testing';

import { KonamiCodeService } from './konami-code.service';

describe('KonamiCodeService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [KonamiCodeService]
    });
  });

  it('should be created', inject([KonamiCodeService], (service: KonamiCodeService) => {
    expect(service).toBeTruthy();
  }));
});
