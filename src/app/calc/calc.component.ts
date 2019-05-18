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
      
      // Atualiza as informaçoes no inicio do card body
      this.equation = "\\min\\limits_{ x \\in R }" + this.poMethods.TransformToLatex(this.obj.fun);
      this.initialX = this.poMethods.TransformToLatex("x0 = " + JSON.stringify(this.obj.x0));
      this.precision = this.obj.precisao;
      
      // Calcular o ponto minimo usando o método indicado
      this.ExecuteMethod();
  }

  ExecuteMethod() {
      // Seleciona o método de acordo com a escolha do usuario
      switch(this.method){
          case 1: 
            // Coordenadas ciclicas 
            this.poMethods.CoordenadasCiclicas();
            break;
          case 2: 
            // Hooke and Jeeves
            break;
          case 3: 
            // Gradiente
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
