import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-number',
  templateUrl: './number.component.html',
  styleUrls: ['./number.component.css']
})
export class NumberComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  @Input() num:number= 0;
  @Input() selected:boolean = false;
  

  @Input() length:number = 0;
  @Output() newNumberEvent = new EventEmitter<number>();


  addNewNum(value:number):void
  {
    this.selected = true;
    this.newNumberEvent.emit(value);

  }
}
