import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-bet',
  templateUrl: './bet.component.html',
  styleUrls: ['./bet.component.css']
})
export class BetComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  @Input() num:number= 0;

  @Output() newBetEvent = new EventEmitter<number>(); 
 
 addNewBet(value:number):void
 {
   
   this.newBetEvent.emit(value);
 
 }

}
