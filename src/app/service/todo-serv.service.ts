import { Injectable } from '@angular/core';
import { Todointerface } from '../todo/todo.interface';

@Injectable({
  providedIn: 'root'
})
export class TodoServService {
   todolist : Todointerface []  = 
  [
    {
     
      id: 1,
      title: "delectus aut autem",
      completed: false
    },
    {
  
      id: 2,
      title: "quis ut nam facilis et officia qui",
      completed: false
    },
    {

      id: 3,
      title: "fugiat veniam minus",
      completed: false
    },
    {
   
      id: 4,
      title: "et porro tempora",
      completed: true
    },
     {
      id: 5,
      title: "laboriosam mollitia et enim quasi adipisci quia provident illum",
      completed: false
    }
  ]
  constructor() { }

  getDat()
  {
     return this.todolist ;
  }
  
  addData(str : string)
  {
    const  newItem : Todointerface =
    {
      id  : Math.floor(Math.random()*10),
      title :  str ,
      completed: false
    }
   this.todolist.unshift(newItem)

  }

}
