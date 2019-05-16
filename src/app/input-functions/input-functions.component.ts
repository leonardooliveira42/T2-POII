import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-input-functions',
  templateUrl: './input-functions.component.html',
  styleUrls: ['./input-functions.component.css']
})
export class InputFunctionsComponent implements OnInit {

  quantVar = 0;
  function = "";
  startX = [];
  pre = 0;

  @Output() objectEvent = new EventEmitter<object>();

  constructor() { }

  ngOnInit() {
  }

  createRange(number){
    var items: number[] = [];
    for(var i = 0; i < number; i++){
       items.push(i);
    }
    return items;
  }

  SendObject(){
    const aux = {
        qV: this.quantVar,
        fun: this.function,
        X0: this.startX,
        precisao: this.pre
    };
    this.objectEvent.emit(aux);
  }

}
