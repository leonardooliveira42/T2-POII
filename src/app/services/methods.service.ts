/**
 *      EXPLICAÇÃO GERAL 
 *      Todos os métodos tem as funções com os nomes e as funções CalculoNomeDoMetodo () 
 *      As funções com os nomes sempre chamam a função do Calculo,  pois antes é feito um tratamento de dados
 *      para que os dados sejam usados corretamente durante a função. 
 * 
 *      A biblioteca utilizada para alguns calculos avançados de matemática é a math.js
 *      que pode ser visto aqui: https://mathjs.org/docs/index.html
 * 
 *      Outra biblioteca usada foi o Katex: https://katex.org/, foi utilizada para deixar algumas strings, visualmente bonitas
 * 
 *      O link para o trabalho é esse: https://leonerd42.github.io/T2-POII/ 
 * 
 *      Dentro de cada calculo, são gerados um vetor iteracoes e alguns objetos (structs). 
 *      Esses objetos armazenam os dados daquela iteração e quando aquela iteração termina, 
 *      esse objeto é acrescentado no vetor de iterações. 
 * 
 *      Quando os calculos acabam e o resultado é encontrado, o vetor de iterações é lido e apresentado na tela. 
 *      E o resultado é apresentado no final do card.  
 * 
 *      Pra utilizar a biblioteca math.js, foi feita muita multiplicação de string, já que os parametros para 
 *      as funções dessa biblioteca são strings;
 */


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
    // Feito
    CoordenadasCiclicas(func: string, x0: Array<number>, pre: string) {

      var initialX = x0.map((item) => {
          return item.toString(); 
      }); 

      var resultado = this.CalculoCoordenadasCiclicas(0, func, initialX, x0.length, pre, this.GerarIdentidade(x0.length), 300); 

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
            // Verificando o criterio de parada
            var sub = this.SubtraiVetor(y1, x0); 
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

    // Feito
    HookeAndJeeves(func: string, x0: Array<number>, pre: string) {

       var initialX = x0.map((item) => {
            return item.toString();
        });

        var resultado = this.CalculoHookeAndJeeves(0, func, initialX, x0.length, pre, this.GerarIdentidade(x0.length), 300); 

        return resultado;
    }

    CalculoHookeAndJeeves(k, f, x0, n, pre, d, kmax) {

        var iteracoes = [];
        var newf = f.split("="); newf[0] = 'f(x) = ';
        var y1 = x0; 
        var loop = true; 
        while(loop && k < kmax) { // Loop principal 
            // Cria o objeto iteração 
            var objInteracao = {
                k: k, 
                xk: x0, 
                fxk: null, 
                intern: null, 
                newD: null, 
                newLambda: null, 
                newYPlusLambda: null
            };
            // Gera o valor da funçao e resolve
            var fxk = this.math.eval(this.MinFuncao(newf[1], x0)); 
            objInteracao.fxk = fxk;
            var forIteracoes = [];
            var aux; 
            // Calculando com coordenadas ciclicas 
            for(let j=0; j<n; j++){
                // Crio um objeto iteração interna
                var objIntFor = {
                    j: j, 
                    d: d[j], 
                    yk: y1, 
                    lambda: null, 
                    yk1: null
                };
                // Atribuo os valores já obtidos para esse objeto 

                // Executo os calculos 
                aux = this.SomaVetor(y1, this.EscalarVetor('x', d[j]));
                // Substitui os valores resp
                var lambda = newf[0] + this.MinFuncao(newf[1], aux); 
                // Executa a minimização por newton para calcular o valor de lambda
                var resultadoLambda = this.MonoNewton(0, lambda, 0.001); 
                objIntFor.lambda = resultadoLambda; 
                // Atualiza o lambda no objeto da iteração 
                y1 = this.SomaVetor(y1, this.EscalarVetor(`${resultadoLambda}`, d[j])); 
                // Novo valor de y, atualiza no objeto 
                objIntFor.yk1 = y1; 
                // Pusha para o vetor de iterações interno o objeto atual 
                forIteracoes.push(objIntFor); 
            }
            // Salva o vetor iteração no objeto maior
            objInteracao.intern = forIteracoes; 
            // Subtrai os valores de x 
            var subtracaoDeVetores = this.SubtraiVetor(x0, y1); 
            // Atualiza o x0
            x0 = y1; 
            // Atualiza iteração 
            k++; 
            // Entra no Passo 2
            if(!this.NormaVetorMenorPrecisao(subtracaoDeVetores, pre)) {  // Se a norma for maior que a precisao, executa o passo 2
                var newD = subtracaoDeVetores; 
                objInteracao.newD = newD;
                // Encontrando o novo y
                aux = this.SomaVetor(y1, this.EscalarVetor('x', newD));  // mudar y1
                // Substituindo os valores 
                var lambdaAsterisco = newf[0] + this.MinFuncao(newf[1], aux); 
                // Executa a minimização por newton 
                var resultadoLambdaAsterisco = this.MonoNewton(0, lambdaAsterisco, 0.001); 
                objInteracao.newLambda = resultadoLambdaAsterisco;
                // Usa um novo y
                y1 = this.SomaVetor(y1, this.EscalarVetor(`${resultadoLambdaAsterisco}`, newD));
                objInteracao.newYPlusLambda = y1; 
                iteracoes.push(objInteracao);
            } else {
                var objResultado = {
                    iteracoes: iteracoes, 
                    resultado: x0
                };
                return objResultado;
            }
        }
    }

    /** Métodos com o uso de derivadas */
    // Feito
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
         
        //loop
        while(!this.NormaVetorMenorPrecisao(grad,precisao) && k < 300){
            var dk = [];
            var newGrad = grad.map((item) => { return item; });
            var objIteracao = { 
                k: k, //ok
                xk: xk,  //ok
                fxk: null,  //ok
                grad: newGrad, //ok
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
            newGrad = grad.map((item) => { return item; });;
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

    // Feito
    Newton (func: string, x0: Array<number>, pre: string) {
        var initialX = x0.map((item) => {
            return item.toString(); 
        }); 
        var resultado = this.CalculoNewton(func, initialX, pre,x0.length);  
        return resultado; 
    }

    CalculoNewton(f,x,precisao,n){
        var iteracoes = [];         
        var newf = f.split('='); newf[0] = 'f(x) = '; 
        var k = 1;  
        var xk = x;         
        while(k < 300){
            var objIteracao = { 
                k: k, //ok
                xk: xk,  //ok
                fxk: 0,  //ok
                grad: [], //ok
                norm_grad: 0,                               
                hessiana: [],
                hessiana_inversa: [],
                dk: [], //ok
                xk_1: [], //ok 
            };

            objIteracao.fxk = this.math.eval(this.MinFuncao(newf[1], objIteracao.xk));

            for(let i=0; i<n; i++){ // Melhorar mais ainda
                objIteracao.grad[i] = this.math.derivative(newf[1], 'x'+i); 
                objIteracao.grad[i] = this.math.eval(this.MinFuncao(objIteracao.grad[i].toString(), objIteracao.xk));
                objIteracao.hessiana[i] = [];
                for(let j=0; j<n; j++){
                    objIteracao.hessiana[i][j] = this.math.derivative(newf[1], 'x'+i);
                    objIteracao.hessiana[i][j] = this.math.derivative(objIteracao.hessiana[i][j], 'x'+j); 
                    objIteracao.hessiana[i][j] = this.math.eval(this.MinFuncao(objIteracao.hessiana[i][j].toString(),objIteracao.xk));
                }
            }
            objIteracao.hessiana_inversa = this.math.inv(objIteracao.hessiana); //fazendo a inversa da hessiana
            objIteracao.norm_grad =  this.NormaVetor(objIteracao.grad); 

            if(objIteracao.norm_grad < precisao){
                xk = objIteracao.xk.map((item) => { return this.math.eval(item.toString()); });    
                iteracoes.push(this.CopyAnything(objIteracao));
                break;
            }

            var hessiana_inversa = this.math.dotMultiply(-1,objIteracao.hessiana_inversa) //inversa*-1
            objIteracao.dk = this.math.multiply(hessiana_inversa, objIteracao.grad); //direcao = -1(inversa)*grad
            //novo x
            objIteracao.xk_1 = this.SomaVetor(objIteracao.xk,objIteracao.dk).map((item) => { return this.math.simplify(item.toString()); });
            xk = objIteracao.xk_1;        //novo xk 
            if(this.NormaVetor(this.SubtraiVetor(objIteracao.xk,objIteracao.xk_1)) < parseFloat(precisao)){
                iteracoes.push(this.CopyAnything(objIteracao));
                break;
            } 
            //atualizando k,x e fxk
            k++;           
            iteracoes.push(this.CopyAnything(objIteracao));            
        }
        if(k == 300){
            alert("Numero máximo de 300 iterações ultrapassados");
        }
        var objResultado = {
            iteracoes: iteracoes, 
            resultado: xk //.map((item) => { return this.math.simplify(item); })
        };
        //return objResultado;      
        return objResultado;  
    }
    /** Métodos que usam Direções conjudadas  */
    // Feito 
    GradienteConjugadoGeneralizado(func: string, x0: Array<number>, pre: string, q: Array<number>, b: Array<number> ) {

        var initialX = x0.map((item) => {
            return item.toString(); 
        }); 
        var Q = q.map((item) => {
            return item.toString(); 
        }); 
        var B = b.map((item) => {
            return item.toString(); 
        }); 
        var resultado = this.CalculoGradiente_conj(func, initialX, pre,x0.length,Q,B);   
        return resultado; 

    }
    CalculoGradiente_conj(f,x,precisao,n,q,b){ 
        var iteracoes = [];         
        var newf = f.split('='); newf[0] = 'f(x) = '; 
        q = this.listToMatrix(q,n);
        q = this.math.transpose(q);  //q é uma matriz
        var k = 0;  
        var xk = x;
        var g0;
        g0 = this.math.subtract(this.math.multiply(q,xk),b);
        var d0 = this.math.multiply(-1,g0);
        if(this.NormaVetor(g0)<precisao){
            var objIteracao1 = { 
                k: 0, //ok
                xk:xk,  //ok
                gk: g0, //ok   
                dk: d0, //ok
            };
            iteracoes.push(this.CopyAnything(objIteracao1));
            var objResultado1 = {
                iteracoes: iteracoes, 
                resultado: xk //.map((item) => { return this.math.simplify(item); })
            };
            return objResultado1;
        }
        while(k < 300){
            var objIteracao = { 
                k: k, //ok
                xk:[],  //ok
                gk: [], //ok
                gk_1: [],         
                dk: [], //ok
                lambdak:[],
                dk_1:[],
                bk:[],
                xk_1: [], //ok 
            };
            objIteracao.xk = xk;
            objIteracao.dk = d0;
            objIteracao.gk = g0;
            objIteracao.lambdak = this.math.multiply(-1,
                (this.math.divide(
                this.math.multiply(this.math.transpose(objIteracao.gk),objIteracao.dk),
                this.math.multiply(this.math.multiply(this.math.transpose(objIteracao.dk),q),objIteracao.dk)
                    )));
            objIteracao.xk_1 = this.math.add(objIteracao.xk ,this.math.multiply(objIteracao.lambdak,objIteracao.dk));
            objIteracao.gk_1 =  this.math.subtract(this.math.multiply(q,objIteracao.xk_1),b);
            
            if(this.NormaVetor(objIteracao.gk_1)<precisao){
                xk = objIteracao.xk_1;
                iteracoes.push(this.CopyAnything(objIteracao)); 
                break;
            }
            objIteracao.bk = this.math.divide(
                this.math.multiply(this.math.multiply(this.math.transpose(objIteracao.gk_1),q),objIteracao.dk),
                this.math.multiply(this.math.multiply(this.math.transpose(objIteracao.dk),q),objIteracao.dk)
                    );
            objIteracao.dk_1 = this.math.add(
                this.math.multiply(-1,objIteracao.gk_1),
                this.math.multiply(objIteracao.bk,objIteracao.dk)
            );
            xk = objIteracao.xk_1;
            d0 = objIteracao.dk_1;
            g0 = objIteracao.gk_1;
            iteracoes.push(this.CopyAnything(objIteracao));            
            k++;
        }
        var objResultado = {
            iteracoes: iteracoes, 
            resultado: xk //.map((item) => { return this.math.simplify(item); })
        };
        //return objResultado; 
    return objResultado;
    }
    /** Extensão para problemas não quadraticos  */
    // Feitp
    FletcherAndReeves(f, x, precisao, n) {
        var initialX = x.map((item) => { return item.toString(); }); 

        var resultado = this.CalculoFletcherAndReeves(f, initialX, precisao, n);
        return resultado;
    }

    CalculoFletcherAndReeves(f, x0, pre, n){
        
        var iteracoes = [];
        var gradiente = [];
        var k = 0;
        var j = 0;
        var newf = f.split('='); newf[0] = 'f(x) = ';  
        for(let i=0; i<n; i++){
            gradiente[i] = this.math.derivative(newf[1], 'x'+i).toString(); 
        }
        var g = gradiente.map((item) => { return this.math.simplify(this.MinFuncao(item, x0));}); 
        var d = this.EscalarVetor('-1', g); 
        while(!this.NormaVetorMenorPrecisao(gradiente
            .map((der) => { return this.math.simplify(this.MinFuncao(der, x0)); }), pre) && k < 4){ //Passo  1
            var objIteracao = {
                k: k, 
                xk: x0, 
                fxk: null, 
                intern: null
            };
            //  Calculando o valor da função 
            objIteracao.fxk = this.math.eval(this.MinFuncao(newf[1], x0));
            var iteracoesFor = [];
            var x_aux = x0;
            for(let j = 0; j < n; j++){
                // Objeto interno 
                var objIntFor = {
                    j: j, 
                    y1: x_aux, 
                    fy1: this.math.eval(this.MinFuncao(newf[1], x_aux)), 
                    grady1: null, 
                    norm_grad: null, 
                    beta: null,     
                    dj: d,          //ok
                    lambda: null, // ok
                    yk1: null  //ok 
                };
                // Calculando lambda
                var aux = this.SomaVetor(x_aux, this.EscalarVetor('x', d)); 
                var lambda = newf[0] + this.MinFuncao(newf[1], aux);
                var resultadoLambda = this.MonoNewton(0, lambda, 0.001); objIntFor.lambda = resultadoLambda; 
                // Calculando a direção vezes o lambda
                var direcaoVezesLambda = this.EscalarVetor(`${resultadoLambda}`, d);
                // Calculando o novo x
                var xk1 = this.SomaVetor(x_aux, direcaoVezesLambda);
                xk1 = xk1.map((item) => { return this.math.eval(item); }); objIntFor.yk1 = xk1;
                // Calculando o novo g
                var g1 = gradiente.map((der) => { return this.math.simplify(this.MinFuncao(der, xk1)); }); objIntFor.grady1 = g1.map((g) => { return g.toString(); });
                objIntFor.norm_grad = this.NormaVetor(g1); 
                if( j < n-1 ){
                    var beta = this.Betak(g.map((g) => { return g.toString(); }), g1.map((g) => { return g.toString(); })); 
                    objIntFor.beta = beta;
                    var d1 = this.SomaVetor(this.EscalarVetor('-1',g1), this.EscalarVetor(`${beta}`,d)); 
                    d = d1;
                    x_aux = xk1;
                } else {
                    x0 = xk1;
                }
                iteracoesFor.push(objIntFor);
            }
            objIteracao.intern = iteracoesFor;
            iteracoes.push(objIteracao);
            k++;            
        }
        return {
            iteracoes: iteracoes, 
            resultado: x0
        }; 
    }

    DavidonFletcherPowell(f, x, precisao, n){
        var initialX = x.map((item) => { return item.toString(); }); 
        //console.log(`Função: ${f}, x0: ${x}, precisao: ${precisao}, Quantidade de variaveis: ${n}`);
        var resultado = this.CalculoDFP(f, initialX, precisao, n);
        console.log(resultado); 
        return resultado;
    }
    CalculoDFP(f,x,pre,n){
        var iteracoes = [];         
        var newf = f.split('='); newf[0] = 'f(x) = '; 
        var k = 0;
        var i = 0;  
        var xk = x; //x inicial
        var sk = []; // primeira vez = identidade
        var primeira_vez = true;


        console.log(n);
        while(k < 50){
            console.log(k);
            console.log(i);
            var objIteracao = { 
                k: k, //ok
                i:i,
                xk: [],
                gk:[],
                sk: [],
                dk: [],
                ak: [],
                xk_1: [],
                gk_1: [],
                qk: [],
                pk: [],
                sk_1: []
            };
            objIteracao.k = k;
            objIteracao.i = i;
            objIteracao.xk = xk;
            //gradiente
            if(primeira_vez){ //sk = identidade
                for(let z=0; z<n; z++){ // Melhorar mais ainda
                    objIteracao.gk[z] = this.math.derivative(newf[1], 'x'+z); 
                    objIteracao.gk[z] = this.math.eval(this.MinFuncao(objIteracao.gk[z].toString(), objIteracao.xk));
                    objIteracao.sk[z] = [];
                    for(let y=0;y<n;y++){
                        if(y==z) objIteracao.sk[z][y]=1;
                        else objIteracao.sk[z][y]=0;
                    }
                }
                primeira_vez = false;
            }else{
                for(let z=0; z<n; z++){ // Melhorar mais ainda
                    objIteracao.gk[z] = this.math.derivative(newf[1], 'x'+z); 
                    objIteracao.gk[z] = this.math.eval(this.MinFuncao(objIteracao.gk[z].toString(), objIteracao.xk));
                }
                objIteracao.sk = sk; //voltar aqui dps
            }
            console.log("norma vetor:" +this.NormaVetor(objIteracao.gk))
            if(this.NormaVetor(objIteracao.gk)<parseFloat(pre)){
                xk = objIteracao.xk;
                iteracoes.push(this.CopyAnything(objIteracao)); 
                break;
            }
            console.log("xk:")
            console.log(objIteracao.xk);
            console.log("gradk:")
            console.log(objIteracao.gk);
            console.log("sk:")
            console.log(objIteracao.sk);
            
            objIteracao.dk = this.math.multiply(this.math.dotMultiply(-1,objIteracao.sk),this.math.transpose(objIteracao.gk));
            console.log(objIteracao.dk);
            var aux = this.SomaVetor(objIteracao.xk, this.EscalarVetor('x', objIteracao.dk));
            var lambda = newf[0] + this.MinFuncao(newf[1], aux);
            objIteracao.ak = this.MonoNewton(0, lambda, 0.001);
            console.log("ak: "+objIteracao.ak);
            objIteracao.xk_1 = this.math.add(objIteracao.xk, this.math.multiply(objIteracao.ak, objIteracao.dk)); 
            console.log("xk+1: "+objIteracao.xk_1);

            if(k<n-1){
                //gradiente k+1
                for(let z=0; z<n; z++){ // Melhorar mais ainda
                    objIteracao.gk_1[z] = this.math.derivative(newf[1], 'x'+z); 
                    objIteracao.gk_1[z] = this.math.eval(this.MinFuncao(objIteracao.gk_1[z].toString(), objIteracao.xk_1));
                }
                console.log("gradk+1: "+objIteracao.gk_1);

                objIteracao.qk = this.math.subtract(objIteracao.gk_1,objIteracao.gk);
                console.log("qk: "+objIteracao.qk);

                objIteracao.pk = this.math.dotMultiply(objIteracao.ak,objIteracao.dk);
                console.log("pk: "+objIteracao.pk);

                objIteracao.sk_1 =this.math.add(objIteracao.sk,
                    this.math.subtract(
                        this.math.dotDivide(
                            this.math.multiply(
                                objIteracao.pk,
                                this.math.transpose(objIteracao.pk)),
                            this.math.multiply(
                                this.math.transpose(objIteracao.pk),
                                objIteracao.qk)
                        ),
                        this.math.dotDivide(
                            this.math.multiply(
                                this.math.multiply(
                                    this.math.multiply(
                                        objIteracao.sk,
                                        objIteracao.qk),
                                    this.math.transpose(objIteracao.qk)
                                ),
                                objIteracao.sk
                            ),
                            this.math.multiply(
                                this.math.multiply(
                                    this.math.transpose(objIteracao.qk),
                                    objIteracao.sk
                                ),objIteracao.qk
                            )
                        )
                    ));
                objIteracao.sk_1 =this.listToMatrix(objIteracao.sk_1,n);

                /*objIteracao.sk_1 = this.math.add(objIteracao.sk,
                    this.math.divide(
                        this.math.multiply(
                            this.math.subtract(
                                this.math.transpose(objIteracao.pk),
                                this.math.multiply(
                                    this.math.transpose(objIteracao.sk),
                                    this.math.transpose(objIteracao.qk)
                                )
                            ),
                                this.math.subtract(
                                    this.VetorTranspostaParaNormal(objIteracao.pk),
                                    this.math.multiply(
                                        this.math.transpose(objIteracao.sk),
                                        this.math.transpose(objIteracao.qk)
                                    )
                                )
                            
                        ),
                        this.math.multiply(
                            this.math.transpose(objIteracao.qk),
                            this.math.subtract(
                                this.math.transpose(objIteracao.pk),
                                this.math.multiply(
                                    this.math.transpose(objIteracao.sk),
                                    this.math.transpose(objIteracao.qk)
                                )
                            )
                        )
                    ));    */
                console.log(objIteracao.sk_1);                                        
                sk = objIteracao.sk_1;
                xk = objIteracao.xk_1;
                k++;
            }else{

                xk = objIteracao.xk_1;
                sk = objIteracao.sk_1;

                i++;
                //break;
                k=0;
            }      
            iteracoes.push(this.CopyAnything(objIteracao));
            if(i == 2)break;           
        }
        if(k == 300){
            alert("Numero máximo de 300 iterações ultrapassados");
        }
        console.log(xk);
        var objResultado = {
            iteracoes: iteracoes, 
            resultado: xk //.map((item) => { return this.math.simplify(item); })
        };
        //return objResultado;      
        return objResultado;  

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

        return criterioParada;
    }
    NormaVetor( vetor: Array<string>) {
        var soma = 0; 
        vetor.forEach((item) => {
            var floatitem = parseFloat(item); 
            soma += (floatitem*floatitem); 
        });
        var resultado =  this.math.eval(`sqrt(${soma})`); 
        return resultado;
    }

    /** Funções auxiliares de Fleetcher and Reeves */
    Betak(gk, gk1){
        var denominador = this.math.multiply(gk1, this.VetorTranspostaParaNormal(gk1)); 
        var dividendo = this.math.multiply(gk, this.VetorTranspostaParaNormal(gk)); 
        var beta = denominador / dividendo;
        return beta;        
    }

    VetorTranspostaParaNormal(array){
        var new_array = []; 
        for(let i = 0; i < array.length; i++){
            new_array[i] = []; 
            new_array[i][0] = array[i]; 
        }
        return new_array;
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
