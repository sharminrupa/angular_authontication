import { TestBed } from '@angular/core/testing';

import { MyServeceService } from './my-servece.service';

describe('MyServeceService', () => {
  let service: MyServeceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MyServeceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
