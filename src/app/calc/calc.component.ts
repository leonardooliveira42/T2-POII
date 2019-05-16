import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MethodsService } from '../services/methods.service';

@Component({
  selector: 'app-calc',
  templateUrl: './calc.component.html',
  styleUrls: ['./calc.component.css']
})
export class CalcComponent implements OnInit {

  methodNames = ["Coordenadas Cíclicas", "Hooke and Jeeves", "Gradiente", "Newton", 
  "Gradiente Conjugado Generalizado", "Fletcher and Reeves", "Davidon-Fletcher-Powell"];
  method: any;
  collapseState = false;
  obj = null;

  constructor(private route: ActivatedRoute, 
              private poMethods: MethodsService) { }

  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      this.method = params.get("id");
    });
  }

  show() {
    this.collapseState = !this.collapseState;    
  }

  ReceiveObject($event) {
      this.obj = $event;
      console.log(this.obj);

      // Testar a função 
      this.TestFunction(this.obj.fun);
  }

  TestFunction (func: string) {
      this.poMethods.TestarFuncao(func); 
  }
}
