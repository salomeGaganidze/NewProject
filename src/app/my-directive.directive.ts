import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[appMyDirective]'
})
export class MyDirectiveDirective {

  constructor(private myElement : ElementRef) {
this.myElement.nativeElement.style.color= 'Green' ; 

   }

}
