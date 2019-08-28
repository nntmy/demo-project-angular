import { Component, OnInit } from '@angular/core';
import { TodoService } from '../services/todo.service';
import { Subscription, Subject, Observable } from 'rxjs';
import { Todo } from '../todo';
import { FilterPipe } from '../filter.pipe';
import { distinctUntilChanged, debounceTime, switchMap } from 'rxjs/operators';
FilterPipe

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  public sub:Subscription;
  public todoAr:Observable<Todo[]>;
  //public todoArray:Todo[] = [];
  //public searchArr:Todo[];
  private searchTerms = new Subject<string>();
  
  //public filter:FilterPipe;
  //searchText:string;

  public todoArray: Todo[] = [];
  filTodo: Todo[];

  private _searchText: string;
  constructor(
    public todoSer:TodoService
    ) { }


    // search(term: string): void {
    //   this.searchTerms.next(term);
    //   console.log(this.searchTerms);
    // }

    get searchText(): string {
      return this._searchText;
    }
    set searchText(value: string) {
      this._searchText = value;
      this.filTodo = this.filterTodo(value);
    }
  
    filterTodo(key: string) {
      return this.todoArray.filter(
        todo => todo.title.toLowerCase().indexOf(key.toLowerCase()) !== -1
      );
    }
  ngOnInit() {
   this.showTodo();
   this.filTodo=this.todoArray;
  }
  showTodo(): void {
    this.sub = this.todoSer.getTodo().subscribe(
      data => {
        console.log(data);
        this.todoArray = data;
      },
      error => {
        console.log(`error`);
      }
    );
  }
  
}
