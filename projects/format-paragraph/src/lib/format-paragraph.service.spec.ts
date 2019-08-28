import { TestBed } from '@angular/core/testing';

import { FormatParagraphService } from './format-paragraph.service';

describe('FormatParagraphService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: FormatParagraphService = TestBed.get(FormatParagraphService);
    expect(service).toBeTruthy();
  });
});
