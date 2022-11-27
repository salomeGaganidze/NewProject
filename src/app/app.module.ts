import { NgModule  , NO_ERRORS_SCHEMA,CUSTOM_ELEMENTS_SCHEMA  } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { MyCompComponent } from './my-comp/my-comp.component';
import { HeaderComponent } from './header/header.component';
import { FormsModule } from '@angular/forms';
import { ChildComponent } from './child/child.component';
import { ProductsComponent } from './shoppindcard/products/products.component';
import { CUstomPipePipe } from './shoppindcard/custom-pipe.pipe';
import { MyDirectiveDirective } from './my-directive.directive';
import { StartsComponent } from './shoppindcard/starts/starts.component';
import { MyServiceService } from './service/my-service.service';
import { TodoComponent } from './todo/todo.component';
import { AppRoutingModule, myRout } from './app-routing.module';
import { OddEvenComponent } from './odd-even/odd-even.component';
import { ReviewFormComponent } from './review-form/review-form.component';
import { OneproductComponent } from './oneproduct/oneproduct.component';

@NgModule({
  declarations: [
    AppComponent,
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
    OneproductComponent
  
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule 
  ],
  providers: [],
  bootstrap: [AppComponent],
 
})
export class AppModule { }
