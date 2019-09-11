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
import { TodoDetailComponent } from '../components/todo-detail/todo-detail.component';
//library
//import {FormatParagraphComponent} from '../../../../projects/format-paragraph/src/lib/format-paragraph.component'
//import { FormatParagraphModule } from "format-paragraph";
import { FormatTableButtonModule } from "format-table-button";
//import { BtnLibraryComponent} from "format-table-button/lib/btn-library/btn-library.component";
//import { MyButtonModule } from "my-button";
//import { Ng2SearchPipeModule } from 'ng2-search-filter';
//import { MatButtonModule, MatSidenavModule } from '@angular/material';
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { MatChipsModule } from "@angular/material/chips";
import { MatButtonModule } from "@angular/material/button";
import { MatIconModule, MatCommonModule } from "@angular/material";
//PrimeNG
import { ButtonModule } from "primeng/components/button/button";
import {DialogModule} from 'primeng/dialog';
import {CarouselModule} from 'primeng/carousel';
import {OrderListModule} from 'primeng/orderlist';
import {TableModule} from 'primeng/table';
import {SliderModule} from 'primeng/slider';
import {DataViewModule} from 'primeng/dataview';
import {VirtualScrollerModule} from 'primeng/virtualscroller';
import {DropdownModule} from 'primeng/dropdown';
import {MultiSelectModule} from 'primeng/multiselect';
//import {BrowserModule} from '@angular/platform-browser';
//import {AccordionModule} from 'primeng/accordion';     //accordion and accordion tab
//import { MenuItem, DialogService } from "primeng/api"; //api
import { from } from "rxjs";

//Soap
import { NgxSoapModule } from 'ngx-soap';
@NgModule({
  declarations: [
    TodoComponent,
    TodoListComponent, //nhung todo list vao todo
    TodoAddComponent, //nhung todo add vao todo
    ColorComponent,
    SearchComponent,
    FilterPipe,
    TaskComponent,
    BtnEditDeComponent,
    TodoDetailComponent,
    
  ],
  imports: [
    CommonModule,
    TodoModuleRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    //library
    FormatTableButtonModule,
    //FormatParagraphModule,
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
})
export class TodoModuleModule {}
