import { Component, OnInit } from '@angular/core';
import { MethodsService } from './services/methods.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'Oi tania';

  nome: string;

  constructor(private math: MethodsService)  {

  }

  ngOnInit() {
      //console.log(this.math.eval('2 + 3'));
  }

  Calcular() {
      this.math.CarregarFuncao('f(x,y) = x*2 + y^3');
      console.log(this.math.ResultadoFuncao('f(5,3)'));
      console.log(this.math.Derivada('f(x,y) = x^2 + y^3', 'x', 3));
  }


}
