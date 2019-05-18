import { Injectable } from '@angular/core';

declare var require: any

@Injectable({
  providedIn: 'root'
})
export class MethodsService {

  math = require('mathjs');
  parser = this.math.parser();

  constructor() {}
  
  /** METODOS DE PROGRAMAÇÃO NÃO LINEAR: MULTIVARIAVEL IRRESTRITO
   *      A seguir estão os métodos sem o uso de derivadas
   */
  CoordenadasCiclicas() {

  }

  HookeAndJeeves() {

  }

  /** Métodos com o uso de derivadas */

  Gradiente() {

  }

  Newton () {

  }

  /** Métodos que usam Direções conjudadas  */

  GradienteConjugadoGeneralizado() {

  }

  /** Extensão para problemas não quadraticos  */
  FletcherAndReeves() {

  }

  DavidonFletcherPowell(){

  }

  /** CÁLCULOS MATEMÁTICOS */

  /** CRITÉRIOS DE PARADA  */
  // Retorna a raiz quadrada do somatorio de xi^2, sendo os xi os elementos do vetor passado
  NormaVetor( vetor: number[] ) {
    var aux = vetor.reduce((total, value) => {
        return total + value*value;
    }, 0);
    return this.math.eval('sqrt('+aux+')');
  }

  /*** FUNÇÕES AUXILIARES  */
  // Passe uma expressão sem f(x0, ..., xn) e essa função retorna as variaveis 
  // da expressão
  GetVariables(func: string){
    try{
      const aux = this.math.parse(func);

      var variables = []; 
      aux.traverse((node) => {
        if(node.type == "SymbolNode"){
          if(!this.SearchObjInArray(variables, node.name)){
               variables.push(node.name);
           }
       }
      });
      return variables;
    } catch(e) {
        return ['false'];
    }     
  }

  // Transforma uma string expressão em texto latex
  TransformToLatex(func: string){
      const aux = this.math.parse(func); 
      return aux.toTex();
  }

  // Procura um elemento em um array
  SearchObjInArray(vetor, dado){
    for(let i of vetor){
        if(i === dado){
            return true;
        }
    } return false;
}

}
