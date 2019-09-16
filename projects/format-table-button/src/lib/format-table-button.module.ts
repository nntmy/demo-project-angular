import { NgModule } from "@angular/core";
import { FormatTableButtonComponent } from "./format-table-button.component";
import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";
//component
import { BtnLibraryComponent } from "./btn-library/btn-library.component";
import { TableDataComponent } from "./table-data/table-data.component";
import { BtnDialogComponent } from "./btn-dialog/btn-dialog.component";
import { ShowDialogComponent } from "./show-dialog/show-dialog.component";
import { BtnDeleteComponent } from "./btn-delete/btn-delete.component";
//primeNG
import { ButtonModule } from "primeng/components/button/button";
import { DialogModule } from "primeng/dialog";
import { TableModule } from "primeng/table";
import { SliderModule } from "primeng/slider";
import { DropdownModule } from "primeng/dropdown";
import { MultiSelectModule } from "primeng/multiselect";
import { CalendarModule } from "primeng/calendar";

@NgModule({
  declarations: [
    FormatTableButtonComponent,
    BtnLibraryComponent,
    TableDataComponent,
    BtnDialogComponent,
    ShowDialogComponent,
    BtnDeleteComponent
  ],
  imports: [
    ButtonModule,
    DialogModule,
    CommonModule,
    TableModule,
    SliderModule,
    DropdownModule,
    MultiSelectModule,
    FormsModule,
    CalendarModule
  ],
  exports: [
    FormatTableButtonComponent,
    BtnLibraryComponent,
    TableDataComponent,
    BtnDialogComponent,
    ShowDialogComponent,
    BtnDeleteComponent
  ]
})
export class FormatTableButtonModule {}
