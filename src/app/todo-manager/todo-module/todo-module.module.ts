import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { TodoModuleRoutingModule } from './todo-module-routing.module';
import { HttpClientModule } from '@angular/common/http';//import module
//component
import { TodoComponent } from '../components/todo/todo.component';
import { TodoListComponent } from '../components/todo-list/todo-list.component';
import { TodoAddComponent } from '../components/todo-add/todo-add.component';
@NgModule({
  declarations: [
    TodoComponent,
    TodoListComponent,//nhung todo list vao todo
    TodoAddComponent,//nhung todo add vao todo
    
  ],
  imports: [
    CommonModule,
    TodoModuleRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
  ],
  exports: [
    TodoComponent,//export de module cha co the goi va su dung <app-todo> 
  ],
    
})
export class TodoModuleModule { }
