import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http"; // import http
import { Todo } from "./../todo";
import { Observable } from "rxjs";
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
  deleteData(id: number): Observable<Todo[]> {
    return this.http.delete<Todo[]>(`${this.API}/${id}`);
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
