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
  equation: string;
  initialX: string;
  precision: string = '';
  nfEquation: string; // Non formated equation
  nfx0 = [];          // Non formated equation
  collapseState = false;
  obj = null;

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
      console.log(this.method);
      this.ExecuteMethod();
  }

  ExecuteMethod() {
      // Seleciona o método de acordo com a escolha do 
      switch(parseInt(this.method)){
          case 1: 
            // Coordenadas ciclicas 
            this.poMethods.CoordenadasCiclicas(this.nfEquation, this.nfx0, this.precision);
            break;
          case 2: 
            // Hooke and Jeeves
            break;
          case 3: 
            // Gradiente
            this.poMethods.Gradiente(this.nfEquation, this.nfx0, this.precision);
            break;
          case 4: 
            // Newton 
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
}
