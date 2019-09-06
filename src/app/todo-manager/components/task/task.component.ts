import { Component, OnInit,Input } from '@angular/core';
import {Todo} from '../../todo';
@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.css']
})
export class TaskComponent implements OnInit {



  @Input() task: Todo;
  constructor() {
  console.log('task',this.task);

   }

  ngOnInit() {
  }

}
