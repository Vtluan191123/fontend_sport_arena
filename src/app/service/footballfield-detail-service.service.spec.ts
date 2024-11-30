import { TestBed } from '@angular/core/testing';

import { FootballfieldDetailServiceService } from './footballfield-detail-service.service';

describe('FootballfieldDetailServiceService', () => {
  let service: FootballfieldDetailServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FootballfieldDetailServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
