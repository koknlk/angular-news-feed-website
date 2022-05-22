import { TestBed } from '@angular/core/testing';

import { FeednewsapiservicesService } from './feednewsapiservices.service';

describe('FeednewsapiservicesService', () => {
  let service: FeednewsapiservicesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FeednewsapiservicesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
