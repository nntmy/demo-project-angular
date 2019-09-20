import { TestBed } from "@angular/core/testing";

import { FormatParagraphChangeService } from "./format-paragraph-change.service";

describe("FormatParagraphChangeService", () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it("should be created", () => {
    const service: FormatParagraphChangeService = TestBed.get(
      FormatParagraphChangeService
    );
    expect(service).toBeTruthy();
  });
});
