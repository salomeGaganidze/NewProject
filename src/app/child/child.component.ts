import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { Icompany } from '../my-comp/person.interface';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit , OnChanges { 


  @Input() childinpit : Icompany ;

  constructor() {

   this.childinpit =
    {
       name: 'Name ' ,
       catchphrase : 'Phrase '
    }


   }

  ngOnInit(): void
   {

   }

  ngOnChanges(changes: SimpleChanges): void
   {
     console.log(changes) ; 
   }
   
}
