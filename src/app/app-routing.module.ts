import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Route, RouterModule } from '@angular/router';
import { ProductsComponent } from './shoppindcard/products/products.component';
import { TodoComponent } from './todo/todo.component';
import { OddEvenComponent } from './odd-even/odd-even.component';
import { ReviewFormComponent } from './review-form/review-form.component';


const ROUTES : Route [] =  
[

{
  path :'',
  component : ProductsComponent,
  pathMatch : 'full'
 
}
,
{
  path :'products',
  component : ProductsComponent,
  pathMatch : 'full'
}
,
{
  path :'todo',
  component : TodoComponent,
  pathMatch : 'full'
},
{
  path :'home',
  redirectTo : '' 
} ,
{
  path : 'oddeven',
  component : OddEvenComponent
},
{
  path : 'reviewform' ,
  component : ReviewFormComponent
}

];
export const myRout = RouterModule.forRoot(ROUTES);
@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(ROUTES)
  ],
  exports : [RouterModule]
})
export class AppRoutingModule { }
