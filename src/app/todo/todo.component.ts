import { Component, OnInit } from '@angular/core';
import { TodoServService } from '../service/todo-serv.service';
import { Todointerface } from './todo.interface';
@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent implements OnInit {
  myList : Todointerface [] = [];
  FreeTxt : string = '' ;
  constructor(private _serv : TodoServService)
   {

   }

  ngOnInit(): void {
    this.myList=this._serv.getDat()
    console.log(this._serv.getDat())
    console.log(this.myList)
  }

  add( txt : string)
  {
       this._serv.addData(txt) ;
       this.FreeTxt='' ;
       this.myList = this._serv.getDat(); 
       console.log(this.myList)
  }

}
