import { TestBed } from '@angular/core/testing';

import { RemfromcartService } from './remfromcart.service';

describe('RemfromcartService', () => {
  let service: RemfromcartService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RemfromcartService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
