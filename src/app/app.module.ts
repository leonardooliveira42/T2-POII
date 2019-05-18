import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';
import { InputFunctionsComponent } from './input-functions/input-functions.component';
import { HomeComponent } from './home/home.component';
import { CalcComponent } from './calc/calc.component';
import { RouterModule, Routes } from '@angular/router';
import { CollapseModule } from 'ngx-bootstrap/collapse';
import { KatexModule } from 'ng-katex';

const appRoutes: Routes = [
    {
        path: '',
        component: HomeComponent 
    }, 
    {
        path: 'home',
        component: HomeComponent
    }, 
    {
        path: 'calc/:id',
        component: CalcComponent
    }
];

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FooterComponent,
    InputFunctionsComponent,
    HomeComponent,
    CalcComponent
  ],
  imports: [
    BrowserModule, 
    FormsModule, 
    RouterModule.forRoot(appRoutes), 
    CollapseModule.forRoot(),
    KatexModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
