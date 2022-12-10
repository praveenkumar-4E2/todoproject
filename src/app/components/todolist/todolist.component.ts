import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-todolist',
  templateUrl: './todolist.component.html',
  styleUrls: ['./todolist.component.css']
})
export class TodolistComponent implements OnInit {

  items:any = [
    { id:1,name:"quiz1",description:"Qui1",category:"quiz",date:"sep 9,2019",status:"in Progress"},
    { id:2,name:"quiz2",description:"Qui2",category:"quiz",date:"sep 11,2019",status:"in Progress"},
    { id:3,name:"quiz3",description:"Qui3",category:"quiz",date:"sep 14,2019",status:"in Progress"},
    { id:4,name:"quiz4",description:"Qui4",category:"quiz",date:"sep 16,2019",status:"in Progress"},
    { id:5,name:"quiz5",description:"Qui5",category:"quiz",date:"sep 18,2019",status:"in Progress"},
    { id:6,name:"quiz6",description:"assignment1",category:"quiz",date:"sep 9,2019",status:"in Progress"},
    { id:7,name:"quiz7",description:"assignment2",category:"quiz",date:"sep 9,2019",status:"in Progress"},
    { id:8,name:"quiz8",description:"assignment3",category:"quiz",date:"sep 9,2019",status:"in Progress"},
    { id:9,name:"quiz9",description:"assignment4",category:"quiz",date:"sep 9,2019",status:"in Progress"},
    { id:10,name:"quiz10",description:"assignment5",category:"quiz",date:"sep 9,2019",status:"in Progress"},
    { id:11,name:"quiz11",description:"assignment6",category:"quiz",date:"sep 9,2019",status:"in Progress"}
]



 

  childData: any;

  showView = false;
  showForm = false;
  constructor() { }

  ngOnInit(): void {
  }

  fromChild(data:any)
  {
    this.childData = data;
    this.showView = true;
  }
  fromChildEdit(data:any)
  {
    console.log('show data')
    this.childData = data;
    this.showForm = true;
  }
  closeView()
  {
    this.showView = false;
  }
  onSubmitSave(Form:any)
  {
    console.log("close form")
    this.showForm = false;
  }

  deleteItem(id:number)
  {
    this.items.splice(id, 1);
    this.items.deleteItem(id);
  }

}
