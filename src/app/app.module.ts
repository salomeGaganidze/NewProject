import { NgModule  , NO_ERRORS_SCHEMA,CUSTOM_ELEMENTS_SCHEMA  } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { MainComponent } from './main/main.component';
import { MainModule } from './main/main.module';
import { LoginComponent } from './auth/login/login.component';
import { RoutingModuleModule } from './main/routing-module.module';
import { SubmmitResultComponent } from './submmit-result/submmit-result.component';
import { ReactiveFormComponent } from './reactive-form/reactive-form.component';

@NgModule({


  declarations: [
    AppComponent,
    MainComponent,
    ReactiveFormComponent
    
  ],

  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule ,
    MainModule,
    RoutingModuleModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  
})
export class AppModule { }
