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
}
