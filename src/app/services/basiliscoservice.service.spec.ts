import { TestBed } from '@angular/core/testing';

import { BasiliscoserviceService } from './basiliscoservice.service';

describe('BasiliscoserviceService', () => {
  let service: BasiliscoserviceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BasiliscoserviceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
