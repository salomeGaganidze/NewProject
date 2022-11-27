import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Iperson } from './person.interface';


@Component({
  selector: 'app-my-comp',
  templateUrl: './my-comp.component.html',
  styleUrls: ['./my-comp.component.css']
})
export class MyCompComponent implements OnInit , AfterViewInit{
   
 
@ViewChild('getuser') username! : ElementRef ;

   student :Iperson ;
   testStudent : string = '' ; 
   constructor ()
   {
       this.student = 
       {

        age: 23.9889977,
        id : 1 ,
        username:'Salome',
        img : 'https://cdn.pixabay.com/photo/2017/11/10/05/48/user-2935527_1280.png'  ,
        email : 'test@mail.com' ,
        employed : false,
        salary : 2600 ,
        phone: '588 88 88 88' ,
        website :'test.ge',
        company : {name : 'BOG' , catchphrase : 'There are millions of people who enjoy photography.' } 
     
       }
  

   }

   setName (name : string)
    {  

    if (name == '') { return }
    else  this.student.username=name ;

    }
 ngAfterViewInit(): void {
    console.log(this.username.nativeElement.innerHTML)
  }

  ngOnInit(): void {
    console.log('This is MyComp')
  }


 

}

