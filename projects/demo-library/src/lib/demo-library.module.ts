import { NgModule } from "@angular/core";
import { DemoLibraryComponent } from "./demo-library.component";
import { DemoCompomemtComponent } from "./demo-compomemt/demo-compomemt.component";

@NgModule({
  declarations: [DemoLibraryComponent, DemoCompomemtComponent],
  imports: [],
  exports: [DemoLibraryComponent, DemoCompomemtComponent]
})
export class DemoLibraryModule {}
