import { Component, OnInit } from '@angular/core';
import { MyServiceService } from 'src/app/service/my-service.service';
import { IProductCard } from './product.interface';
@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css'] ,

})
export class ProductsComponent implements OnInit {
  fromchld : number =0 ;
  products : IProductCard [] =[] ; 
   MyArray =[0] ; 
  constructor( private _service : MyServiceService)
   
  {

     this.products = this._service.getdata()

   }
  setclass (bl : boolean) 
  {
     if (bl)
     {
      console.log(  this.MyArray  )
      return "Trueclass"
     }
     return "Falseclass"
  }

  setmyClass(num : number )
  {
   if (num %2 ==0)
   {
     return "even"

   }
   return "odd"

  }
  

  getchildsdt(dt: any)
  {    
    console.log("dd")
    this.fromchld=dt;

  }


  ngOnInit(): void {
  
   
    this.MyArray.shift() ;
    for(let i=0 ; i<8 ; i++)
    { 
      this.MyArray.push(Math.floor(Math.random()*10))
    }

    
  }

}
