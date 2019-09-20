import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { ReactiveFormsModule } from "@angular/forms";
import { TodoModuleRoutingModule } from "./todo-module-routing.module";
import { HttpClientModule } from "@angular/common/http"; //import module
import { FormsModule } from "@angular/forms";
//component
import { TodoComponent } from "../components/todo/todo.component";
import { TodoListComponent } from "../components/todo-list/todo-list.component";
import { TodoAddComponent } from "../components/todo-add/todo-add.component";
import { SearchComponent } from "../search/search.component";
import { ColorComponent } from "../color/color.component";

import { TaskComponent } from "../components/task/task.component";
import { BtnEditDeComponent } from "../components/btn-edit-de/btn-edit-de.component";
import { TodoDetailComponent } from "../components/todo-detail/todo-detail.component";

//import { HttpClient } from "@angular/common/http";

//library

import { FormatTableButtonModule } from "format-table-button";
import { FormatParagraphChangeModule } from "format-paragraph-change";
import { DemoLibraryModule } from "demo-library";
//material
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { MatChipsModule } from "@angular/material/chips";
import { MatButtonModule } from "@angular/material/button";
import { MatIconModule, MatCommonModule } from "@angular/material";
//PrimeNG
import { ButtonModule } from "primeng/components/button/button";
import { DialogModule } from "primeng/dialog";
import { TableModule } from "primeng/table";
import { SliderModule } from "primeng/slider";
import { VirtualScrollerModule } from "primeng/virtualscroller";
import { DropdownModule } from "primeng/dropdown";
import { MultiSelectModule } from "primeng/multiselect";

//Soap
import { NgxSoapModule } from "ngx-soap";
import { from } from "rxjs";
@NgModule({
  declarations: [
    TodoComponent,
    TodoListComponent, //nhung todo list vao todo
    TodoAddComponent, //nhung todo add vao todo
    ColorComponent,
    SearchComponent,

    TaskComponent,
    BtnEditDeComponent,
    TodoDetailComponent
  ],
  imports: [
    DemoLibraryModule,
    CommonModule,
    TodoModuleRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    //library
    FormatTableButtonModule,
    FormatParagraphChangeModule,

    //MyButtonModule,
    //material
    FormsModule,
    MatChipsModule,
    MatButtonModule,
    MatIconModule,
    MatCommonModule,

    BrowserAnimationsModule,

    //PrimeNG
    //MatSidenavModule
    //AccordionModule,
    //BrowserModule,
    ButtonModule,
    DialogModule,
    TableModule,
    VirtualScrollerModule,
    SliderModule,
    DropdownModule,
    MultiSelectModule,
    //Soap
    NgxSoapModule
  ],
  exports: [
    TodoComponent //export de module cha co the goi va su dung <app-todo>
  ]
  //providers: [HttpClient]
})
export class TodoModuleModule {}
