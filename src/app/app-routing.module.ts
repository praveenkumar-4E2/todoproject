import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContactComponent } from './components/contact/contact.component';
import { HelpComponent } from './components/help/help.component';
import { HomeComponent } from './components/home/home.component';

import { TodolistComponent } from './components/todolist/todolist.component';
import { ViewComponent } from './components/view/view.component';

const routes: Routes = [
  {
    path: "home",
    component:HomeComponent
  },
  {
    path: "todolist",
    component:TodolistComponent
  },
  {
    path: "contact",
    component:ContactComponent
    
  },
  {
    path: "help",
    component:HelpComponent
  },
  {
    path: "view",
    component:ViewComponent
  },
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
