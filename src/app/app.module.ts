import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';//import module
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TodoModuleRoutingModule } from './todo-manager/todo-module/todo-module-routing.module';
import { TodoComponent } from './todo-manager/components/todo/todo.component';
import { TodoModuleModule } from './todo-manager/todo-module/todo-module.module';
//import { SearchComponent } from './todo-manager/search/search.component';
//import { FilterPipe } from './todo-manager/filter.pipe';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatSidenavModule} from '@angular/material/sidenav';
//import {MatChipsModule} from '@angular/material/chips';
import {NoopAnimationsModule} from '@angular/platform-browser/animations';
import { from } from 'rxjs';

//import { MdCardModule, MdInputModule } from '@angular/material';

@NgModule({
  declarations: [
    AppComponent,
    
    
    //TodoAddComponent,
     // khai bao component muon dung 
  ],
  imports: [
    FormsModule,
    BrowserModule,
    TodoModuleModule,//khai bao module con
    AppRoutingModule,
    HttpClientModule,//import vao module cha
    MatButtonModule,
    MatSidenavModule,
    BrowserAnimationsModule,
    //MatChipsModule,//import module cha
    NoopAnimationsModule
    
  ],
  exports: [
    MatButtonModule,
    //MatChipsModule,//export
    NoopAnimationsModule
  ],
  providers: [
   
    
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
