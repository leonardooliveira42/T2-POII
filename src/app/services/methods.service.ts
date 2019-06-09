import { Injectable } from '@angular/core';
import { ConstantPool } from '@angular/compiler';

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
  CoordenadasCiclicas(func: string, x0: Array<number>, pre: string) {

      var initialX = x0.map((item) => {
          return item.toString(); 
      }); 

      var resultado = this.CalculoCoordenadasCiclicas(0, func, initialX, x0.length, pre, this.GerarIdentidade(x0.length)); 

      console.log(`Resultado das coordenadas ciclicas: ${resultado}`); 
      return resultado; 
      
      /*console.log(`função: ${func} >> x0: ${x0} >> pre: ${pre}`);

      var funcaoTeste = "f(x) = e^x - x^3 + 1";
      console.log(`Função a ser testada: ${funcaoTeste}`);
      console.log("Resultado: " + this.MonoNewton(0, funcaoTeste, 'x', 0.0001));

      var v1 = ['1', '1', '1']; 
      var v2 = ['1+x','0','0']; 
      var rs = this.SomaVetor(v1, v2)
      console.log(rs); 

      var teste = "f(x0, x1, x2) = x0^2 + 3*x1 - x2^3"; 
      var teste2 = teste.split('='); 
      teste2[0] = 'f(x) = '; 
      
      console.log(this.MinFuncao(teste2[1], rs)); 
      console.log(this.GerarIdentidade(4)); */

  }

  CalculoCoordenadasCiclicas(k, f, x0, n,pre, d){

      // Estruturação do vetor de iterações
      /*
          0 = Iteração 
          1 = valor do x atual 
          2 = matriz 
          matriz 
          linha iterações j 
          coluna 1 = matriz direcao 
          coluna 2 = yj 
          coluna 3 = lambda
          coluna 4 = yj+1 
      * */
      var iteracoes = []; 
      do{
          console.log(` >>> Iteração ${k} <<<`);
          var loop = true; 
          var y1 = x0; 
          var aux;
          for(let j=0; j<n; j++){
              aux = this.SomaVetor(y1, this.EscalarVetor('x', d[j])); 
              // Quebrando a função em dois e atualizando o f(x0, x1, ... xn) para f(x) 
              var newf = f.split('='); newf[0] = 'f(x) = '; 
              // Substitui os valores dos respectivos x0, x1, x2.. e como o lambda como x
              var lambda = newf[0] + this.MinFuncao(newf[1], aux);
              // Executa a minimização por newton monovariavel com o valor inicial = 0 e a precisao de 0.001
              var resultadoLambda = this.MonoNewton(0, lambda, 0.001); 
              // Atualiza o y1 com o valor do lambda encontrado pelo método de newton 
              y1 = this.SomaVetor(y1, this.EscalarVetor(`${resultadoLambda}`, d[j])); 
          }
          console.log(y1); 
          // Verificando o criterio de parada
          var sub = this.SubtraiVetor(y1, x0); 
          console.log("subtração dos vetores" + sub); 
          if(!this.NormaVetorMenorPrecisao(sub, pre)) loop = true; // Se o critério de parada não foi atingido, continua o loop
          else loop = false;                                       // Se o criterio de parada foi atingido, então encerra o loop
          x0 = y1;        // Atualiza o valor de x0
          k++; 
      }while(loop);
      return x0;          // Retorna o resultado 
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
  NormaVetorMenorPrecisao( vetor: Array<string>, pre: string) {
    var soma = 0; 
    vetor.forEach((item) => {
        var floatitem = parseFloat(item); 
        soma += (floatitem*floatitem); 
    });
    var resultado =  this.math.eval(`sqrt(${soma})`); 
    console.log(resultado); 
    var criterioParada = (resultado < parseFloat(pre)); 
    console.log(`Criterio de parada atingido: ${criterioParada}`); 
    return criterioParada;
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

  Derivada (fun: string, variavel: string){
    return this.math.derivative(fun, variavel).toString(); 
  }

  EscalarVetor(escalar: string, vetor: Array<string>){
      var multiVetor =  vetor.map((item) => {
          return this.math.simplify(`${escalar} * ${item}`).toString(); 
      });
      return multiVetor; 
  }

  SubtraiVetor(vetor1: Array<string>, vetor2: Array<string>){
      var subtracaoArray = vetor1.map((item, index) => {
          return this.math.simplify(`${item} - ${vetor2[index]}`).toString(); 
      });
      return subtracaoArray; 
  }

  SomaVetor(vetor1: Array<string>, vetor2: Array<string>){
      var somaArray = vetor1.map((item, index) => {
          return this.math.simplify(`${item} + ${vetor2[index]}`).toString(); 
      });
      return somaArray; 
  }

  MinFuncao(func: string, vetor: Array<string>){
      vetor.forEach((item, index) => {
          var regex = new RegExp(`x${index}`, "g");   // Expressão regular para substituir todos os x+index encontrados
          func = func.replace(regex, `(${item})`); 
      });
      return func; 
  }

  GerarIdentidade(n: number){
      var matriz = []; 
      for(let i = 0; i<n; i++){
        matriz[i] = []; 
        for(let j = 0; j<n; j++){
            if(i == j)  
              matriz[i][j] = 1; 
            else matriz[i][j] = 0; 
        }
      }
      return matriz; 
  }

  /*************************************************************************** 
   * 
   *                       MÉTODO MONOVARIAVEL DE NEWTON 
   * 
  *****************************************************************************/
  MonoNewton(x0: number, func: string, precisao: number){
      var deri1 = this.math.derivative(func, 'x'); 
      var deri2 = this.math.derivative(deri1, 'x');
      return this.CalculoMonoNewton(0, x0, deri1, deri2, precisao); 
  }

  CalculoMonoNewton(k: number, x0: number, der1: any, der2: any, pre:number){  
      // Calculando as derivadas depois o novo x
      var d1 = der1.eval({x: x0});
      var d2 = der2.eval({x: x0}); 
      var xk = x0 - d1/d2; 
      // Conferindo os criterios de parada 
      if(Math.abs(d1) > pre && !this.CriterioParadaLNewton(x0, xk, pre)){
          return this.CalculoMonoNewton(k++, xk, der1, der2, pre); 
      } else return xk;
  }

  CriterioParadaLNewton(xk: number, xk1: number, precisao: number){   // Retorna true se for menor que precisao
    var axk1 = Math.abs(xk1); 
    var max = (axk1 < 1) ? 1 : axk1; 
    return  (Math.abs(axk1 - xk) / max < precisao); 
  }

}
