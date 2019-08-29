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
import { FilterPipe } from "../filter.pipe";
import { TaskComponent } from "../components/task/task.component";
import { BtnEditDeComponent } from "../components/btn-edit-de/btn-edit-de.component";
//library
//import {FormatParagraphComponent} from '../../../../projects/format-paragraph/src/lib/format-paragraph.component'
import { FormatParagraphModule } from "format-paragraph";
import { FormatTableButtonModule } from "format-table-button";
import { MyButtonModule } from "my-button";
//import { Ng2SearchPipeModule } from 'ng2-search-filter';
//import { MatButtonModule, MatSidenavModule } from '@angular/material';
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { MatChipsModule } from "@angular/material/chips";
import { MatButtonModule } from "@angular/material/button";
import { MatIconModule, MatCommonModule } from "@angular/material";
//PrimeNG
import { ButtonModule } from "primeng/components/button/button";
//import {BrowserModule} from '@angular/platform-browser';
//import {AccordionModule} from 'primeng/accordion';     //accordion and accordion tab
import { MenuItem } from "primeng/api"; //api
import { from } from "rxjs";
@NgModule({
  declarations: [
    TodoComponent,
    TodoListComponent, //nhung todo list vao todo
    TodoAddComponent, //nhung todo add vao todo
    ColorComponent,
    SearchComponent,
    FilterPipe,
    TaskComponent,
    BtnEditDeComponent
  ],
  imports: [
    CommonModule,
    TodoModuleRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    //library
    FormatTableButtonModule,
    FormatParagraphModule,
    MyButtonModule,
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
    ButtonModule
  ],
  exports: [
    TodoComponent //export de module cha co the goi va su dung <app-todo>
  ]
})
export class TodoModuleModule {}
