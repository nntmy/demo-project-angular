import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http"; // import http
import { Todo } from "./../todo";
import { Observable, of } from "rxjs";
//import { environment } from 'src/environments/environment';
//import { catchError, map, tap } from 'rxjs/operators';

Observable;
Todo;
HttpClient;
@Injectable({
  providedIn: "root"
})
export class TodoService {
  //public todoArray:Todo[]=[];
  public API: string = "http://localhost:3000/task"; // khai bao url
  constructor(public http: HttpClient) {}

  //phuong thuc lay object tu url
  getTodo(): Observable<Todo[]> {
    return this.http.get<Todo[]>(this.API);
  }

  //lay object theo id
  getTodoId(id: number): Observable<Todo> {
    return this.http.get<Todo>(`${this.API}/${id}`);
  }

  // phuong thuc post gui data len service ,sau khi add data lap tuc tra data[]
  addNewtask(oTodo: Todo): Observable<Todo[]> {
    return this.http.post<Todo[]>(this.API, oTodo);
  }

  // luu thay doi data
  saveData(task: Todo): Observable<Todo[]> {
    return this.http.put<Todo[]>(`${this.API}/${task.id}`, task);
  }

  // xoa data
  deleteData(todo:Todo|number): Observable<Todo[]> {
    const id = typeof todo === 'number' ? todo : todo.id;
    //const url = `${this.heroesUrl}/${id}`;
    return this.http.delete<Todo[]>(`${this.API}/${id}`);
  }

  //search 
  // searchTodo(title: string): Observable<Todo[]> {
  //   if (!title.trim()) {
  //     // if not search term, return empty hero array.
  //     return of([]);
  //   }
  //   return this.http.get<Todo[]>(`${this.API}/?title=${title}`);
    
  // }

  searchTodo(text: string): Observable<Todo[]> {
    if (!text.trim()) {
      // if not search text, return empty hero array.
      return of([]);
    }
    return this.http.get<Todo[]>(`${this.API}/?title=${text}`);
    
  }
    


  // xu ly bat loi
  handleError(err) {
    // kiem tra err thuoc kieu du lieu error
    if (err.error instanceof Error) {
      console.log(`client error : ${err.error.message}`);
    } else {
      console.log(`server error : ${err.status}`);
    }
  }
}
