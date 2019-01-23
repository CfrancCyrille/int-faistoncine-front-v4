import { TestBed, inject } from '@angular/core/testing';

import { AvisnegatifService } from './avisnegatif.service';

describe('AvisnegatifService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AvisnegatifService]
    });
  });

  it('should be created', inject([AvisnegatifService], (service: AvisnegatifService) => {
    expect(service).toBeTruthy();
  }));
});
