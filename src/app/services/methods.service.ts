import { Injectable } from '@angular/core';

declare var require: any

@Injectable({
  providedIn: 'root'
})
export class MethodsService {

  math = require('mathjs');
  parser = this.math.parser();

  constructor() {}

  // Carregando a função no serviço para os proximos calculos 
  CarregarFuncao( func ){
      this.parser.eval(func);
  }

  ResultadoFuncao( obj ) {
      return this.parser.eval(obj);
  }

  Derivada( func, vari, num){
      const h = this.math.parse(func); 
      const x = this.math.parse(vari);
      const dh = this.math.derivative(h, x)
      console.log(dh.toString());
      return dh.eval({x: parseFloat(num)});
  }

  CoordenadasCiclicas() {

  }

  HookeAndJeeves() {

  }

  Gradiente() {

  }

  Newton () {

  }

  GradienteConjugadoGeneralizado() {

  }

  FletcherAndReeves() {

  }

  DavidonFletcherPowell(){

  }
}
