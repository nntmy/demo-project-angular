import { NgModule } from "@angular/core";
import { FormatTableButtonComponent } from "./format-table-button.component";
import { CommonModule } from "@angular/common";
//component
import { BtnLibraryComponent } from "./btn-library/btn-library.component";
import { TableDataComponent } from './table-data/table-data.component';
import { BtnDialogComponent } from './btn-dialog/btn-dialog.component';
import { ShowDialogComponent } from './show-dialog/show-dialog.component';
import { BtnDeleteComponent } from './btn-delete/btn-delete.component';
//primeNG
import { ButtonModule } from "primeng/components/button/button";
import {DialogModule} from 'primeng/dialog';



@NgModule({
  declarations: 
  [
    FormatTableButtonComponent, 
    BtnLibraryComponent,
     TableDataComponent,
     BtnDialogComponent,
     ShowDialogComponent,
     BtnDeleteComponent,
  ],
  imports: 
  [
    ButtonModule,
    DialogModule,
    CommonModule
  ],
  exports: 
  [
    FormatTableButtonComponent,
    BtnLibraryComponent,
    TableDataComponent,
    BtnDialogComponent,
    ShowDialogComponent,
    BtnDeleteComponent,
   
  ]
})
export class FormatTableButtonModule {}
