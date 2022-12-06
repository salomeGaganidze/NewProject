import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MyCompComponent } from '../my-comp/my-comp.component';
import { HeaderComponent } from '../header/header.component';
import { ChildComponent } from '../child/child.component';
import { ProductsComponent } from '../shoppindcard/products/products.component';
import { CUstomPipePipe } from '../shoppindcard/custom-pipe.pipe';
import { MyDirectiveDirective } from '../my-directive.directive';
import { StartsComponent } from '../shoppindcard/starts/starts.component';
import { TodoComponent } from '../todo/todo.component';
import { OddEvenComponent } from '../odd-even/odd-even.component';
import { ReviewFormComponent } from '../review-form/review-form.component';
import { OneproductComponent } from '../oneproduct/oneproduct.component';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { RoutingModuleModule } from './routing-module.module';
import { LoginComponent } from '../auth/login/login.component';
import { SubmmitResultComponent } from '../submmit-result/submmit-result.component';



@NgModule({
  declarations: [
    MyCompComponent,
    HeaderComponent,
    ChildComponent,
    ProductsComponent,
    CUstomPipePipe,
    MyDirectiveDirective,
    StartsComponent,
    TodoComponent,
    OddEvenComponent,
    ReviewFormComponent,
    OneproductComponent,
    LoginComponent ,
    SubmmitResultComponent
    
  ],
  imports: [
    CommonModule,
    FormsModule,
    RoutingModuleModule

  ],
  exports :
  [
    MyCompComponent,
    HeaderComponent,
    ChildComponent,
    ProductsComponent,
    CUstomPipePipe,
    MyDirectiveDirective,
    StartsComponent,
    TodoComponent,
    OddEvenComponent,
    ReviewFormComponent,
    OneproductComponent,
    LoginComponent 
  ]
})
export class MainModule { }
