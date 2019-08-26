import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';//import module
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TodoModuleRoutingModule } from './todo-manager/todo-module/todo-module-routing.module';
import { TodoComponent } from './todo-manager/components/todo/todo.component';
import { TodoModuleModule } from './todo-manager/todo-module/todo-module.module';
//import { TodoAddComponent } from './todo-manager/components/todo-add/todo-add.component';
// import { TodoListComponent } from './todo-manager/components/todo-list/todo-list.component';





@NgModule({
  declarations: [
    AppComponent,
    //TodoAddComponent,
     // khai bao component muon dung 
  ],
  imports: [
    BrowserModule,
    TodoModuleModule,//khai bao module con
    AppRoutingModule,
    HttpClientModule,//import vao module cha
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
