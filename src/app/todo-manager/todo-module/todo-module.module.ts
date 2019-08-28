import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { TodoModuleRoutingModule } from './todo-module-routing.module';
import { HttpClientModule } from '@angular/common/http';//import module
import { FormsModule } from '@angular/forms';
//component
import { TodoComponent } from '../components/todo/todo.component';
import { TodoListComponent } from '../components/todo-list/todo-list.component';
import { TodoAddComponent } from '../components/todo-add/todo-add.component';
import { SearchComponent } from '../search/search.component';
import { ColorComponent } from '../color/color.component';
import { FilterPipe } from '../filter.pipe';
//library
import {FormatTableButtonComponent} from 'format-table-button/format-table-button';
import { FormatTableButtonModule } from 'format-table-button';
//import { Ng2SearchPipeModule } from 'ng2-search-filter';
//import { MatButtonModule, MatSidenavModule } from '@angular/material';
//import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import{MatChipsModule} from '@angular/material/chips';
import{MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material'
import { from } from 'rxjs';
@NgModule({
  declarations: [
    TodoComponent,
    TodoListComponent,//nhung todo list vao todo
    TodoAddComponent,//nhung todo add vao todo
    ColorComponent,
    SearchComponent,
    FilterPipe
    
  ],
  imports: [
    CommonModule,
    TodoModuleRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    FormatTableButtonModule,
    FormsModule,
    MatChipsModule,
    MatButtonModule,
    MatIconModule // import 

    //BrowserAnimationsModule,
    //MatButtonModule,
  
    //MatSidenavModule
  
  ],
  exports: [
    TodoComponent,//export de module cha co the goi va su dung <app-todo> 
  ],
    
})
export class TodoModuleModule { }
