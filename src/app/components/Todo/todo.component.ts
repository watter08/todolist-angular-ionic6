import { Component, OnInit, Input } from '@angular/core';
import { Message,ITodoList , ITodoListCategory , ITodoListPriority } from '../../services/data.service';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.scss'],
})
export class TodoComponent implements OnInit {
  @Input() TodoList: Array<ITodoList>;
  @Input() TodoCategory: Array<ITodoListCategory>;
  @Input() TodoPriority: Array<ITodoListPriority>;
  @Input() CategoryNotName:string;
  @Input() ViewItem : Function | any;

  constructor() { }

  ngOnInit() {}

  isIos() {
    const win = window as any;
    return win && win.Ionic && win.Ionic.mode === 'ios';
  }
}
