import { TestBed } from '@angular/core/testing';
import { HttpClientModule }    from '@angular/common/http';
import { PeopleService } from './people.service';

describe('PeopleService', () => {
  beforeEach(() => TestBed.configureTestingModule({
    imports:[HttpClientModule]
  }));

  it('should be created', () => {
    const service: PeopleService = TestBed.get(PeopleService);
    expect(service).toBeTruthy();
  });
});
