import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TodoComponent } from './todo-manager/components/todo/todo.component';
import { TodoModuleModule } from './todo-manager/todo-module/todo-module.module';

const routes: Routes = [];

@NgModule({
  declarations:[
    
  ],
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
