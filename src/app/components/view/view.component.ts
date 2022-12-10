import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-view',
  templateUrl: './view.component.html',
  styleUrls: ['./view.component.css']
})
export class ViewComponent implements OnInit {

  @Input()
  item!: any;

  @Output()
  selectedItem = new EventEmitter<any>();

  @Output()
  selectedItemEdit=new EventEmitter<any>();

  constructor() { }

  ngOnInit(): void {
  }

  onClickView(data:any)
  {
    this.selectedItem.emit(data);
    
  }

  onClickEdit(data:any)
  {
    
    this.selectedItemEdit.emit(data);
    
  }
}
