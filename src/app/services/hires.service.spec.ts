import { TestBed, inject } from '@angular/core/testing';

import { HiresService } from './hires.service';

describe('HiresService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [HiresService]
    });
  });

  it('should be created', inject([HiresService], (service: HiresService) => {
    expect(service).toBeTruthy();
  }));
});
