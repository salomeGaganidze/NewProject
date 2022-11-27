import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Route, RouterModule } from '@angular/router';
import { LoginComponent } from '../auth/login/login.component';
import { ReviewFormComponent } from '../review-form/review-form.component';
import { MainComponent } from './main.component';
import { HeaderComponent } from '../header/header.component';
import { ProductsComponent } from '../shoppindcard/products/products.component';
import { TodoComponent } from '../todo/todo.component';
import { OddEvenComponent } from '../odd-even/odd-even.component';
import { SubmmitResultComponent } from '../submmit-result/submmit-result.component';

const ROUTES : Route [] = 
[

{
  path : '',
  component : MainComponent,
  children : 
  [
    {
  path :'products',
  component : ProductsComponent,
   }
,
{
  path :'todo',
  component : TodoComponent,
},

{
  path : 'oddeven',
  component : OddEvenComponent
},
{
  path : 'reviewform' ,
  component : ReviewFormComponent
}
,
{
  path:'submit',
  component : SubmmitResultComponent
}
  ]

}
  ]
;

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forChild(ROUTES)
  ] ,
  exports : [RouterModule]
})
export class RoutingModuleModule { }
