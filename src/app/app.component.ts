import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'lottery';

  nums:number[] = [];
  find:boolean = false;

  length:number = this.nums.length;
  
  addItem(newItem: number) {
  
    this.find = false;

    this.nums.forEach(num => {
      if(num == newItem)
      {
        this.find = true;
      }
    });
    if(this.find == false && this.nums.length <5)
    {
    this.nums.push(newItem);
    }

   
  }

  price:number=0;

  selected:boolean = false;

  addBet(value:number)
  {
    this.price += value;
  }

  clear(){
    this.price = 0;
    this.nums = [];
    this.selected = false;
  }
 

 
}
