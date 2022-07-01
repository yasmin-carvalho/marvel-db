import { TestBed } from '@angular/core/testing';

import { CharactersService } from './characters.service';

describe('CharactersServiceService', () => {
  let service: CharactersService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CharactersService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
