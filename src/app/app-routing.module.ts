import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Route, RouterModule } from '@angular/router';
import { ProductsComponent } from './shoppindcard/products/products.component';
import { TodoComponent } from './todo/todo.component';
import { OddEvenComponent } from './odd-even/odd-even.component';
import { ReviewFormComponent } from './review-form/review-form.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { MainComponent } from './main/main.component';
import { LoginComponent } from './auth/login/login.component';
import { HeaderComponent } from './header/header.component';


const ROUTES : Route [] =  
[
{
  path : 'main' ,
  loadChildren : () => import ('./main/main.module').then(m => m.MainModule)
}
 ,
{
  path : '' ,
  redirectTo : 'main',
  pathMatch: 'full'
}
,
{
  path : '**' ,
  component : PageNotFoundComponent
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
