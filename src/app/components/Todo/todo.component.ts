import { Component, OnInit, Input } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from "@angular/forms";
import { Message,ITodoList , ITodoListCategory , ITodoListPriority } from '../../services/data.service';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.scss'],
})
export class TodoComponent implements OnInit {
  @Input() TodoList: Array<ITodoList>;
  @Input() TodoCategory: Array<ITodoListCategory>;
  @Input() Category: ITodoListCategory;
  @Input() TodoPriority: Array<ITodoListPriority>;
  @Input() CategoryNotName:string;
  @Input() ViewItem : Function | any;
  @Input() CloseItem:Function | any;
  @Input() SelectTodo:Function | any;
  @Input() ionicForm: FormGroup;
  @Input() isModalOpen:boolean;

  constructor( private formBuilder: FormBuilder) {
    this.ionicForm = this.CreateForm();
    this.isModalOpen = false;
   }

   CreateForm(){
    return this.formBuilder.group({
      Id:[0],
      ItemName: ['', [Validators.required, Validators.minLength(4)]],
      ItemDescription:['', [Validators.required, Validators.minLength(4)]],
      ItemDueDate:[new Date(), [Validators.required]],
      ItemPriorityId:[1, [Validators.required, Validators.min(1)]],
      ItemCategoryId:[, [Validators.required, Validators.min(1)]],
      Category:[{}, [Validators.required]],
      Priority:[{}, [Validators.required]],
   })
  }
  ngOnInit() {}

  isIos() {
    const win = window as any;
    return win && win.Ionic && win.Ionic.mode === 'ios';
  }
}
