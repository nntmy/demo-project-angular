import { Pipe, PipeTransform } from '@angular/core';
import {Todo} from '../todo-manager/todo';
@Pipe({
  name: 'filter',
  pure:false
})
export class FilterPipe implements PipeTransform {

  private count = 0;
  transform(todoArr: Todo[], searchText: string): Todo[] {
    this.count++;
    console.log('result'+this.count);
    if (!todoArr || !searchText) {
      return todoArr;
    }
    return todoArr.filter(todo=>todo.title.toLowerCase().indexOf(searchText.toLowerCase()) !== -1);
    // if (!searchText) {
    //   return items;
    // }
    //searchText = searchText.toLocaleLowerCase();

    // return items.filter(it => {
    //   return it.toLocaleLowerCase().includes(searchText);
    // });


  }

}
