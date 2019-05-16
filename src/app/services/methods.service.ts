import { Injectable } from '@angular/core';

declare var require: any

@Injectable({
  providedIn: 'root'
})
export class MethodsService {

  math = require('mathjs');
  parser = this.math.parser();

  constructor() {}

  TestarFuncao ( func ){
    try{
      const va = this.math.parse('3 * x + 2');
      console.log(va);

      const inc = va.traverse(function (node, path, parent) {
          switch (node.type){
              case 'SymbolNode' :
                //return node;
                console.log("Aqui -> ", node.type, node.name);
                break;
              default: 
                console.log('nada');
                break;
          }
      });

      console.log(inc);
    }catch (e) {
        console.log(e);
    }
  }

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
