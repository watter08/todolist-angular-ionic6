import { Component  } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from "@angular/forms";
import { DataService, ITodoList, ITodoListCategory, ITodoListPriority, Message , TodoList } from '../services/data.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  constructor(private data: DataService, private formBuilder: FormBuilder) {
    this.ionicForm = this.CreateForm();
    this.isModalOpen = false;
  }
  CategoryNotName:string = 'Sin Nombre De Categoria';
  TodoList:Array<ITodoList> = [];
  TodoPriority:Array<ITodoListPriority> = [];
  TodoCategory:Array<ITodoListCategory> = [];
  isModalOpen:boolean = false;
  ionicForm: FormGroup;

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

  ViewItem(item) {
  }

  SelectTodo(item : ITodoList){
    debugger
    this.isModalOpen = true;
    this.ionicForm.setValue({...item , ItemDueDate : item.ItemDueDate.toJSON()});
    // this.ionicForm.controls['Id'].setValue(item.Id);
    // this.ionicForm.controls['ItemName'].setValue(item.ItemName);
    // this.ionicForm.controls['ItemDescription'].setValue(item.ItemDescription);
    // this.ionicForm.controls['ItemDueDate'].setValue(item.ItemDueDate);
    // this.ionicForm.controls['Priority'].setValue(item.Priority);
    // this.ionicForm.controls['Category'].setValue(item.Category);
    // this.ionicForm.controls['ItemPriorityId'].setValue(item.ItemPriorityId);
    // this.ionicForm.controls['ItemCategoryId'].setValue(item.ItemCategoryId);
  }

  CloseItem() {
    this.isModalOpen = false;
  }

  CreateForm(){
    return this.formBuilder.group({
      Id:[0],
      ItemName: ['', [Validators.required, Validators.minLength(4)]],
      ItemDescription:['', [Validators.required, Validators.minLength(4)]],
      ItemDueDate:[new Date().toJSON(), [Validators.required]],
      ItemPriorityId:[1, [Validators.required, Validators.min(1)]],
      ItemCategoryId:[, [Validators.required, Validators.min(1)]],
      Category:[{}, [Validators.required]],
      Priority:[{}, [Validators.required]],
   })
  }
  ngOnInit(){
    this.ionicForm = this.CreateForm();
    this.isModalOpen = false;
   this.TodoCategory = this.data.getTodoListCategory();
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

  submitForm() {
    console.log(this.ionicForm.value)
  }
}
