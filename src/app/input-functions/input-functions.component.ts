import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Observable } from 'rxjs';
import { MethodsService } from '../services/methods.service';

declare var require: any

@Component({
  selector: 'app-input-functions',
  templateUrl: './input-functions.component.html',
  styleUrls: ['./input-functions.component.css']
})
export class InputFunctionsComponent implements OnInit {

  quantVar: number = 0;
  function: string = "";
  variables: string;
  startX = [];
  pre: number;

  // Erros de entrada dos dados 
  errFunc: boolean = false;
  errVari: boolean = false;
  errEpsi: boolean = false;

  // TODO passar as funçoes da math para o methods service
  math = require('mathjs');

  @Input() method: number;  // Variavel que indica qual método está selecionado
  @Output() objectEvent = new EventEmitter<object>();

  constructor(private methodService: MethodsService) { }

  ngOnInit() {
  }
  // Altera a quantidade de inputs 
  createRange(number){
    if(number != 0) {
      this.variables = 'f(';
      var items: number[] = [];
      for(var i = 0; i < number; i++){
          this.variables += ' x'+i;
          if(i != number-1) this.variables += ',';
          items.push(i);
      }
      this.variables += ') = ';
      // this.variables = this.math.parse(this.variables).toTex();
      return items;
    } else {
        this.variables = ''
    }    
  }
  // Retorna falso se a variavel digitada é diferente da que deve ser digitada
  CompareVariables(quant, ver: string[]) {
      // Tenho o vetor com todas as variaveis
      var check = []; 
      var aux;

      for(let k = 0; k < quant; k++) check.push('x'+k); 
      for(let i = 0; i < ver.length; i++){
         aux = false;
         for(let j = 0; j < quant; j++) {
            if(ver[i].toLowerCase() === check[j]){
                aux = true;
                continue;
            }
         }
         if(aux === false){
            return false;     
         }            
      } return true;
  }

  SendObject(){
    // Verificar os parametros da função 
   const aux2 = this.methodService.GetVariables(this.function);

    // Se houve algum erro com a função, ele entra aqui
    if(aux2[0] === 'false'){
      this.errFunc = true;
    } else this.errFunc = false;

    if(!this.CompareVariables(this.quantVar, aux2)){
          this.errVari = true;
    } else this.errVari = false;

    if(this.pre == undefined){
      this.errEpsi = true;
    } else this.errEpsi = false;

    if(!this.errEpsi && !this.errFunc && !this.errVari){
      // Zera os valores que não foram adicionados para o vetor x
      for(let i = 0; i < this.quantVar; i++ ){
        if(this.startX[i] == undefined || this.startX[i] == null){
            this.startX[i] = 0;
        }
      }

      const send = {
        qV: this.quantVar, 
        fun: this.variables + this.function, 
        x0: this.startX, 
        precisao: this.pre
      };
      this.objectEvent.emit(send);
    }

    

    /* const aux = {
        qV: this.quantVar,
        fun: this.function,
        X0: this.startX,
        precisao: this.pre
    };
    this.objectEvent.emit(aux); */
  }

}
