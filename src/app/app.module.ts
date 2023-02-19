import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { VistaDosComponent } from './vista-dos/vista-dos.component';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { RouterModule, Routes } from '@angular/router';
import { TablaComponent } from './tabla/tabla.component';
import { ContactFormComponent } from './contact-form/contact-form.component';


@NgModule({
  declarations: [
    AppComponent,
    VistaDosComponent,
    HomeComponent,
    LoginComponent,
    TablaComponent,
    ContactFormComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot([
      { path: 'contacto', component:ContactFormComponent },
      { path: 'login', component:LoginComponent },
      { path: 'tabla', component:TablaComponent },
      
      { path: 'home', component:HomeComponent },
      
      {path:'vista-dos',component:VistaDosComponent}
    ]),
  
  ],
  providers: [],
  bootstrap: [AppComponent]
})


export class AppModule { }
