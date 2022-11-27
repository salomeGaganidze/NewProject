import { NgFor } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-review-form',
  templateUrl: './review-form.component.html',
  styleUrls: ['./review-form.component.css']
})
export class ReviewFormComponent implements OnInit {
   myRate : number = 0;
   myDate : Date = new Date ;
   myDat =  [] ; 
  constructor(private _router : Router ) { }

  ngOnInit(): void {
  }

  getchildsdt(DT : number)
  {
     this.myRate=DT;
  }

  onSubmit (form : NgForm)
  {   if (form.valid)
          {
             console.log(form.value);
             form.reset();
             this._router.navigate(['main/submit'])

            }
          else {
            console.log("Not Valid")
          }
     
  }
}
