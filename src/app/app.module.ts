import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TodolistComponent } from './components/todolist/todolist.component';
import { HelpComponent } from './components/help/help.component';
import { ContactComponent } from './components/contact/contact.component';
import { NavbarComponent } from './navbar/navbar.component';

import { ViewComponent } from './components/view/view.component';
import { FormsModule } from '@angular/forms';
import { HomeComponent } from './components/home/home.component';

@NgModule({
  declarations: [
    AppComponent,
    TodolistComponent,
    HelpComponent,
    ContactComponent,
    NavbarComponent,
    ViewComponent,
    HomeComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
