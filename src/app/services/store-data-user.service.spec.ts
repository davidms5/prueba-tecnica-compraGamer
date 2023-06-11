import { TestBed } from '@angular/core/testing';

import { StoreDataUserService } from './store-data-user.service';

describe('StoreDataUserService', () => {
  let service: StoreDataUserService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(StoreDataUserService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
