import { Injectable } from '@angular/core';

export interface Message {
  fromName: string;
  subject: string;
  date: string;
  id: number;
  read: boolean;
}

export interface ITodoList {
  Id:number;
  ItemName: string;
  ItemDescription:string;
  ItemDueDate:Date;
  Priority:ITodoListPriority;
  Category:ITodoListCategory;
  ItemPriorityId:number;
  ItemCategoryId:number;
}

export interface ITodoListCategory{
  Id:number;
  Name:string;
  Color:string;
}

export interface ITodoListPriority{
  Id:number;
  Name:string;
  Color:string;
}

@Injectable({
  providedIn: 'root'
})
export class DataService {

  public TodoListCategory:Array<ITodoListCategory> = [
    {
      Id:1,
      Name:'Quehaceres',
      Color:'#41C7AF'
    },
    {
      Id:2,
      Name:'Aprendizaje',
      Color:'#ABC7FF'
    },
    {
      Id:3,
      Name:'Cuidado Del Cuerpo',
      Color:'#A16BFE'
    },
    {
      Id:4,
      Name:'Proyectos',
      Color:'#323B42'
    },
    {
      Id:5,
      Name:'Tareas',
      Color:'#FAF8F9'
    },
  ]

  public TodoListPriority:Array<ITodoListPriority> = [
    {
      Id:1,
      Name:'Baja',
      Color:'#48CFAD'
    },
    {
      Id:2,
      Name:'Media',
      Color:'#FFCE54'
    },
    {
      Id:3,
      Name:'Alta',
      Color:'#D8334A'
    },
  ]
  public TodoList:ITodoList[] = [
    {
      Id:1,
      ItemName: 'GYM',
      ItemDescription:'hello lkadskljsakl aksjdhakjsdhka jahsgdjkaghs kajsdhkjasdh',
      ItemDueDate:new Date(),
      ItemPriorityId:1,
      ItemCategoryId:1,
      Category:null,
      Priority:null,
    },
    {
      Id:2,
      ItemName: 'Limpiar Casa',
      ItemDescription:'hello lkadskljsakl aksjdhakjsdhka jahsgdjkaghs kajsdhkjasdh',
      ItemDueDate:new Date(),
      ItemPriorityId:1,
      ItemCategoryId:1,
      Category:null,
      Priority:null,
    },
    {
      Id:3,
      ItemName: 'Generacion Dinero',
      ItemDescription:'hello lkadskljsakl aksjdhakjsdhka jahsgdjkaghs kajsdhkjasdh',
      ItemDueDate:new Date(),
      ItemPriorityId:2,
      ItemCategoryId:2,
      Category:null,
      Priority:null,
    },
    {
      Id:4,
      ItemName: 'Hacer Ejercicios',
      ItemDescription:'hello lkadskljsakl aksjdhakjsdhka jahsgdjkaghs kajsdhkjasdh',
      ItemDueDate:new Date(),
      ItemPriorityId:3,
      ItemCategoryId:3,
      Category:null,
      Priority:null,
    },
    {
      Id:5,
      ItemName: 'Meditar',
      ItemDescription:'hello lkadskljsakl aksjdhakjsdhka jahsgdjkaghs kajsdhkjasdh',
      ItemDueDate:new Date(),
      ItemPriorityId:5,
      ItemCategoryId:5,
      Category:null,
      Priority:null,
    },
    {
      Id:1,
      ItemName: 'GYM',
      ItemDescription:'hello lkadskljsakl aksjdhakjsdhka jahsgdjkaghs kajsdhkjasdh',
      ItemDueDate:new Date(),
      ItemPriorityId:1,
      ItemCategoryId:1,
      Category:null,
      Priority:null,
    },
    {
      Id:2,
      ItemName: 'Limpiar Casa',
      ItemDescription:'hello lkadskljsakl aksjdhakjsdhka jahsgdjkaghs kajsdhkjasdh',
      ItemDueDate:new Date(),
      ItemPriorityId:1,
      ItemCategoryId:1,
      Category:null,
      Priority:null,
    },
    {
      Id:3,
      ItemName: 'Generacion Dinero',
      ItemDescription:'hello lkadskljsakl aksjdhakjsdhka jahsgdjkaghs kajsdhkjasdh',
      ItemDueDate:new Date(),
      ItemPriorityId:2,
      ItemCategoryId:2,
      Category:null,
      Priority:null,
    },
    {
      Id:4,
      ItemName: 'Hacer Ejercicios',
      ItemDescription:'hello lkadskljsakl aksjdhakjsdhka jahsgdjkaghs kajsdhkjasdh',
      ItemDueDate:new Date(),
      ItemPriorityId:3,
      ItemCategoryId:3,
      Category:null,
      Priority:null,
    },
    {
      Id:5,
      ItemName: 'Meditar',
      ItemDescription:'hello lkadskljsakl aksjdhakjsdhka jahsgdjkaghs kajsdhkjasdh',
      ItemDueDate:new Date(),
      ItemPriorityId:5,
      ItemCategoryId:5,
      Category:null,
      Priority:null,
    },
    {
      Id:1,
      ItemName: 'GYM',
      ItemDescription:'hello lkadskljsakl aksjdhakjsdhka jahsgdjkaghs kajsdhkjasdh',
      ItemDueDate:new Date(),
      ItemPriorityId:1,
      ItemCategoryId:1,
      Category:null,
      Priority:null,
    },
    {
      Id:2,
      ItemName: 'Limpiar Casa',
      ItemDescription:'hello lkadskljsakl aksjdhakjsdhka jahsgdjkaghs kajsdhkjasdh',
      ItemDueDate:new Date(),
      ItemPriorityId:1,
      ItemCategoryId:1,
      Category:null,
      Priority:null,
    },
    {
      Id:3,
      ItemName: 'Generacion Dinero',
      ItemDescription:'hello lkadskljsakl aksjdhakjsdhka jahsgdjkaghs kajsdhkjasdh',
      ItemDueDate:new Date(),
      ItemPriorityId:2,
      ItemCategoryId:2,
      Category:null,
      Priority:null,
    },
    {
      Id:4,
      ItemName: 'Hacer Ejercicios',
      ItemDescription:'hello lkadskljsakl aksjdhakjsdhka jahsgdjkaghs kajsdhkjasdh',
      ItemDueDate:new Date(),
      ItemPriorityId:3,
      ItemCategoryId:3,
      Category:null,
      Priority:null,
    },
    {
      Id:5,
      ItemName: 'Meditar',
      ItemDescription:'hello lkadskljsakl aksjdhakjsdhka jahsgdjkaghs kajsdhkjasdh',
      ItemDueDate:new Date(),
      ItemPriorityId:5,
      ItemCategoryId:5,
      Category:null,
      Priority:null,
    },
  ]


  public messages: Message[] = [
    {
      fromName: 'Matt Chorsey',
      subject: 'New event: Trip to Vegas',
      date: '9:32 AM',
      id: 0,
      read: false
    },
    {
      fromName: 'Lauren Ruthford',
      subject: 'Long time no chat',
      date: '6:12 AM',
      id: 1,
      read: false
    },
    {
      fromName: 'Jordan Firth',
      subject: 'Report Results',
      date: '4:55 AM',
      id: 2,
      read: false
    },
    {
      fromName: 'Bill Thomas',
      subject: 'The situation',
      date: 'Yesterday',
      id: 3,
      read: false
    },
    {
      fromName: 'Joanne Pollan',
      subject: 'Updated invitation: Swim lessons',
      date: 'Yesterday',
      id: 4,
      read: false
    },
    {
      fromName: 'Andrea Cornerston',
      subject: 'Last minute ask',
      date: 'Yesterday',
      id: 5,
      read: false
    },
    {
      fromName: 'Moe Chamont',
      subject: 'Family Calendar - Version 1',
      date: 'Last Week',
      id: 6,
      read: false
    },
    {
      fromName: 'Kelly Richardson',
      subject: 'Placeholder Headhots',
      date: 'Last Week',
      id: 7,
      read: false
    }
  ];

  constructor() { }

  public getMessages(): Message[] {
    return this.messages;
  }

  public getMessageById(id: number): Message {
    return this.messages[id];
  }

  public getTodoList():Array<ITodoList> {
    return this.TodoList;
  }
  public getTodoListById(id:number):ITodoList {
    return this.TodoList.find((a:ITodoList) => a.Id === id);
  }

  public getTodoListPriority():Array<ITodoListPriority> {
    return this.TodoListPriority;
  }
  public getTodoListPriorityById(id:number):ITodoListPriority {
    return this.TodoListPriority.find((a:ITodoListPriority) => a.Id === id);
  }

  public getTodoListCategory():Array<ITodoListCategory> {
    return this.TodoListCategory;
  }
  public getTodoListCategoryById(id:number):ITodoListCategory {
    return this.TodoListCategory.find((a:ITodoListCategory) => a.Id === id);
  }

}
