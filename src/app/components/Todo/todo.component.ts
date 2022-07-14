import { Component, OnInit, Input } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from "@angular/forms";
import { DataService, ITodoList, ITodoListCategory, ITodoListPriority , TodoList } from '../../services/data.service';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.scss'],
})
export class TodoComponent implements OnInit {

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
  
  
    getTodoListCategory():Array<ITodoListCategory>{
      return this.data.getTodoListCategory();
    }
  
    async getTodoList():Promise<ITodoList[]> { 
      return await this.data.getStateStorage('TodoList').then((data : string) => { 
        let TodoList:Array<ITodoList> | Array<any> = String(data).length > 1 ?  JSON.parse(data) : [];
        return TodoList;    
      });
    }
  
    async CreateTodo() {    
      this.isModalOpen = false;
      let todos = await this.getTodoList();
      let ListTodo:Array<ITodoList> | Array<any>  = (todos?.length > 0) ? todos : [];
        ListTodo.push({...this.ionicForm.value , Id : (ListTodo?.length > 0) ? ListTodo.length + 1 : 1})
       await this.data.setStateStorage('TodoList',JSON.stringify(ListTodo));      
    }

    async UpdateTodo() {
      this.isModalOpen = false;
      const ListTodo:ITodoList[] | Array<any> = await this.getTodoList() ?? [];
        let Index = ListTodo.findIndex((todo : ITodoList) => todo.Id == Number(this.ionicForm.get('Id').value)); 
        ListTodo[Index] = this.ionicForm.value;
        await this.data.setStateStorage('TodoList',JSON.stringify(ListTodo));      
    }
  
    OpenOrSelectFormToCreate(item : ITodoList | any) {       
      this.isModalOpen = true;
      this.SetFormulario(item ??= {});
    }
  
    SetFormulario(item: ITodoList | any){
      this.ionicForm.controls['Id'].setValue(item.Id ??= 0);
      this.ionicForm.controls['ItemName'].setValue(item.ItemName ??= '' );
      this.ionicForm.controls['ItemDescription'].setValue(item.ItemDescription ??= '');
      this.ionicForm.controls['ItemDueDate'].setValue(this.fotmatDate(item.ItemDueDate ??= this.fotmatDate(new Date())));
      this.ionicForm.controls['Priority'].setValue(item.Priority ??= null);
      this.ionicForm.controls['Category'].setValue(item.Category ??= null);
      this.ionicForm.controls['ItemPriorityId'].setValue(item.ItemPriorityId ??= 1);
      this.ionicForm.controls['ItemCategoryId'].setValue(item.ItemCategoryId ??= 1);
    }

    ClenFormulario(){
      this.ionicForm.controls['Id'].setValue( 0);
      this.ionicForm.controls['ItemName'].setValue( '' );
      this.ionicForm.controls['ItemDescription'].setValue( '');
      this.ionicForm.controls['ItemDueDate'].setValue(this.fotmatDate(new Date()));
      this.ionicForm.controls['Priority'].setValue(null);
      this.ionicForm.controls['Category'].setValue(null);
      this.ionicForm.controls['ItemPriorityId'].setValue( 1);
      this.ionicForm.controls['ItemCategoryId'].setValue(1);
    }
  
    CloseItem() {
      this.isModalOpen = false;
    }
  
    CreateForm(){
      return this.formBuilder.group({
        Id:[0],
        ItemName: ['', [Validators.required, Validators.minLength(4)]],
        ItemDescription:['', [Validators.required, Validators.minLength(4)]],
        ItemDueDate:[this.fotmatDate(new Date()), [Validators.required]],
        ItemPriorityId:[1, [Validators.required, Validators.min(1)]],
        ItemCategoryId:[1, [Validators.required, Validators.min(1)]],
        Category:[{}, [Validators.required]],
        Priority:[{}, [Validators.required]],
     })
    }
  
    async ngOnInit(){
     await this.data.InitializarStore();
     this.ionicForm = this.CreateForm();
     this.isModalOpen = false;
     this.TodoCategory = this.data.getTodoListCategory();
     this.TodoPriority = this.data.getTodoListPriority();
     await this.getTodoListComplete();   
    }
  
    isIos() {
      const win = window as any;
      return win && win.Ionic && win.Ionic.mode === 'ios';
    }
  
    async getTodoListComplete() {
      await this.getTodoList().then((data:Array<ITodoList> = []) => {  
        data = (data?.length > 0) ? data : []; 
        this.TodoList = data.map((datos:ITodoList) => {
          return {
            ...datos , 
            Priority : this.data.getTodoListPriorityById(datos.ItemPriorityId),
            Category : this.data.getTodoListCategoryById(datos.ItemCategoryId)
          }
        })
       }); 
    }
    async submitForm() {
      if(Number(this.ionicForm.get('Id').value) > 0)
        await this.UpdateTodo()
        else
        await this.CreateTodo()

         await this.getTodoListComplete()
         this.ClenFormulario()
    }

    fotmatDate(newDate:Date){ 
      let date = (newDate instanceof Date) ? new Date(newDate) : new Date();    
      var year = date.getFullYear();
      var month = (1 + date.getMonth()).toString();
      month = month.length > 1 ? month : '0' + month;    
      var day = date.getDate().toString();
      day = day.length > 1 ? day : '0' + day;      
      let fullDate =  year + '-'+ month + '-' + day ;
      return fullDate;    
    }
}
