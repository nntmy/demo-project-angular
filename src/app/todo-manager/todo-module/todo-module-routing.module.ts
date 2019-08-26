import { TodoAddComponent } from './../components/todo-add/todo-add.component';
import { TodoListComponent } from './../components/todo-list/todo-list.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: '/todoList', pathMatch: 'full' },
  { path: 'todoList', component: TodoListComponent },
  { path: 'add', component: TodoAddComponent },
  { path: 'edit/:id', component: TodoAddComponent }
];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TodoModuleRoutingModule { }
