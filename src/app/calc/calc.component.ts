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
  quantidadeDeVariaveis: number;
  method: any;
  equation: string;
  initialX: string;
  precision: string = '';
  nfEquation: string; // Non formated equation
  nfx0 = [];          // Non formated equation
  collapseState = false;
  obj = null;
  resultado = [null, null, null, null, null, null, null]; 

  constructor(private route: ActivatedRoute, 
              private poMethods: MethodsService) { }

  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      this.method = params.get("id");
    });
    // console.log(this.poMethods.NormaVetor([3,4]));
  }

  show() {
    this.collapseState = !this.collapseState;    
  }

  ReceiveObject($event) {
      // Atribui o objeto passado pelo componente filho
      // Esse objeto contem todos os dados de entrada fornecidos anteriormente
      this.obj = $event;

      // Salvando as informações sem estarem formatadas 
      this.nfEquation = this.obj.fun; 
      this.nfx0 = this.obj.x0;
      // Atualiza as informaçoes no inicio do card body
      this.equation = "\\min\\limits_{ x \\in R }" + this.poMethods.TransformToLatex(this.obj.fun);
      this.initialX = this.poMethods.TransformToLatex("x0 = " + JSON.stringify(this.obj.x0));
      this.precision = this.obj.precisao;
      
      // Calcular o ponto minimo usando o método indicado
      console.log(this.obj.qV);
      this.ExecuteMethod();
  }

  ExecuteMethod() {
      // Seleciona o método de acordo com a escolha do 
      switch(parseInt(this.method)){
          case 1: 
            // Coordenadas ciclicas 
            //this.resultado[this.method-1] 
            var aux = this.poMethods.CoordenadasCiclicas(this.nfEquation, this.nfx0, this.precision);
            var newArray = aux.iteracoes.map((item) => {
               var newobj = {
                  k: item.k, 
                  xk: item.xk.map((variavel) => { return parseFloat(parseFloat(variavel).toFixed(4)); }),
                  fxk: parseFloat(parseFloat(item.fxk).toFixed(4)), 
                  intern: item.intern.map((fo) => { 
                      var newforObj = {
                         j: fo.j, 
                         d: fo.d, 
                         yk: fo.yk.map((f)=> { return parseFloat(parseFloat(f).toFixed(4)); }),
                         lbda: parseFloat(parseFloat(fo.lbda).toFixed(4)), 
                         yk1: fo.yk1.map((f) => { return parseFloat(parseFloat(f).toFixed(4)); })
                      };
                      return newforObj;
                  })   
               }; 
               return newobj;
            });
            console.log(newArray);
            this.resultado[this.method-1] = {
                iteracoes: newArray, 
                resultado: aux.resultado //this.poMethods.TransformToLatex("x* = " + JSON.stringify(aux.resultado))
            };
            console.log(this.resultado[this.method-1]);
            break;
          case 2: 
            // Hooke and Jeeves
            var numeroCasaDecimal = 3;
            var aux2 = this.poMethods.HookeAndJeeves(this.nfEquation, this.nfx0, this.precision); // Parametros
            var newArray2 = aux2.iteracoes.map((item) => {
               var newObj = {
                  k: item.k,
                  xk: item.xk.map((f) => { return parseFloat(f).toFixed(numeroCasaDecimal); }), 
                  fxk: item.fxk.toFixed(numeroCasaDecimal), 
                  newD: item.newD.map((f) => { return parseFloat(f).toFixed(numeroCasaDecimal) }), 
                  newLambda: item.newLambda.toFixed(numeroCasaDecimal), 
                  newYPlusLambda: item.newYPlusLambda.map((f) => { return parseFloat(f).toFixed(numeroCasaDecimal); }),
                  intern: item.intern.map((i) => {
                      var outroObj = {
                          j: i.j, 
                          d: i.d.map((f) => { return f.toFixed(numeroCasaDecimal); }), 
                          lambda: i.lambda.toFixed(numeroCasaDecimal), 
                          yk: i.yk.map((f) => {
                            return parseFloat(f).toFixed(numeroCasaDecimal);
                          }), 
                          yk1: i.yk1.map((f) => { return parseFloat(f).toFixed(numeroCasaDecimal) })
                      };
                      return outroObj;
                  })
               };
               return newObj;
            }); 
            console.log(aux2);

            this.resultado[this.method - 1] = {
               iteracoes: newArray2, 
               resultado: aux2.resultado
            }; 
            break;
          case 3: 
            // Gradiente
            var aux3 = this.poMethods.Gradiente(this.nfEquation, this.nfx0, this.precision);
            console.log(aux3);
            // Formatando os dados para mostrar somente 4 casas decimais
            var newArray3 = aux3.iteracoes.map((item) => {
                var obj = {
                    k: item.k, 
                    xk: item.xk.map((f) => { return parseFloat(f).toFixed(4); }),
                    fxk: item.fxk.toFixed(4), 
                    grad: item.grad.map((f) => { return f.toFixed(4); }), 
                    norm_grad: item.norm_grad.toFixed(4), 
                    lambda: item.lambda.toFixed(4), 
                    xk_1: item.xk_1.map((f) => { return parseFloat(f).toFixed(4); }), 
                    dk: item.dk.map((f) => { return f.toFixed(4); })
                }; 
                return obj;
            });
            
            this.resultado[this.method-1] = {
                iteracoes: newArray3, 
                resultado: aux3.resultado
            };

            break;
          case 4:           
            // Newton
            var aux4 = this.poMethods.Newton(this.nfEquation, this.nfx0, this.precision);
            console.log(aux4);
            // Formatando os dados para mostrar somente x casas decimais
            var newArray4 = aux4.iteracoes.map((item) => {
                var casasDecimais = 2;
                var obj = {
                    k: item.k, 
                    xk: item.xk.map((f) => { return parseFloat(f).toFixed(casasDecimais); }),
                    fxk: item.fxk.toFixed(casasDecimais), 
                    grad: item.grad.map((f) => { return f.toFixed(casasDecimais); }), 
                    norm_grad: item.norm_grad.toFixed(casasDecimais), 
                    hessiana: item.hessiana.map((f) => { return f.map((f2) => { return f2.toFixed(casasDecimais); }); }), 
                    hessiana_inversa: item.hessiana_inversa.map((f)=> { return f.map((f2) => { return f2.toFixed(casasDecimais); }); }),
                    dk: item.dk.map((f) => { return f.toFixed(casasDecimais); }),
                    xk_1: item.xk_1.map((f) => { return parseFloat(f).toFixed(casasDecimais); })                   
                }; 
                return obj;
            });
            
            this.resultado[this.method-1] = {
                iteracoes: newArray4, 
                resultado: aux4.resultado
            };
            console.log(this.resultado[this.method-1]);

            break;
          case 5: 
            // Gradiente Conjugado Generalizado
            break;
          case 6: 
            //Fletcher and Reeves
            break;
          case 7: 
            // Davidon-fletcher-powell
            break;
      }

  }

  LimparResultados() {
     this.obj = null; 
     this.resultado = this.resultado.map((item) => { return null; });
     this.equation = ''; 
     this.initialX = ''; 
     this.nfEquation = ''; 
     this.nfx0 = null;
     this.quantidadeDeVariaveis = 0;
  }
}
