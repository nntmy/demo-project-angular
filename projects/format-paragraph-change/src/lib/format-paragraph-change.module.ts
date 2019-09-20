import { NgModule } from "@angular/core";
import { FormatParagraphChangeComponent } from "./format-paragraph-change.component";
import { TestChangeComponent } from "./test-change/test-change";

@NgModule({
  declarations: [FormatParagraphChangeComponent, TestChangeComponent],
  imports: [],
  exports: [FormatParagraphChangeComponent, TestChangeComponent]
})
export class FormatParagraphChangeModule {}
