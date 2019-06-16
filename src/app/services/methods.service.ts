import { Injectable } from '@angular/core';

declare var require: any

@Injectable({
  providedIn: 'root'
})
export class MethodsService {

  math = require('mathjs');
  parser = this.math.parser();

  constructor() {}

  // TODO Verificar divisão por 0 e procurar por muitos erros
  
  /** METODOS DE PROGRAMAÇÃO NÃO LINEAR: MULTIVARIAVEL IRRESTRITO
   *      A seguir estão os métodos sem o uso de derivadas
   */
    CoordenadasCiclicas(func: string, x0: Array<number>, pre: string) {

      var initialX = x0.map((item) => {
          return item.toString(); 
      }); 

      var resultado = this.CalculoCoordenadasCiclicas(0, func, initialX, x0.length, pre, this.GerarIdentidade(x0.length), 300); 

      console.log(`Resultado das coordenadas ciclicas: ${resultado}`); 

      return resultado; 
    }

    CalculoCoordenadasCiclicas(k, f, x0, n,pre, d, kmax){     // Função teste: (x0 - 2)^4 + (x0 - 2x1)^2

        var iteracoes = []; 
        
        // Quebrando a função em dois e atualizando o f(x0, x1, ... xn) para f(x) 
        var newf = f.split('='); newf[0] = 'f(x) = '; 
        do{ 
            var objIteracao = { 
                k: null,
                xk: null, 
                fxk: null, 
                intern: null             
            };
            // Atualizando os valores do objeto iteração 
            objIteracao.k = k; 
            objIteracao.xk = x0; 
            var forIteracoes = [];
            
            //console.log(` >>> Iteração ${k} <<<`);
            var loop = true; 
            var y1 = x0; 
            var aux;
            // Atualizando o valor da função de x atual e jogando no objeto do resultado 
            objIteracao.fxk = this.math.eval(this.MinFuncao(newf[1], x0));
            for(let j=0; j<n; j++){
                var objIntFor = {
                    j: null, 
                    d: null, 
                    yk: null, 
                    lbda: null, 
                    yk1: null
                }; 
                objIntFor.j = j; 
                objIntFor.d = d[j]; 
                objIntFor.yk = y1; 
                aux = this.SomaVetor(y1, this.EscalarVetor('x', d[j])); 
                // Substitui os valores dos respectivos x0, x1, x2.. e como o lambda como x
                var lambda = newf[0] + this.MinFuncao(newf[1], aux);
                // Executa a minimização por newton monovariavel com o valor inicial = 0 e a precisao de 0.001
                var resultadoLambda = this.MonoNewton(0, lambda, 0.001); 
                objIntFor.lbda = resultadoLambda; 
                // Atualiza o y1 com o valor do lambda encontrado pelo método de newton 
                try{
                    y1 = this.SomaVetor(y1, this.EscalarVetor(`${resultadoLambda}`, d[j])); 
                }catch (e) {
                    alert(e);
                }
                objIntFor.yk1 = y1; 
                forIteracoes.push(this.CopyAnything(objIntFor));
            }
            objIteracao.intern = forIteracoes;
            iteracoes.push(this.CopyAnything(objIteracao));
            console.log(iteracoes); 
            // Verificando o criterio de parada
            var sub = this.SubtraiVetor(y1, x0); 
            //console.log("subtração dos vetores" + sub); 
            if(!this.NormaVetorMenorPrecisao(sub, pre)) loop = true; // Se o critério de parada não foi atingido, continua o loop
            else loop = false;                                       // Se o criterio de parada foi atingido, então encerra o loop
            x0 = y1;        // Atualiza o valor de x0
            k++; 
        }while(loop && k < kmax);
        var objResultado = {
            iteracoes: iteracoes, 
            resultado: x0
        }
        if(k == kmax){
            alert("Número de iterações máximo ultrapassado");  
         }
        return objResultado;          // Retorna o resultado 
    }

    HookeAndJeeves() {

    }

    /** Métodos com o uso de derivadas */

    Gradiente(func: string, x0: Array<number>, pre: string) {

        var initialX = x0.map((item) => {
            return item.toString(); 
        }); 
        var resultado = this.CalculoGradiente(func, initialX, pre,x0.length);   
        return resultado; 
    }

    CalculoGradiente(f,x,precisao,n){
        var iteracoes = []; 
        
        var newf = f.split('='); newf[0] = 'f(x) = '; 
        var k = 0;  
        var xk = x; 
        var fxk = this.math.eval(this.MinFuncao(newf[1], xk));
        var grad = []; 
        //fazendo gradiente
        for(let j =0;j<n;j++){
            var xi = 'x'+j.toString();
            grad[j] = this.math.derivative(newf[1],'x'+j);                      
            grad[j] = this.math.eval(this.MinFuncao(grad[j].toString(),xk));    
            
        }
         //fazendo norma
         var norm_grad = this.NormaVetor(grad);             
         var dk = [];
        //loop
        while(!this.NormaVetorMenorPrecisao(grad,precisao) && k < 300){
            var objIteracao = { 
                k: k, //ok
                xk: xk,  //ok
                fxk: null,  //ok
                grad: grad, //ok
                dk: null, //ok
                lambda: null, //ok
                xk_1: null, //ok
                norm_grad: norm_grad
            };
            //fazendo direcao = -grad 
            for(let j =0;j<n;j++){
                dk[j] = grad[j]*-1;
            }
            objIteracao.dk = dk;
            //fazendo lambda
            var aux = this.SomaVetor(xk, this.EscalarVetor('x', dk));
            var lambda = newf[0] + this.MinFuncao(newf[1], aux);
            var resultadoLambda = this.MonoNewton(0, lambda, 0.001);
            objIteracao.lambda = resultadoLambda;
            //novo x
            var x1 = this.SomaVetor(xk, this.EscalarVetor(`${resultadoLambda}`, dk)); 
            objIteracao.xk_1 = x1;
            //atualizando k,x e fxk
            k++;
            // Calculando o valor da função no novo ponto encontrado
            fxk = this.math.eval(this.MinFuncao(newf[1], xk));
            objIteracao.fxk = fxk;
            // Atualizando o valor de xk 
            xk = x1;
            // Preparando o gradiente para proxima iteração
            for(let j =0;j<n;j++){
                var xi = 'x'+j.toString();
                grad[j] = this.math.derivative(newf[1],'x'+j);            
                grad[j] = this.math.eval(this.MinFuncao(grad[j].toString(),xk));                
            }
            //fazendo norma
            norm_grad = this.NormaVetor(grad);             

            iteracoes.push(this.CopyAnything(objIteracao));
        }
        if(k == 300){
            alert("Numero máximo de 300 iterações ultrapassados");
        }
        var objResultado = {
            iteracoes: iteracoes, 
            resultado: xk
        };
        return objResultado;        
    }

    Newton (func: string, x0: Array<number>, pre: string) {
        var initialX = x0.map((item) => {
            return item.toString(); 
        }); 
        var resultado = this.CalculoNewton(func, initialX, pre,x0.length);  
        //console.log(resultado.resultado); 
        return resultado; 
    }
    CalculoNewton(f,x,precisao,n){
        var iteracoes = [];         
        var newf = f.split('='); newf[0] = 'f(x) = '; 
        var k = 1;  
        var xk = x;         
        //loop (!this.NormaVetorMenorPrecisao(grad,precisao)) 
        while(k < 300){
            var objIteracao = { 
                k: k, //ok
                xk: xk,  //ok
                fxk: 0,  //ok
                grad: [], //ok
                norm_grad: 0,                               
                hessiana: [n*n],
                hessiana_inversa: [n*n],
                dk: [], //ok
                xk_1: [], //ok 
            };
            objIteracao.fxk = this.math.eval(this.MinFuncao(newf[1], objIteracao.xk));
            //fazendo gradiente e hessiana
            for(let j =0;j<n;j++){
                objIteracao.grad[j] = this.math.derivative(newf[1],'x'+j);            
                for(let i=0;i<n;i++){
                    objIteracao.hessiana[j*n+i] = this.math.derivative(newf[1],'x'+j);
                    objIteracao.hessiana[j*n+i] = this.math.derivative(objIteracao.hessiana[j*n+i],'x'+i);
                    objIteracao.hessiana[j*n+i] = this.math.eval(this.MinFuncao(objIteracao.hessiana[j*n+i].toString(),objIteracao.xk));
                    //console.log("hessiana["+j+","+i+"]:" + objIteracao.hessiana[j*n+i]);
                }                      
                objIteracao.grad[j] = this.math.eval(this.MinFuncao(objIteracao.grad[j].toString(),objIteracao.xk)); 
            }  

            objIteracao.norm_grad =  this.NormaVetor(objIteracao.grad); 
            //console.log(objIteracao.norm_grad);
            if(objIteracao.norm_grad <precisao){
                xk= objIteracao.xk;
                iteracoes.push(this.CopyAnything(objIteracao));
                break;
            }
            objIteracao.hessiana = this.listToMatrix(objIteracao.hessiana, n); //deixando como matriz
            objIteracao.hessiana_inversa = this.math.inv(objIteracao.hessiana); //fazendo a inversa da hessiana
            //console.log(objIteracao.hessiana_inversa);
            //console.log("teste1")
            var hessiana_inversa = this.math.dotMultiply(-1,objIteracao.hessiana_inversa) //inversa*-1
            //console.log("teste")
            objIteracao.dk =this.math.multiply(hessiana_inversa, objIteracao.grad); //direcao = -1(inversa)*grad
            //console.log(objIteracao.dk);
            //novo x
            objIteracao.xk_1 = this.SomaVetor(objIteracao.xk,objIteracao.dk);
            //console.log(xk) 
            if(this.NormaVetor(this.SubtraiVetor(objIteracao.xk,objIteracao.xk_1))< parseFloat(precisao)){
                xk = objIteracao.xk_1;
                iteracoes.push(this.CopyAnything(objIteracao));
                break;
            } 
            //atualizando k,x e fxk
            k++;           
            xk = objIteracao.xk_1;        //novo xk 
            //console.log(objIteracao);
            iteracoes.push(this.CopyAnything(objIteracao));            
        }
        if(k == 300){
            alert("Numero máximo de 300 iterações ultrapassados");
        }
        console.log(xk);
        var objResultado = {
            iteracoes: iteracoes, 
            resultado: xk
        };
        //return objResultado;      
        return objResultado;  
    }
    
    /** Métodos que usam Direções conjudadas  */
    listToMatrix(list, elementsPerSubArray) {
        var matrix = [], i, k;
    
        for (i = 0, k = -1; i < list.length; i++) {
            if (i % elementsPerSubArray === 0) {
                k++;
                matrix[k] = [];
            }
    
            matrix[k].push(list[i]);
        }
    
        return matrix;
    }
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
        var criterioParada = (resultado < parseFloat(pre));
        //console.log(`${resultado} < ${pre}? ${criterioParada}`);  
        //console.log(`Criterio de parada atingido: ${criterioParada}`); 
        return criterioParada;
    }
    NormaVetor( vetor: Array<string>) {
        var soma = 0; 
        vetor.forEach((item) => {
            var floatitem = parseFloat(item); 
            soma += (floatitem*floatitem); 
        });
        var resultado =  this.math.eval(`sqrt(${soma})`); 
        //console.log(resultado);        
        return resultado;
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

    // Função para copiar qualquer coisa
    CopyAnything(ob: any){
        var outro = ob; 
        return outro; 
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
