import { TestBed, inject } from '@angular/core/testing';

import { AvispositifService } from './avispositif.service';

describe('AvispositifService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AvispositifService]
    });
  });

  it('should be created', inject([AvispositifService], (service: AvispositifService) => {
    expect(service).toBeTruthy();
  }));
});
