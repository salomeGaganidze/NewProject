import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-odd-even',
  templateUrl: './odd-even.component.html',
  styleUrls: ['./odd-even.component.css']
})
export class OddEvenComponent implements OnInit {
  MyArray =[0] ; 
  constructor() { }

  setmyClass(num : number )
  {
   if (num %2 ==0)
   {
     return "even"

   }
   return "odd"

  }
  ngOnInit(): void {

    this.MyArray.shift() ;
    for(let i=0 ; i<8 ; i++)
    { 
      this.MyArray.push(Math.floor(Math.random()*10))
    }

  }

}
