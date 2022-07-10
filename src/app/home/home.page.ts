import { Component , ViewChild } from '@angular/core';
import { IonInfiniteScroll } from '@ionic/angular';
import { DataService, ITodoList, ITodoListCategory, ITodoListPriority, Message } from '../services/data.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  constructor(private data: DataService) {}
  CategoryNotName:string = 'Sin Nombre De Categoria';
  TodoList:Array<ITodoList> = [];
  TodoPriority:Array<ITodoListPriority> = [];

  @ViewChild(IonInfiniteScroll) infiniteScroll: IonInfiniteScroll;

  refresh(ev) {
    setTimeout(() => {
      ev.detail.complete();
    }, 3000);
  }

  getMessages(): Message[] {
    return this.data.getMessages();
  }

  getTodoListCategory():Array<ITodoListCategory>{
    return this.data.getTodoListCategory();
  }

  filterTodoList(Todo: ITodoList , Id: number) {
    return Todo.Id === Id;
  }

  viewItem(){}

  ngOnInit(){
    this.TodoList = this.data.getTodoList().map((data:ITodoList) => {
      return {
        ...data , 
        Priority : this.data.getTodoListPriorityById(data.ItemPriorityId),
        Category : this.data.getTodoListCategoryById(data.ItemCategoryId)
      }
    });
    this.TodoPriority = this.data.getTodoListPriority();
  }

  isIos() {
    const win = window as any;
    return win && win.Ionic && win.Ionic.mode === 'ios';
  }
}
