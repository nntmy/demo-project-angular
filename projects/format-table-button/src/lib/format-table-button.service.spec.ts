import { TestBed } from '@angular/core/testing';

import { FormatTableButtonService } from './format-table-button.service';

describe('FormatTableButtonService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: FormatTableButtonService = TestBed.get(FormatTableButtonService);
    expect(service).toBeTruthy();
  });
});
