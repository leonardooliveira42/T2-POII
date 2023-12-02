(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".wrapper{\r\n    min-height: 100%;\r\n    position: relative;\r\n}\r\n\r\n.container{\r\n    min-height: 93vh;\r\n    padding-bottom: 150px;\r\n    position: relative;\r\n}\r\n\r\n.rodape{\r\n    position: absolute;\r\n    right: 0;\r\n    bottom: 0;\r\n    left: 0;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXBwLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxnQkFBZ0I7SUFDaEIsa0JBQWtCO0FBQ3RCOztBQUVBO0lBQ0ksZ0JBQWdCO0lBQ2hCLHFCQUFxQjtJQUNyQixrQkFBa0I7QUFDdEI7O0FBRUE7SUFDSSxrQkFBa0I7SUFDbEIsUUFBUTtJQUNSLFNBQVM7SUFDVCxPQUFPO0FBQ1giLCJmaWxlIjoic3JjL2FwcC9hcHAuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi53cmFwcGVye1xyXG4gICAgbWluLWhlaWdodDogMTAwJTtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxufVxyXG5cclxuLmNvbnRhaW5lcntcclxuICAgIG1pbi1oZWlnaHQ6IDkzdmg7XHJcbiAgICBwYWRkaW5nLWJvdHRvbTogMTUwcHg7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbn1cclxuXHJcbi5yb2RhcGV7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICByaWdodDogMDtcclxuICAgIGJvdHRvbTogMDtcclxuICAgIGxlZnQ6IDA7XHJcbn0iXX0= */"

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"wrapper\">\r\n    <app-navbar></app-navbar>\r\n\r\n    <div class=\"container\">\r\n        <router-outlet></router-outlet>\r\n    </div>\r\n\r\n    <div class=\"rodape\">\r\n        <app-footer></app-footer>\r\n    </div>\r\n</div>\r\n\r\n"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_methods_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./services/methods.service */ "./src/app/services/methods.service.ts");



var AppComponent = /** @class */ (function () {
    function AppComponent(math) {
        this.math = math;
    }
    AppComponent.prototype.ngOnInit = function () {
        //console.log(this.math.eval('2 + 3'));
    };
    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_methods_service__WEBPACK_IMPORTED_MODULE_2__["MethodsService"]])
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _navbar_navbar_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./navbar/navbar.component */ "./src/app/navbar/navbar.component.ts");
/* harmony import */ var _footer_footer_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./footer/footer.component */ "./src/app/footer/footer.component.ts");
/* harmony import */ var _input_functions_input_functions_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./input-functions/input-functions.component */ "./src/app/input-functions/input-functions.component.ts");
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./home/home.component */ "./src/app/home/home.component.ts");
/* harmony import */ var _calc_calc_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./calc/calc.component */ "./src/app/calc/calc.component.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var ngx_bootstrap_collapse__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ngx-bootstrap/collapse */ "./node_modules/ngx-bootstrap/collapse/fesm5/ngx-bootstrap-collapse.js");
/* harmony import */ var ng_katex__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ng-katex */ "./node_modules/ng-katex/ng-katex.esm.js");













var appRoutes = [
    {
        path: '',
        component: _home_home_component__WEBPACK_IMPORTED_MODULE_8__["HomeComponent"]
    },
    {
        path: 'home',
        component: _home_home_component__WEBPACK_IMPORTED_MODULE_8__["HomeComponent"]
    },
    {
        path: 'calc/:id',
        component: _calc_calc_component__WEBPACK_IMPORTED_MODULE_9__["CalcComponent"]
    }
];
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"],
                _navbar_navbar_component__WEBPACK_IMPORTED_MODULE_5__["NavbarComponent"],
                _footer_footer_component__WEBPACK_IMPORTED_MODULE_6__["FooterComponent"],
                _input_functions_input_functions_component__WEBPACK_IMPORTED_MODULE_7__["InputFunctionsComponent"],
                _home_home_component__WEBPACK_IMPORTED_MODULE_8__["HomeComponent"],
                _calc_calc_component__WEBPACK_IMPORTED_MODULE_9__["CalcComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_10__["RouterModule"].forRoot(appRoutes),
                ngx_bootstrap_collapse__WEBPACK_IMPORTED_MODULE_11__["CollapseModule"].forRoot(),
                ng_katex__WEBPACK_IMPORTED_MODULE_12__["KatexModule"]
            ],
            providers: [],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/calc/calc.component.css":
/*!*****************************************!*\
  !*** ./src/app/calc/calc.component.css ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NhbGMvY2FsYy5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/calc/calc.component.html":
/*!******************************************!*\
  !*** ./src/app/calc/calc.component.html ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"content\">\r\n    <div class=\"display-4\"> <!-- Nome do método selecionado -->\r\n      {{ methodNames[method-1] }} \r\n    </div>\r\n    <p class=\"mt-3\">  <!-- Botão para abrir ou fechar o menu de entrada de dados -->\r\n      <button class=\"btn btn-secondary btn-block\" type=\"button\" data-toggle=\"collapse\" \r\n      data-target=\"#collapseExample\" aria-expanded=\"false\" aria-controls=\"collapseExample\"\r\n      (click)=\"show()\"> {{ collapseState ? \"Abrir\" : \"Fechar\" }} </button>\r\n    </p>\r\n    <div>\r\n      <div class=\"card card-body\" [collapse]=\"collapseState\"> <!-- Componente para a entrada dos dados -->\r\n          <app-input-functions [method]=\"method\" (objectEvent)=\"ReceiveObject($event)\" ></app-input-functions>\r\n      </div>\r\n    </div>\r\n\r\n    <!-- Card para mostrar que há uma espera na entrada de dados -->\r\n    <div class=\"mt-5\" *ngIf=\"obj == null || resultado[method-1] == null\">\r\n      <div class=\"card\">\r\n        <div class=\"card-body\">\r\n            <div class=\"display-4\">\r\n                Aguardando...\r\n            </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n\r\n    <!-- Resultado -->\r\n    <div class=\"mt-5\">\r\n        <div *ngIf=\"obj != null && resultado[method-1] != null\" class=\"card\">\r\n            <div class=\"card-header\">\r\n                <h4> Método {{ methodNames[method-1] }} </h4> \r\n            </div>\r\n            <div class=\"card-body\">\r\n              <!-- Informações dos dados de entrada -->\r\n              <div class=\"row\">\r\n                <div class=\"col-8\">\r\n                  <!-- Equação -->\r\n                  <label for=\"\"> Função objetivo</label>\r\n                </div>\r\n                <div class=\"col-2\">\r\n                  <label for=\"\"> X inicial </label>\r\n                </div>\r\n                <div class=\"col-2\">\r\n                  <label for=\"\"> Precisao (&epsilon;) </label>\r\n                </div>\r\n              </div>\r\n              <div class=\"row\">\r\n                <div class=\"col-8\">\r\n                    <ng-katex [equation]=\"equation\"> </ng-katex>\r\n                </div>\r\n                <div class=\"col-2\">\r\n                  <ng-katex [equation]=\"initialX\"></ng-katex>\r\n                </div>\r\n                <div class=\"col-2\">\r\n                    <span *ngIf=\" precision != ''\"> &epsilon; = </span>{{ precision }}\r\n                </div>\r\n              </div>\r\n              <!-- Resultados e iterações -->\r\n              <div class=\"resultados\" *ngIf=\"resultado[method-1] != null && method == 1\"> <!-- Coordenadas Ciclicas -->\r\n                   <table class=\"table table-bordered text-center mt-5\">\r\n                     <thead class=\"thead-dark\">\r\n                        <th> Iteração </th>\r\n                        <th> (x<sub>k</sub>)<sup><small>T</small></sup> </th>\r\n                        <th> f(x<sub>k</sub>) </th>\r\n                        <th> j </th>\r\n                        <th> (d<sub>j</sub>)<sup><small>T</small></sup> </th>\r\n                        <th> (y<sub>j</sub>)<sup><small>T</small></sup> </th>\r\n                        <th> &lambda;<sub>j</sub></th>\r\n                        <th> (y<sub>j+1</sub>)<sup><small>T</small></sup> </th>\r\n                     </thead>\r\n                     <tbody>\r\n                       <ng-container *ngFor=\"let item of resultado[method-1].iteracoes\">\r\n                        <tr>\r\n                          <td style=\"vertical-align: middle;\" [attr.rowspan]=\"obj.qV\"> {{ item.k }} </td>\r\n                          <td style=\"vertical-align: middle;\" [attr.rowspan]=\"obj.qV\"> ({{ item.xk }}) </td>\r\n                          <td style=\"vertical-align: middle;\" [attr.rowspan]=\"obj.qV\"> {{ item.fxk }} </td>\r\n                          <td> {{ item.intern[0].j }} </td>\r\n                          <td> ({{ item.intern[0].d }}) </td>\r\n                          <td> ({{ item.intern[0].yk }}) </td>\r\n                          <td> {{ item.intern[0].lbda }} </td>\r\n                          <td> ({{ item.intern[0].yk1 }}) </td>\r\n                        </tr>\r\n                        <ng-container *ngFor=\"let i of item.intern\">\r\n                          <tr *ngIf=\" i.j != 0\">\r\n                            <td> {{ i.j }} </td>\r\n                            <td> ({{ i.d }}) </td>\r\n                            <td> ({{ i.yk }}) </td>\r\n                            <td> {{ i.lbda }} </td>\r\n                            <td> ({{ i.yk1 }}) </td>\r\n                          </tr>\r\n                        </ng-container>\r\n                      </ng-container>\r\n                     </tbody>\r\n                     <tfoot class=\"thead-dark\">\r\n                        <th> Iteração </th>\r\n                        <th> (x<sub>k</sub>)<sup><small>T</small></sup> </th>\r\n                        <th> f(x<sub>k</sub>) </th>\r\n                        <th> j </th>\r\n                        <th> (d<sub>j</sub>)<sup><small>T</small></sup> </th>\r\n                        <th> (y<sub>j</sub>)<sup><small>T</small></sup> </th>\r\n                        <th> &lambda;<sub>j</sub></th>\r\n                        <th> (y<sub>j+1</sub>)<sup><small>T</small></sup> </th>\r\n                     </tfoot>\r\n                  </table>\r\n              </div>\r\n\r\n              <div class=\"resultados\" *ngIf=\"resultado[method-1] != null && method == 2\"> <!-- Hooke and Jeeves -->\r\n                <table class=\"table table-bordered text-center mt-5\" style=\"vertical-align: middle;\">\r\n                  <thead class=\"thead-dark\">\r\n                     <th> k </th>\r\n                     <th> (x<sub>k</sub>)<sup><small>T</small></sup> </th>\r\n                     <th> f(x<sub>k</sub>) </th>\r\n                     <th> j </th>\r\n                     <th> (y<sub>j</sub>)<sup><small>T</small></sup></th>\r\n                     <th> (d<sub>j</sub>)<sup><small>T</small></sup></th>  \r\n                     <th> &lambda;<sub>j</sub></th>\r\n                     <th> (y<sub>j+1</sub>)<sup><small>T</small></sup></th>\r\n                     <th> (d^)<sup><small>T</small></sup> </th>\r\n                     <th> &lambda;^ </th>\r\n                     <th> (y<sub>3</sub> + (&lambda;^)*d^)<sup><small>T</small></sup> </th>\r\n                  </thead>\r\n                  <tbody>\r\n                    <ng-container *ngFor=\"let item of resultado[method-1].iteracoes\" >\r\n                       <tr>\r\n                          <td [attr.rowspan]=\"obj.qV\"> {{ item.k }} </td>\r\n                          <td [attr.rowspan]=\"obj.qV\"> ( {{ item.xk }} ) </td>\r\n                          <td [attr.rowspan]=\"obj.qV\">  {{ item.fxk }} </td>\r\n                          <td> {{ item.intern[0].j }} </td>\r\n                          <td> ( {{ item.intern[0].yk }} ) </td>\r\n                          <td> ( {{ item.intern[0].d }} ) </td>\r\n                          <td> {{ item.intern[0].lambda }} </td>\r\n                          <td> ( {{ item.intern[0].yk1 }} ) </td>\r\n                          <td> ( {{ item.newD }} ) </td>\r\n                          <td> ( {{ item.newLambda }} ) </td>\r\n                          <td> ( {{ item.newYPlusLambda }} ) </td>\r\n                       </tr>\r\n                       <ng-container *ngFor=\"let i of item.intern\">\r\n                         <tr *ngIf=\"i.j != 0\">\r\n                            <td> {{ i.j }} </td>\r\n                            <td> ( {{ i.yk }} ) </td>\r\n                            <td> ( {{ i.d }} ) </td>\r\n                            <td> {{ i.lambda }} </td>\r\n                            <td> ( {{ i.yk1 }} ) </td>\r\n                            <td> ( {{ item.newD }} ) </td>\r\n                            <td> ( {{ item.newLambda }} ) </td>\r\n                            <td> ( {{ item.newYPlusLambda }} ) </td>\r\n                         </tr>\r\n                       </ng-container>\r\n                    </ng-container>\r\n                  </tbody>\r\n                  <tfoot class=\"thead-dark\">\r\n                      <th> k </th>\r\n                      <th> (x<sub>k</sub>)<sup><small>T</small></sup> </th>\r\n                      <th> f(x<sub>k</sub>) </th>\r\n                      <th> j </th>\r\n                      <th> (y<sub>j</sub>)<sup><small>T</small></sup></th>\r\n                      <th> (d<sub>j</sub>)<sup><small>T</small></sup></th>  \r\n                      <th> &lambda;<sub>j</sub></th>\r\n                      <th> (y<sub>j+1</sub>)<sup><small>T</small></sup></th>\r\n                      <th> (d^)<sup><small>T</small></sup> </th>\r\n                      <th> &lambda;^ </th>\r\n                      <th> (y<sub>3</sub> + (&lambda;^)*d^)<sup><small>T</small></sup> </th>\r\n                  </tfoot>\r\n               </table>\r\n              </div>\r\n\r\n              <div class=\"resultados\" *ngIf=\"resultado[method-1] != null  && method == 3\"> <!-- Método do gradiente -->\r\n                <table class=\"table table-bordered text-center mt-5\">\r\n                  <thead class=\"thead-dark\">\r\n                     <th> Iteração </th>\r\n                     <th> (x<sub>k</sub>)<sup><small>T</small></sup> </th>\r\n                     <th> f(x<sub>k</sub>) </th>\r\n                     <th> (grad f(x<sub>k</sub>))<sup><small>T</small></sup> </th>\r\n                     <th> || grad f(x<sub>k</sub>) ||</th>\r\n                     <th> (d<sub>k</sub>)<sup><small>T</small></sup> = - (grad f(x<sub>k</sub>))<sup><small>T</small></sup></th>\r\n                     <th> &lambda;<sub>k</sub></th>\r\n                     <th> (x<sub>k+1</sub>)<sup><small>T</small></sup></th>\r\n                  </thead>\r\n                  <tbody>\r\n                    <ng-container *ngFor=\"let item of resultado[method-1].iteracoes\">\r\n                      <tr>\r\n                        <td> {{ item.k }} </td>\r\n                        <td> ( {{ item.xk }} ) </td>\r\n                        <td> {{ item.fxk }} </td>\r\n                        <td> ( {{ item.grad }} ) </td>\r\n                        <td> {{ item.norm_grad }} </td>\r\n                        <td> ( {{ item.dk }} ) </td>\r\n                        <td> {{ item.lambda }} </td>\r\n                        <td> ( {{ item.xk_1 }} ) </td>\r\n                      </tr>\r\n                    </ng-container>\r\n                  </tbody>\r\n                  <tfoot class=\"thead-dark\">\r\n                      <th> Iteração </th>\r\n                      <th> (x<sub>k</sub>)<sup><small>T</small></sup> </th>\r\n                      <th> f(x<sub>k</sub>) </th>\r\n                      <th> (grad f(x<sub>k</sub>))<sup><small>T</small></sup> </th>\r\n                      <th> || grad f(x<sub>k</sub>) ||</th>\r\n                      <th> (d<sub>k</sub>)<sup><small>T</small></sup> = - (grad f(x<sub>k</sub>))<sup><small>T</small></sup></th>\r\n                      <th> &lambda;<sub>k</sub></th>\r\n                      <th> (x<sub>k+1</sub>)<sup><small>T</small></sup></th>\r\n                  </tfoot>\r\n               </table>\r\n              </div>\r\n\r\n              <div class=\"resultados\" *ngIf=\"resultado[method-1] != null  && method == 4\"> <!-- Método do gradiente -->\r\n                <table class=\"table table-bordered text-center mt-5\">\r\n                  <thead class=\"thead-dark\">\r\n                    <th> k </th>\r\n                    <th> (x<sub>k</sub>)<sup><small>T</small></sup> <br> f(x<sub>k</sub>) </th>\r\n                    <th> grad f(x<sub>k</sub>) <br> || grad f(x<sub>k</sub>) || </th>\r\n                    <th> H(x<sub>k</sub>) </th>\r\n                    <th> H(x<sub>k</sub>)<sup>-1</sup> </th>\r\n                    <th> (d<sub>k</sub>)<sup><small>T</small></sup> = - (grad f(x<sub>k</sub>))<sup><small>T</small></sup></th>\r\n                    <th> (x<sub>k+1</sub>)<sup><small>T</small></sup></th>\r\n                  </thead>\r\n                  <tbody>\r\n                    <ng-container *ngFor=\"let item of resultado[method-1].iteracoes\">\r\n                      <tr>\r\n                        <td> {{ item.k }} </td>\r\n                        <td> ( {{ item.xk }} ) <br> {{ item.fxk }} </td>\r\n                        <td> ( {{ item.grad }} ) <br> {{ item.norm_grad }} </td>\r\n                        <td> <ng-container *ngFor=\"let linha of item.hessiana\"> {{ linha }} <br> </ng-container> </td><!-- <ng-container  *ngFor=\"let linha of item.hessiana\"> {{ linha }} <br> </ng-container>  </td>-->\r\n                        <td> <ng-container *ngFor=\"let linha of item.hessiana_inversa\"> {{ linha }} <br> </ng-container> </td>\r\n                        <td> ( {{ item.dk }} ) </td>\r\n                        <td> ( {{ item.xk_1 }} ) </td>\r\n                      </tr>\r\n                    </ng-container>\r\n                  </tbody>\r\n                  <tfoot class=\"thead-dark\">\r\n                      <th> k </th>\r\n                      <th> (x<sub>k</sub>)<sup><small>T</small></sup> <br> f(x<sub>k</sub>) </th>\r\n                      <th> grad f(x<sub>k</sub>) <br> || grad f(x<sub>k</sub>) || </th>\r\n                      <th> H(x<sub>k</sub>) </th>\r\n                      <th> H(x<sub>k</sub>)<sup>-1</sup> </th>\r\n                      <th> (d<sub>k</sub>)<sup><small>T</small></sup> = - (grad f(x<sub>k</sub>))<sup><small>T</small></sup></th>\r\n                      <th> (x<sub>k+1</sub>)<sup><small>T</small></sup></th>\r\n                  </tfoot>\r\n                </table>\r\n              </div>\r\n\r\n              <div class=\"resultados\" *ngIf=\"resultado[method-1] != null  && method == 5\"> <!-- Método do gradiente conjugado-->\r\n                <table class=\"table table-bordered text-center mt-5\">\r\n                  <thead class=\"thead-dark\">\r\n                     <th> Iteração </th>\r\n                     <th> (x<sub>k</sub>)<sup><small>T</small></sup> </th>\r\n                     <th> g<sup>k</sup></th>\r\n                     <th> (d<sub>k</sub>)<sup><small>T</small></sup>\r\n                     <th> &lambda;<sub>k</sub></th>\r\n                     <th> (x<sub>k+1</sub>)<sup><small>T</small></sup> </th>\r\n                     <th> g<sup>k+1</sup></th>\r\n                     <th> &beta;<sub>k</sub></th>\r\n                     <th> (d<sub>k+1</sub>)<sup><small>T</small></sup>\r\n                  </thead>\r\n                  <tbody>\r\n                    <ng-container *ngFor=\"let item of resultado[method-1].iteracoes\">\r\n                      <tr>\r\n                        <td> {{ item.k }} </td>\r\n                        <td> ( {{ item.xk }} ) </td>\r\n                        <td> {{ item.gk }} </td>\r\n                        <td> ( {{ item.dk }} ) </td>\r\n                        <td> {{ item.lambdak }} </td>\r\n                        <td> ( {{ item.xk_1 }} ) </td>\r\n                        <td> {{ item.gk_1 }} </td>\r\n                        <td> ( {{ item.bk }} ) </td>\r\n                        <td> ( {{ item.dk_1 }} ) </td>\r\n                      </tr>\r\n                    </ng-container>\r\n                  </tbody>\r\n                  <tfoot class=\"thead-dark\">\r\n                      <th> Iteração </th>\r\n                      <th> (x<sub>k</sub>)<sup><small>T</small></sup> </th>\r\n                      <th> g<sup>k</sup></th>\r\n                      <th> (d<sub>k</sub>)<sup><small>T</small></sup>\r\n                      <th> &lambda;<sub>k</sub></th>\r\n                      <th> (x<sub>k+1</sub>)<sup><small>T</small></sup> </th>\r\n                      <th> g<sup>k+1</sup></th>\r\n                      <th> &beta;<sub>k</sub></th>\r\n                      <th> (d<sub>k+1</sub>)<sup><small>T</small></sup>\r\n                  </tfoot>\r\n               </table>\r\n              </div>\r\n\r\n              <div class=\"resultados\" *ngIf=\"resultado[method-1] != null  && method == 6\"> <!-- Método do Fleetcher and Reeves -->\r\n                <table class=\"table table-bordered text-center mt-5\">\r\n                  <thead class=\"thead-dark\">\r\n                      <th> k </th>\r\n                      <th> (x<sub>k</sub>)<sup><small>T</small></sup> <br> f(x<sub>k</sub>) </th>\r\n                      <th> j </th>\r\n                      <th> (y<sub>j</sub>)<sup><small>T</small></sup> <br> f(y<sub>j</sub>) </th>\r\n                      <th> (grad f(y<sub>j</sub>))<sup><small>T</small></sup> </th>\r\n                      <th> || grad f(y<sub>j</sub>) || </th>\r\n                      <th> &beta; </th>\r\n                      <th> (d<sub>j</sub>)<sup><small>T</small></sup></th>\r\n                      <th> &lambda;<sub>j</sub> </th>\r\n                      <th> (y<sub>j+1</sub>)<sup><small>T</small></sup> </th>\r\n                  </thead>\r\n                  <tbody>\r\n                    <ng-container *ngFor=\"let item of resultado[method-1].iteracoes\">\r\n                        <tr> \r\n                            <td [attr.rowspan]=\"obj.qV\"> {{ item.k }} </td>\r\n                            <td [attr.rowspan]=\"obj.qV\">  ({{ item.xk }}) <br> {{ item.fxk }}  </td>\r\n                            <td> {{ item.intern[0].j }} </td>\r\n                            <td> ({{ item.intern[0].y1 }}) <br> {{ item.intern[0].fy1 }} </td>\r\n                            <td> ( {{ item.intern[0].grady1 }} ) </td>\r\n                            <td> {{ item.intern[0].norm_grad }} </td>\r\n                            <td> {{ item.intern[0].beta }} </td>\r\n                            <td> ( {{ item.intern[0].dj }} ) </td>\r\n                            <td> {{ item.intern[0].lambda }} </td>\r\n                            <td> ( {{ item.intern[0].yk1 }} ) </td>\r\n                        </tr>\r\n                        <ng-container *ngFor=\"let linha of item.intern\">\r\n                          <tr *ngIf=\"linha.j != 0\"> \r\n                              <td> {{ linha.j }} </td>\r\n                              <td> ({{ linha.y1 }}) <br> {{ linha.fy1 }} </td>\r\n                              <td> ( {{ linha.grady1 }} ) </td>\r\n                              <td> {{ linha.norm_grad }} </td>\r\n                              <td> {{ linha.beta }} </td>\r\n                              <td> ( {{ linha.dj }} ) </td>\r\n                              <td> {{ linha.lambda }} </td>\r\n                              <td> ( {{ linha.yk1 }} ) </td>\r\n                          </tr>\r\n                        </ng-container>\r\n                    </ng-container>\r\n                  </tbody>\r\n                  <tfoot class=\"thead-dark\">\r\n                      <th> k </th>\r\n                      <th> (x<sub>k</sub>)<sup><small>T</small></sup> <br> f(x<sub>k</sub>) </th>\r\n                      <th> j </th>\r\n                      <th> (y<sub>j</sub>)<sup><small>T</small></sup> <br> f(y<sub>j</sub>) </th>\r\n                      <th> (grad f(y<sub>j</sub>))<sup><small>T</small></sup> </th>\r\n                      <th> || grad f(y<sub>j</sub>) || </th>\r\n                      <th> &beta; </th>\r\n                      <th> (d<sub>j</sub>)<sup><small>T</small></sup></th>\r\n                      <th> &lambda;<sub>j</sub> </th>\r\n                      <th> (y<sub>j+1</sub>)<sup><small>T</small></sup> </th>\r\n                  </tfoot>\r\n               </table>\r\n              </div>\r\n            </div>\r\n            <div class=\"card-footer bg-success text-white\">\r\n                <h3> Resultado: </h3>\r\n                <div class=\"row\">\r\n                  <div class=\"col\">\r\n                    (x*)<sup><small>T</small></sup> = ( {{ resultado[method-1].resultado }} )\r\n                  </div>\r\n                  <div class=\"col\">\r\n                    Quantidade de iterações: {{ resultado[method-1].iteracoes.length }}\r\n                  </div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n\r\n    <button class=\"btn btn-warning mt-5 btn-block\" (click)=\"LimparResultados()\"> Limpar resultados </button>\r\n\r\n  </div>"

/***/ }),

/***/ "./src/app/calc/calc.component.ts":
/*!****************************************!*\
  !*** ./src/app/calc/calc.component.ts ***!
  \****************************************/
/*! exports provided: CalcComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CalcComponent", function() { return CalcComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_methods_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/methods.service */ "./src/app/services/methods.service.ts");




var CalcComponent = /** @class */ (function () {
    function CalcComponent(route, poMethods) {
        this.route = route;
        this.poMethods = poMethods;
        this.methodNames = ["Coordenadas Cíclicas", "Hooke and Jeeves", "Gradiente", "Newton",
            "Gradiente Conjugado Generalizado", "Fletcher and Reeves", "Davidon-Fletcher-Powell"];
        this.precision = '';
        this.nfx0 = []; // Non formated equation
        this.collapseState = false;
        this.q = [];
        this.b = [];
        this.obj = null;
        this.resultado = [null, null, null, null, null, null, null];
    }
    CalcComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route.paramMap.subscribe(function (params) {
            _this.method = params.get("id");
        });
    };
    CalcComponent.prototype.show = function () {
        this.collapseState = !this.collapseState;
    };
    CalcComponent.prototype.ReceiveObject = function ($event) {
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
        if (this.method == 5) {
            this.q = this.obj.q;
            this.b = this.obj.b;
        }
        // Calcular o ponto minimo usando o método indicado
        this.ExecuteMethod();
    };
    CalcComponent.prototype.ExecuteMethod = function () {
        // Seleciona o método de acordo com a escolha do 
        switch (parseInt(this.method)) {
            case 1:
                // Coordenadas ciclicas 
                //this.resultado[this.method-1] 
                var aux = this.poMethods.CoordenadasCiclicas(this.nfEquation, this.nfx0, this.precision);
                var newArray = aux.iteracoes.map(function (item) {
                    var newobj = {
                        k: item.k,
                        xk: item.xk.map(function (variavel) { return parseFloat(parseFloat(variavel).toFixed(4)); }),
                        fxk: parseFloat(parseFloat(item.fxk).toFixed(4)),
                        intern: item.intern.map(function (fo) {
                            var newforObj = {
                                j: fo.j,
                                d: fo.d,
                                yk: fo.yk.map(function (f) { return parseFloat(parseFloat(f).toFixed(4)); }),
                                lbda: parseFloat(parseFloat(fo.lbda).toFixed(4)),
                                yk1: fo.yk1.map(function (f) { return parseFloat(parseFloat(f).toFixed(4)); })
                            };
                            return newforObj;
                        })
                    };
                    return newobj;
                });
                this.resultado[this.method - 1] = {
                    iteracoes: newArray,
                    resultado: aux.resultado //this.poMethods.TransformToLatex("x* = " + JSON.stringify(aux.resultado))
                };
                break;
            case 2:
                // Hooke and Jeeves
                var numeroCasaDecimal = 3;
                var aux2 = this.poMethods.HookeAndJeeves(this.nfEquation, this.nfx0, this.precision); // Parametros
                var newArray2 = aux2.iteracoes.map(function (item) {
                    var newObj = {
                        k: item.k,
                        xk: item.xk.map(function (f) { return parseFloat(f).toFixed(numeroCasaDecimal); }),
                        fxk: item.fxk.toFixed(numeroCasaDecimal),
                        newD: item.newD.map(function (f) { return parseFloat(f).toFixed(numeroCasaDecimal); }),
                        newLambda: item.newLambda.toFixed(numeroCasaDecimal),
                        newYPlusLambda: item.newYPlusLambda.map(function (f) { return parseFloat(f).toFixed(numeroCasaDecimal); }),
                        intern: item.intern.map(function (i) {
                            var outroObj = {
                                j: i.j,
                                d: i.d.map(function (f) { return f.toFixed(numeroCasaDecimal); }),
                                lambda: i.lambda.toFixed(numeroCasaDecimal),
                                yk: i.yk.map(function (f) {
                                    return parseFloat(f).toFixed(numeroCasaDecimal);
                                }),
                                yk1: i.yk1.map(function (f) { return parseFloat(f).toFixed(numeroCasaDecimal); })
                            };
                            return outroObj;
                        })
                    };
                    return newObj;
                });
                this.resultado[this.method - 1] = {
                    iteracoes: newArray2,
                    resultado: aux2.resultado
                };
                break;
            case 3:
                // Gradiente
                var aux3 = this.poMethods.Gradiente(this.nfEquation, this.nfx0, this.precision);
                // Formatando os dados para mostrar somente 4 casas decimais
                var newArray3 = aux3.iteracoes.map(function (item) {
                    var obj = {
                        k: item.k,
                        xk: item.xk.map(function (f) { return parseFloat(f).toFixed(4); }),
                        fxk: item.fxk.toFixed(4),
                        grad: item.grad.map(function (f) { return f.toFixed(4); }),
                        norm_grad: item.norm_grad.toFixed(4),
                        lambda: item.lambda.toFixed(4),
                        xk_1: item.xk_1.map(function (f) { return parseFloat(f).toFixed(4); }),
                        dk: item.dk.map(function (f) { return f.toFixed(4); })
                    };
                    return obj;
                });
                this.resultado[this.method - 1] = {
                    iteracoes: newArray3,
                    resultado: aux3.resultado
                };
                break;
            case 4:
                // Newton
                var aux4 = this.poMethods.Newton(this.nfEquation, this.nfx0, this.precision);
                // Formatando os dados para mostrar somente x casas decimais
                var newArray4 = aux4.iteracoes.map(function (item) {
                    var casasDecimais = 2;
                    var obj = {
                        k: item.k,
                        xk: item.xk.map(function (f) { return parseFloat(f).toFixed(casasDecimais); }),
                        fxk: item.fxk.toFixed(casasDecimais),
                        grad: item.grad.map(function (f) { return f.toFixed(casasDecimais); }),
                        norm_grad: item.norm_grad.toFixed(casasDecimais),
                        hessiana: item.hessiana.map(function (f) { return f.map(function (f2) { return f2.toFixed(casasDecimais); }); }),
                        hessiana_inversa: item.hessiana_inversa.map(function (f) { return f.map(function (f2) { return f2.toFixed(casasDecimais); }); }),
                        dk: item.dk.map(function (f) { return f.toFixed(casasDecimais); }),
                        xk_1: item.xk_1.map(function (f) { return parseFloat(f).toFixed(casasDecimais); })
                    };
                    return obj;
                });
                this.resultado[this.method - 1] = {
                    iteracoes: newArray4,
                    resultado: aux4.resultado
                };
                break;
            case 5:
                // Gradiente Conjugado Generalizado 
                var aux5 = this.poMethods.GradienteConjugadoGeneralizado(this.nfEquation, this.nfx0, this.precision, this.q, this.b);
                var newArray5 = aux5.iteracoes.map(function (item) {
                    var casasDecimais = 2;
                    var obj = {
                        k: item.k,
                        xk: item.xk.map(function (f) { return parseFloat(f).toFixed(casasDecimais); }),
                        gk: item.gk.map(function (f) { return f.toFixed(casasDecimais); }),
                        dk: item.dk.map(function (f) { return f.toFixed(casasDecimais); }),
                        lambdak: item.lambdak.toFixed(casasDecimais),
                        xk_1: item.xk_1.map(function (f) { return parseFloat(f).toFixed(casasDecimais); }),
                        gk_1: item.gk_1.map(function (f) { return f.toFixed(casasDecimais); }),
                        bk: item.bk,
                        dk_1: item.dk_1.map(function (f) { return f.toFixed(casasDecimais); }),
                    };
                    return obj;
                });
                this.resultado[this.method - 1] = {
                    iteracoes: newArray5,
                    resultado: aux5.resultado
                };
                break;
            case 6:
                //Fletcher and Reeves
                var aux6 = this.poMethods.FletcherAndReeves(this.nfEquation, this.nfx0, this.precision, this.nfx0.length);
                this.resultado[this.method - 1] = {
                    iteracoes: aux6.iteracoes.map(function (item) {
                        var casasDecimais = 3;
                        var objeto = {
                            k: item.k,
                            xk: item.xk.map(function (x) { return parseFloat(x).toFixed(casasDecimais); }),
                            fxk: item.fxk.toFixed(casasDecimais),
                            intern: item.intern.map(function (i2) {
                                var obj2 = {
                                    j: i2.j,
                                    y1: i2.y1.map(function (y) { return parseFloat(y).toFixed(casasDecimais); }),
                                    fy1: i2.fy1.toFixed(casasDecimais),
                                    grady1: i2.grady1.map(function (g) { return parseFloat(g).toFixed(casasDecimais); }),
                                    norm_grad: i2.norm_grad.toFixed(casasDecimais),
                                    beta: (i2.beta != null) ? i2.beta.toFixed(casasDecimais + 3) : '-',
                                    dj: i2.dj.map(function (d) { return parseFloat(d).toFixed(casasDecimais); }),
                                    lambda: i2.lambda.toFixed(casasDecimais),
                                    yk1: i2.yk1.map(function (y1) { return y1.toFixed(casasDecimais); })
                                };
                                return obj2;
                            })
                        };
                        return objeto;
                    }),
                    resultado: aux6.resultado
                };
                break;
            case 7:
                // Davidon-fletcher-powell
                //var aux7 = this.poMethods.DavidonFletcherPowell(this.nfEquation, this.nfx0, this.precision, this.nfx0.length);
                //console.log(aux7); 
                //this.resultado[this.method-1] = aux7; 
                alert('Não conseguimos terminar a implementação deste método');
                break;
        }
    };
    CalcComponent.prototype.LimparResultados = function () {
        this.obj = null;
        this.resultado = this.resultado.map(function (item) { return null; });
        this.equation = '';
        this.initialX = '';
        this.nfEquation = '';
        this.nfx0 = null;
        this.quantidadeDeVariaveis = 0;
        this.q = null;
        this.b = null;
    };
    CalcComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-calc',
            template: __webpack_require__(/*! ./calc.component.html */ "./src/app/calc/calc.component.html"),
            styles: [__webpack_require__(/*! ./calc.component.css */ "./src/app/calc/calc.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"],
            _services_methods_service__WEBPACK_IMPORTED_MODULE_3__["MethodsService"]])
    ], CalcComponent);
    return CalcComponent;
}());



/***/ }),

/***/ "./src/app/footer/footer.component.css":
/*!*********************************************!*\
  !*** ./src/app/footer/footer.component.css ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "div {\r\n    height: 100px;\r\n    width: 100%;\r\n    background: rgb(32, 32, 36);\r\n    color: white;\r\n    padding: 20px;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZm9vdGVyL2Zvb3Rlci5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksYUFBYTtJQUNiLFdBQVc7SUFDWCwyQkFBMkI7SUFDM0IsWUFBWTtJQUNaLGFBQWE7QUFDakIiLCJmaWxlIjoic3JjL2FwcC9mb290ZXIvZm9vdGVyLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJkaXYge1xyXG4gICAgaGVpZ2h0OiAxMDBweDtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgYmFja2dyb3VuZDogcmdiKDMyLCAzMiwgMzYpO1xyXG4gICAgY29sb3I6IHdoaXRlO1xyXG4gICAgcGFkZGluZzogMjBweDtcclxufSJdfQ== */"

/***/ }),

/***/ "./src/app/footer/footer.component.html":
/*!**********************************************!*\
  !*** ./src/app/footer/footer.component.html ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div>\r\nUniversidade Estadual Paulista \"Júlio de Mesquita Filho\" - Bacharelado em Ciência da Computação\r\n</div>"

/***/ }),

/***/ "./src/app/footer/footer.component.ts":
/*!********************************************!*\
  !*** ./src/app/footer/footer.component.ts ***!
  \********************************************/
/*! exports provided: FooterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FooterComponent", function() { return FooterComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var FooterComponent = /** @class */ (function () {
    function FooterComponent() {
    }
    FooterComponent.prototype.ngOnInit = function () {
    };
    FooterComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-footer',
            template: __webpack_require__(/*! ./footer.component.html */ "./src/app/footer/footer.component.html"),
            styles: [__webpack_require__(/*! ./footer.component.css */ "./src/app/footer/footer.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], FooterComponent);
    return FooterComponent;
}());



/***/ }),

/***/ "./src/app/home/home.component.css":
/*!*****************************************!*\
  !*** ./src/app/home/home.component.css ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2hvbWUvaG9tZS5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/home/home.component.html":
/*!******************************************!*\
  !*** ./src/app/home/home.component.html ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p></p>\r\n<p>\r\n  Este trabalho utiliza Programação Não Linear de Multivariáveis Irrestritas\r\n  para a resolução de métodos como:\r\n</p>\r\n<ul>\r\n  <li>Coordenadas Cíclicas;</li>\r\n  <li>Hooke and Jeeves;</li>\r\n  <li>Gradiente;</li>\r\n  <li>Newton;</li>\r\n  <li>Gradiente Conjugado Generalizado;</li>\r\n  <li>Fletcher and Reeves;</li>\r\n  <li><s> Davidon-Fletcher-Powell. </s> Método não concluido :/</li>\r\n</ul>\r\n<p>\r\n  Ele foi desenvolvido como parte da conclusão da disciplina de Pesquisa\r\n  Operacional II ministrada pela professora Dr. Márcia A. Zanoli Meira e Silva.\r\n</p>\r\n<p></p>\r\n\r\n<p>\r\n  O software possui, em seu cabeçalho, uma barra de menu, onde é possível\r\n  selecionar entre a página inicial (Home) e as páginas de métodos. Quando\r\n  desejado ir para os métodos, aparecerá todas as opções citadas anteriormente.\r\n  Dessa forma, o usuário seleciona o método que melhor o atender no momento.\r\n</p>\r\n<p>\r\n  Em todos os métodos é necessário que o usuário complete corretamente todos os\r\n  campos pedidos para que o cálculo seja concluído. Aparecerá, então, a tabela\r\n  de iterações, mostrando os resultados do método por iteração e o resultado\r\n  ótimo ao final junto com a quantidade de iterações necessárias para a\r\n  convergência.\r\n</p>\r\n<p>\r\n  Todos os cálculos são realizados com inúmeras casas decimais. Entretanto, para\r\n  fins visuais foram apresentados nas tabelas apenas de 3 a 4 casas decimais.\r\n  Logo alguns valores podem parecer inalterados, mas isso ocorre devido as\r\n  mudanças nas casas decimais não aparecerem.\r\n</p>\r\n"

/***/ }),

/***/ "./src/app/home/home.component.ts":
/*!****************************************!*\
  !*** ./src/app/home/home.component.ts ***!
  \****************************************/
/*! exports provided: HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var HomeComponent = /** @class */ (function () {
    function HomeComponent() {
    }
    HomeComponent.prototype.ngOnInit = function () {
    };
    HomeComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-home',
            template: __webpack_require__(/*! ./home.component.html */ "./src/app/home/home.component.html"),
            styles: [__webpack_require__(/*! ./home.component.css */ "./src/app/home/home.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], HomeComponent);
    return HomeComponent;
}());



/***/ }),

/***/ "./src/app/input-functions/input-functions.component.css":
/*!***************************************************************!*\
  !*** ./src/app/input-functions/input-functions.component.css ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".varInput{\r\n    max-width: 100px;\r\n}\r\n\r\n.funcaos{\r\n    width: 100%;\r\n}\r\n\r\n.inputFunc{\r\n    float: right;\r\n}\r\n\r\n.valorX{\r\n    max-width: 100px;\r\n}\r\n\r\nform{\r\n    width: 100%;\r\n}\r\n\r\ninput{\r\n    border: red 2px solid;\r\n}\r\n\r\n.calc{\r\n    margin-top: 20px;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaW5wdXQtZnVuY3Rpb25zL2lucHV0LWZ1bmN0aW9ucy5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksZ0JBQWdCO0FBQ3BCOztBQUVBO0lBQ0ksV0FBVztBQUNmOztBQUVBO0lBQ0ksWUFBWTtBQUNoQjs7QUFFQTtJQUNJLGdCQUFnQjtBQUNwQjs7QUFFQTtJQUNJLFdBQVc7QUFDZjs7QUFFQTtJQUNJLHFCQUFxQjtBQUN6Qjs7QUFFQTtJQUNJLGdCQUFnQjtBQUNwQiIsImZpbGUiOiJzcmMvYXBwL2lucHV0LWZ1bmN0aW9ucy9pbnB1dC1mdW5jdGlvbnMuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi52YXJJbnB1dHtcclxuICAgIG1heC13aWR0aDogMTAwcHg7XHJcbn1cclxuXHJcbi5mdW5jYW9ze1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbn1cclxuXHJcbi5pbnB1dEZ1bmN7XHJcbiAgICBmbG9hdDogcmlnaHQ7XHJcbn1cclxuXHJcbi52YWxvclh7XHJcbiAgICBtYXgtd2lkdGg6IDEwMHB4O1xyXG59XHJcblxyXG5mb3Jte1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbn1cclxuXHJcbmlucHV0e1xyXG4gICAgYm9yZGVyOiByZWQgMnB4IHNvbGlkO1xyXG59XHJcblxyXG4uY2FsY3tcclxuICAgIG1hcmdpbi10b3A6IDIwcHg7XHJcbn0iXX0= */"

/***/ }),

/***/ "./src/app/input-functions/input-functions.component.html":
/*!****************************************************************!*\
  !*** ./src/app/input-functions/input-functions.component.html ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"funcoes\">\r\n\r\n    <form action=\"\" padding>\r\n      <div class=\"row\">\r\n        <div class=\"col-4\">\r\n            <div class=\"form-group\">\r\n              <label> Digite a quantidade de variaveis: </label>\r\n              <input type=\"number\" min=\"0\" max=\"5\" class=\"form-control varInput\" [(ngModel)]=\"quantVar\" \r\n              [ngModelOptions]=\"{standalone: true}\">\r\n            </div>\r\n        </div>\r\n        <div class=\"col-8\">\r\n          <h3> Função Objetivo </h3>\r\n          <div class=\"form-group row\">\r\n              <label for=\"\" class=\"col col-form-label\"> Min: {{ variables }} </label>\r\n              <div class=\"col\">\r\n                <input type=\"text\" class=\"form-control inputFunc\" [(ngModel)]=\"function\" \r\n                [ngModelOptions]=\"{standalone: true}\">                \r\n              </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n      <div class=\"row\" *ngIf=\" errEpsi || errFunc || errVari \">\r\n        <div class=\"col\">\r\n            <div class=\"alert alert-danger\" *ngIf=\" errFunc\" > Função incompativel </div>\r\n            <div class=\"alert alert-warning\" *ngIf=\" errVari\" > Variaveis digitadas incompativeis </div>\r\n            <div class=\"alert alert-warning\" *ngIf=\" errEpsi \" > Digite um &epsilon; </div>\r\n        </div>\r\n      </div>\r\n        <div style=\"width: 100%;\" *ngIf=\"quantVar != 0\">\r\n          <div class=\"row\">\r\n            <div class=\"col\">\r\n                <h6 > Valor inicial do X: </h6>\r\n                <div class=\"form-row\">\r\n                    <div class=\"ml-2\" *ngFor=\"let item of createRange(quantVar)\">\r\n                        <input type=\"number\" placeholder=\"X{{item}}\" value=\"0\" class=\"form-control valorX\" \r\n                        [(ngModel)]=\"startX[item]\" [ngModelOptions]=\"{standalone: true}\">\r\n                    </div>\r\n                </div>\r\n            </div>\r\n            <div class=\"col\" *ngIf=\"method == 5 \">\r\n              <h6 > Q: </h6>\r\n              <div class=\"form-row\">\r\n                  <div class=\"ml-2\" *ngFor=\"let item of createRange(quantVar)\">\r\n                      <div class=\"ml-2\" *ngFor=\"let item2 of createRange(quantVar)\">\r\n                        <input type=\"number\" placeholder=\"[{{item}},{{item2}}]\" value=\"0\" class=\"form-control valorX\" \r\n                        [(ngModel)]=\"q[item*quantVar + item2]\" [ngModelOptions]=\"{standalone: true}\">\r\n                      </div>\r\n                  </div>\r\n              </div>\r\n          </div>\r\n          <div class=\"col\"*ngIf=\"method == 5 \">\r\n            <h6 > b </h6>\r\n            <div class=\"form-row\">\r\n                <div class=\"ml-2\" *ngFor=\"let item of createRange(quantVar)\">\r\n                    <input type=\"number\" placeholder=\"{{item}}\" value=\"0\" class=\"form-control valorX\" \r\n                    [(ngModel)]=\"b[item]\" [ngModelOptions]=\"{standalone: true}\">\r\n                </div>\r\n            </div>\r\n        </div>\r\n          </div>\r\n          <div class=\"row mt-3\">\r\n            <div class=\"col-4\">\r\n                <label for=\"\"> Precisão (&epsilon;): </label>\r\n                <input type=\"number\" class=\"form-control\" \r\n                [(ngModel)]=\"pre\" [ngModelOptions]=\"{standalone: true}\">\r\n            </div>\r\n            <div class=\"col-8\">\r\n                <button class=\"btn btn-dark btn-block calc\" (click)=\"SendObject()\" \r\n                [disabled]=\"function == ''\" > Calcular </button>\r\n                <span *ngIf=\"method == 5\"> O método foi feito utlizando a função do exemplo 10 na apostila. \r\n                                           Digite 1 na função somente para liberar o botão de calcular. \r\n                                           Digite os valores de x, Q, b para fazer o calculo  </span>\r\n            </div>\r\n          </div>\r\n        </div>   \r\n    </form>\r\n</div>"

/***/ }),

/***/ "./src/app/input-functions/input-functions.component.ts":
/*!**************************************************************!*\
  !*** ./src/app/input-functions/input-functions.component.ts ***!
  \**************************************************************/
/*! exports provided: InputFunctionsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InputFunctionsComponent", function() { return InputFunctionsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_methods_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/methods.service */ "./src/app/services/methods.service.ts");



var InputFunctionsComponent = /** @class */ (function () {
    function InputFunctionsComponent(methodService) {
        this.methodService = methodService;
        this.quantVar = 0;
        this.function = "";
        this.startX = [];
        this.q = [];
        this.b = [];
        // Erros de entrada dos dados
        this.errFunc = false;
        this.errVari = false;
        this.errEpsi = false;
        // TODO passar as funçoes da math para o methods service
        this.math = __webpack_require__(/*! mathjs */ "./node_modules/mathjs/index.js");
        this.objectEvent = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
    }
    InputFunctionsComponent.prototype.ngOnInit = function () { };
    // Altera a quantidade de inputs
    InputFunctionsComponent.prototype.createRange = function (number) {
        if (number != 0) {
            this.variables = "f(";
            var items = [];
            for (var i = 0; i < number; i++) {
                this.variables += " x" + i;
                if (i != number - 1)
                    this.variables += ",";
                items.push(i);
            }
            this.variables += ") = ";
            // this.variables = this.math.parse(this.variables).toTex();
            return items;
        }
        else {
            this.variables = "";
        }
    };
    // Retorna falso se a variavel digitada é diferente da que deve ser digitada
    InputFunctionsComponent.prototype.CompareVariables = function (quant, ver) {
        // Tenho o vetor com todas as variaveis
        var check = [];
        var aux;
        for (var k = 0; k < quant; k++)
            check.push("x" + k);
        for (var i = 0; i < ver.length; i++) {
            aux = false;
            for (var j = 0; j < quant; j++) {
                if (ver[i].toLowerCase() === check[j]) {
                    aux = true;
                    continue;
                }
            }
            if (aux === false) {
                return false;
            }
        }
        return true;
    };
    InputFunctionsComponent.prototype.SendObject = function () {
        // Verificar os parametros da função
        var aux2 = this.methodService.GetVariables(this.function);
        // Se houve algum erro com a função, ele entra aqui
        if (aux2[0] === "false") {
            this.errFunc = true;
        }
        else
            this.errFunc = false;
        if (!this.CompareVariables(this.quantVar, aux2) && this.method != 5) {
            this.errVari = true;
        }
        else
            this.errVari = false;
        if (this.pre == undefined) {
            this.errEpsi = true;
        }
        else
            this.errEpsi = false;
        if (!this.errEpsi && !this.errFunc && !this.errVari) {
            // Zera os valores que não foram adicionados para o vetor x
            for (var i = 0; i < this.quantVar; i++) {
                if (this.startX[i] == undefined || this.startX[i] == null) {
                    this.startX[i] = 0;
                }
            }
            var send = {};
            if (this.method == 5) {
                send = {
                    qV: this.quantVar,
                    fun: this.variables + this.function,
                    x0: this.startX,
                    precisao: this.pre,
                    q: this.q,
                    b: this.b,
                };
            }
            else {
                send = {
                    qV: this.quantVar,
                    fun: this.variables + this.function,
                    x0: this.startX,
                    precisao: this.pre,
                };
            }
            this.objectEvent.emit(send);
        }
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Number)
    ], InputFunctionsComponent.prototype, "method", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], InputFunctionsComponent.prototype, "objectEvent", void 0);
    InputFunctionsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: "app-input-functions",
            template: __webpack_require__(/*! ./input-functions.component.html */ "./src/app/input-functions/input-functions.component.html"),
            styles: [__webpack_require__(/*! ./input-functions.component.css */ "./src/app/input-functions/input-functions.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_methods_service__WEBPACK_IMPORTED_MODULE_2__["MethodsService"]])
    ], InputFunctionsComponent);
    return InputFunctionsComponent;
}());



/***/ }),

/***/ "./src/app/navbar/navbar.component.css":
/*!*********************************************!*\
  !*** ./src/app/navbar/navbar.component.css ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "nav{\r\n    min-height: 60px;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbmF2YmFyL25hdmJhci5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksZ0JBQWdCO0FBQ3BCIiwiZmlsZSI6InNyYy9hcHAvbmF2YmFyL25hdmJhci5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsibmF2e1xyXG4gICAgbWluLWhlaWdodDogNjBweDtcclxufSJdfQ== */"

/***/ }),

/***/ "./src/app/navbar/navbar.component.html":
/*!**********************************************!*\
  !*** ./src/app/navbar/navbar.component.html ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar navbar-expand-lg navbar-dark bg-dark\">\r\n  <a class=\"navbar-brand\" href=\"#\"> T2 - PO II </a>\r\n  <button class=\"navbar-toggler\" type=\"button\" data-toggle=\"collapse\" data-target=\"#navbarNavDropdown\" aria-controls=\"navbarNavDropdown\" aria-expanded=\"false\" aria-label=\"Toggle navigation\">\r\n    <span class=\"navbar-toggler-icon\"></span>\r\n  </button>\r\n  <div class=\"collapse navbar-collapse\" id=\"navbarNavDropdown\">\r\n    <ul class=\"navbar-nav\">\r\n      <li class=\"nav-item active\">\r\n        <a class=\"nav-link\" href=\"#\">Home <span class=\"sr-only\">(current)</span></a>\r\n      </li>\r\n      <li class=\"nav-item dropdown\">\r\n        <a class=\"nav-link dropdown-toggle\" href=\"#\" id=\"navbarDropdownMenuLink\" role=\"button\" data-toggle=\"dropdown\" aria-haspopup=\"true\" aria-expanded=\"false\">\r\n          Métodos\r\n        </a>\r\n        <div class=\"dropdown-menu\" aria-labelledby=\"navbarDropdownMenuLink\">\r\n          <a class=\"dropdown-item\" [routerLink]=\"['/calc', 1]\"> Coordenadas Cíclicas </a>\r\n          <a class=\"dropdown-item\" [routerLink]=\"['/calc', 2]\"> Hooke and Jeeves </a>\r\n          <a class=\"dropdown-item\" [routerLink]=\"['/calc', 3]\"> Gradiente </a>\r\n          <a class=\"dropdown-item\" [routerLink]=\"['/calc', 4]\"> Newton </a>\r\n          <a class=\"dropdown-item\" [routerLink]=\"['/calc', 5]\"> Gradiente Conjugado Generalizado </a>\r\n          <a class=\"dropdown-item\" [routerLink]=\"['/calc', 6]\"> Fletcher and Reeves </a>\r\n          <a class=\"dropdown-item\" [routerLink]=\"['/calc', 7]\"> Davidon-Fletcher-Powell </a>\r\n        </div>\r\n      </li>\r\n    </ul>\r\n  </div>\r\n</nav>"

/***/ }),

/***/ "./src/app/navbar/navbar.component.ts":
/*!********************************************!*\
  !*** ./src/app/navbar/navbar.component.ts ***!
  \********************************************/
/*! exports provided: NavbarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavbarComponent", function() { return NavbarComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var NavbarComponent = /** @class */ (function () {
    function NavbarComponent() {
    }
    NavbarComponent.prototype.ngOnInit = function () {
    };
    NavbarComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-navbar',
            template: __webpack_require__(/*! ./navbar.component.html */ "./src/app/navbar/navbar.component.html"),
            styles: [__webpack_require__(/*! ./navbar.component.css */ "./src/app/navbar/navbar.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], NavbarComponent);
    return NavbarComponent;
}());



/***/ }),

/***/ "./src/app/services/methods.service.ts":
/*!*********************************************!*\
  !*** ./src/app/services/methods.service.ts ***!
  \*********************************************/
/*! exports provided: MethodsService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MethodsService", function() { return MethodsService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
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


var MethodsService = /** @class */ (function () {
    function MethodsService() {
        this.math = __webpack_require__(/*! mathjs */ "./node_modules/mathjs/index.js");
        this.parser = this.math.parser();
    }
    /** METODOS DE PROGRAMAÇÃO NÃO LINEAR: MULTIVARIAVEL IRRESTRITO
     *      A seguir estão os métodos sem o uso de derivadas
     */
    // Feito
    MethodsService.prototype.CoordenadasCiclicas = function (func, x0, pre) {
        var initialX = x0.map(function (item) {
            return item.toString();
        });
        var resultado = this.CalculoCoordenadasCiclicas(0, func, initialX, x0.length, pre, this.GerarIdentidade(x0.length), 300);
        return resultado;
    };
    MethodsService.prototype.CalculoCoordenadasCiclicas = function (k, f, x0, n, pre, d, kmax) {
        var iteracoes = [];
        // Quebrando a função em dois e atualizando o f(x0, x1, ... xn) para f(x) 
        var newf = f.split('=');
        newf[0] = 'f(x) = ';
        do {
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
            for (var j = 0; j < n; j++) {
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
                try {
                    y1 = this.SomaVetor(y1, this.EscalarVetor("" + resultadoLambda, d[j]));
                }
                catch (e) {
                    alert(e);
                }
                objIntFor.yk1 = y1;
                forIteracoes.push(this.CopyAnything(objIntFor));
            }
            objIteracao.intern = forIteracoes;
            iteracoes.push(this.CopyAnything(objIteracao));
            // Verificando o criterio de parada
            var sub = this.SubtraiVetor(y1, x0);
            if (!this.NormaVetorMenorPrecisao(sub, pre))
                loop = true; // Se o critério de parada não foi atingido, continua o loop
            else
                loop = false; // Se o criterio de parada foi atingido, então encerra o loop
            x0 = y1; // Atualiza o valor de x0
            k++;
        } while (loop && k < kmax);
        var objResultado = {
            iteracoes: iteracoes,
            resultado: x0
        };
        if (k == kmax) {
            alert("Número de iterações máximo ultrapassado");
        }
        return objResultado; // Retorna o resultado 
    };
    // Feito
    MethodsService.prototype.HookeAndJeeves = function (func, x0, pre) {
        var initialX = x0.map(function (item) {
            return item.toString();
        });
        var resultado = this.CalculoHookeAndJeeves(0, func, initialX, x0.length, pre, this.GerarIdentidade(x0.length), 300);
        return resultado;
    };
    MethodsService.prototype.CalculoHookeAndJeeves = function (k, f, x0, n, pre, d, kmax) {
        var iteracoes = [];
        var newf = f.split("=");
        newf[0] = 'f(x) = ';
        var y1 = x0;
        var loop = true;
        while (loop && k < kmax) { // Loop principal 
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
            for (var j = 0; j < n; j++) {
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
                y1 = this.SomaVetor(y1, this.EscalarVetor("" + resultadoLambda, d[j]));
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
            if (!this.NormaVetorMenorPrecisao(subtracaoDeVetores, pre)) { // Se a norma for maior que a precisao, executa o passo 2
                var newD = subtracaoDeVetores;
                objInteracao.newD = newD;
                // Encontrando o novo y
                aux = this.SomaVetor(y1, this.EscalarVetor('x', newD)); // mudar y1
                // Substituindo os valores 
                var lambdaAsterisco = newf[0] + this.MinFuncao(newf[1], aux);
                // Executa a minimização por newton 
                var resultadoLambdaAsterisco = this.MonoNewton(0, lambdaAsterisco, 0.001);
                objInteracao.newLambda = resultadoLambdaAsterisco;
                // Usa um novo y
                y1 = this.SomaVetor(y1, this.EscalarVetor("" + resultadoLambdaAsterisco, newD));
                objInteracao.newYPlusLambda = y1;
                iteracoes.push(objInteracao);
            }
            else {
                var objResultado = {
                    iteracoes: iteracoes,
                    resultado: x0
                };
                return objResultado;
            }
        }
    };
    /** Métodos com o uso de derivadas */
    // Feito
    MethodsService.prototype.Gradiente = function (func, x0, pre) {
        var initialX = x0.map(function (item) {
            return item.toString();
        });
        var resultado = this.CalculoGradiente(func, initialX, pre, x0.length);
        return resultado;
    };
    MethodsService.prototype.CalculoGradiente = function (f, x, precisao, n) {
        var iteracoes = [];
        var newf = f.split('=');
        newf[0] = 'f(x) = ';
        var k = 0;
        var xk = x;
        var fxk = this.math.eval(this.MinFuncao(newf[1], xk));
        var grad = [];
        //fazendo gradiente
        for (var j = 0; j < n; j++) {
            var xi = 'x' + j.toString();
            grad[j] = this.math.derivative(newf[1], 'x' + j);
            grad[j] = this.math.eval(this.MinFuncao(grad[j].toString(), xk));
        }
        //fazendo norma
        var norm_grad = this.NormaVetor(grad);
        //loop
        while (!this.NormaVetorMenorPrecisao(grad, precisao) && k < 300) {
            var dk = [];
            var newGrad = grad.map(function (item) { return item; });
            var objIteracao = {
                k: k,
                xk: xk,
                fxk: null,
                grad: newGrad,
                dk: null,
                lambda: null,
                xk_1: null,
                norm_grad: norm_grad
            };
            //fazendo direcao = -grad 
            for (var j = 0; j < n; j++) {
                dk[j] = grad[j] * -1;
            }
            objIteracao.dk = dk;
            //fazendo lambda
            var aux = this.SomaVetor(xk, this.EscalarVetor('x', dk));
            var lambda = newf[0] + this.MinFuncao(newf[1], aux);
            var resultadoLambda = this.MonoNewton(0, lambda, 0.001);
            objIteracao.lambda = resultadoLambda;
            //novo x
            var x1 = this.SomaVetor(xk, this.EscalarVetor("" + resultadoLambda, dk));
            objIteracao.xk_1 = x1;
            //atualizando k,x e fxk
            k++;
            // Calculando o valor da função no novo ponto encontrado
            fxk = this.math.eval(this.MinFuncao(newf[1], xk));
            objIteracao.fxk = fxk;
            // Atualizando o valor de xk 
            xk = x1;
            // Preparando o gradiente para proxima iteração
            for (var j = 0; j < n; j++) {
                var xi = 'x' + j.toString();
                grad[j] = this.math.derivative(newf[1], 'x' + j);
                grad[j] = this.math.eval(this.MinFuncao(grad[j].toString(), xk));
            }
            newGrad = grad.map(function (item) { return item; });
            ;
            //fazendo norma
            norm_grad = this.NormaVetor(grad);
            iteracoes.push(this.CopyAnything(objIteracao));
        }
        if (k == 300) {
            alert("Numero máximo de 300 iterações ultrapassados");
        }
        var objResultado = {
            iteracoes: iteracoes,
            resultado: xk
        };
        return objResultado;
    };
    // Feito
    MethodsService.prototype.Newton = function (func, x0, pre) {
        var initialX = x0.map(function (item) {
            return item.toString();
        });
        var resultado = this.CalculoNewton(func, initialX, pre, x0.length);
        return resultado;
    };
    MethodsService.prototype.CalculoNewton = function (f, x, precisao, n) {
        var _this = this;
        var iteracoes = [];
        var newf = f.split('=');
        newf[0] = 'f(x) = ';
        var k = 1;
        var xk = x;
        while (k < 300) {
            var objIteracao = {
                k: k,
                xk: xk,
                fxk: 0,
                grad: [],
                norm_grad: 0,
                hessiana: [],
                hessiana_inversa: [],
                dk: [],
                xk_1: [],
            };
            objIteracao.fxk = this.math.eval(this.MinFuncao(newf[1], objIteracao.xk));
            for (var i = 0; i < n; i++) { // Melhorar mais ainda
                objIteracao.grad[i] = this.math.derivative(newf[1], 'x' + i);
                objIteracao.grad[i] = this.math.eval(this.MinFuncao(objIteracao.grad[i].toString(), objIteracao.xk));
                objIteracao.hessiana[i] = [];
                for (var j = 0; j < n; j++) {
                    objIteracao.hessiana[i][j] = this.math.derivative(newf[1], 'x' + i);
                    objIteracao.hessiana[i][j] = this.math.derivative(objIteracao.hessiana[i][j], 'x' + j);
                    objIteracao.hessiana[i][j] = this.math.eval(this.MinFuncao(objIteracao.hessiana[i][j].toString(), objIteracao.xk));
                }
            }
            objIteracao.hessiana_inversa = this.math.inv(objIteracao.hessiana); //fazendo a inversa da hessiana
            objIteracao.norm_grad = this.NormaVetor(objIteracao.grad);
            if (objIteracao.norm_grad < precisao) {
                xk = objIteracao.xk.map(function (item) { return _this.math.eval(item.toString()); });
                iteracoes.push(this.CopyAnything(objIteracao));
                break;
            }
            var hessiana_inversa = this.math.dotMultiply(-1, objIteracao.hessiana_inversa); //inversa*-1
            objIteracao.dk = this.math.multiply(hessiana_inversa, objIteracao.grad); //direcao = -1(inversa)*grad
            //novo x
            objIteracao.xk_1 = this.SomaVetor(objIteracao.xk, objIteracao.dk).map(function (item) { return _this.math.simplify(item.toString()); });
            xk = objIteracao.xk_1; //novo xk 
            if (this.NormaVetor(this.SubtraiVetor(objIteracao.xk, objIteracao.xk_1)) < parseFloat(precisao)) {
                iteracoes.push(this.CopyAnything(objIteracao));
                break;
            }
            //atualizando k,x e fxk
            k++;
            iteracoes.push(this.CopyAnything(objIteracao));
        }
        if (k == 300) {
            alert("Numero máximo de 300 iterações ultrapassados");
        }
        var objResultado = {
            iteracoes: iteracoes,
            resultado: xk //.map((item) => { return this.math.simplify(item); })
        };
        //return objResultado;      
        return objResultado;
    };
    /** Métodos que usam Direções conjudadas  */
    // Feito 
    MethodsService.prototype.GradienteConjugadoGeneralizado = function (func, x0, pre, q, b) {
        var initialX = x0.map(function (item) {
            return item.toString();
        });
        var Q = q.map(function (item) {
            return item.toString();
        });
        var B = b.map(function (item) {
            return item.toString();
        });
        var resultado = this.CalculoGradiente_conj(func, initialX, pre, x0.length, Q, B);
        return resultado;
    };
    MethodsService.prototype.CalculoGradiente_conj = function (f, x, precisao, n, q, b) {
        var iteracoes = [];
        var newf = f.split('=');
        newf[0] = 'f(x) = ';
        q = this.listToMatrix(q, n);
        q = this.math.transpose(q); //q é uma matriz
        var k = 0;
        var xk = x;
        var g0;
        g0 = this.math.subtract(this.math.multiply(q, xk), b);
        var d0 = this.math.multiply(-1, g0);
        if (this.NormaVetor(g0) < precisao) {
            var objIteracao1 = {
                k: 0,
                xk: xk,
                gk: g0,
                dk: d0,
            };
            iteracoes.push(this.CopyAnything(objIteracao1));
            var objResultado1 = {
                iteracoes: iteracoes,
                resultado: xk //.map((item) => { return this.math.simplify(item); })
            };
            return objResultado1;
        }
        while (k < 300) {
            var objIteracao = {
                k: k,
                xk: [],
                gk: [],
                gk_1: [],
                dk: [],
                lambdak: [],
                dk_1: [],
                bk: [],
                xk_1: [],
            };
            objIteracao.xk = xk;
            objIteracao.dk = d0;
            objIteracao.gk = g0;
            objIteracao.lambdak = this.math.multiply(-1, (this.math.divide(this.math.multiply(this.math.transpose(objIteracao.gk), objIteracao.dk), this.math.multiply(this.math.multiply(this.math.transpose(objIteracao.dk), q), objIteracao.dk))));
            objIteracao.xk_1 = this.math.add(objIteracao.xk, this.math.multiply(objIteracao.lambdak, objIteracao.dk));
            objIteracao.gk_1 = this.math.subtract(this.math.multiply(q, objIteracao.xk_1), b);
            if (this.NormaVetor(objIteracao.gk_1) < precisao) {
                xk = objIteracao.xk_1;
                iteracoes.push(this.CopyAnything(objIteracao));
                break;
            }
            objIteracao.bk = this.math.divide(this.math.multiply(this.math.multiply(this.math.transpose(objIteracao.gk_1), q), objIteracao.dk), this.math.multiply(this.math.multiply(this.math.transpose(objIteracao.dk), q), objIteracao.dk));
            objIteracao.dk_1 = this.math.add(this.math.multiply(-1, objIteracao.gk_1), this.math.multiply(objIteracao.bk, objIteracao.dk));
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
    };
    /** Extensão para problemas não quadraticos  */
    // Feitp
    MethodsService.prototype.FletcherAndReeves = function (f, x, precisao, n) {
        var initialX = x.map(function (item) { return item.toString(); });
        var resultado = this.CalculoFletcherAndReeves(f, initialX, precisao, n);
        return resultado;
    };
    MethodsService.prototype.CalculoFletcherAndReeves = function (f, x0, pre, n) {
        var _this = this;
        var iteracoes = [];
        var gradiente = [];
        var k = 0;
        var j = 0;
        var newf = f.split('=');
        newf[0] = 'f(x) = ';
        for (var i = 0; i < n; i++) {
            gradiente[i] = this.math.derivative(newf[1], 'x' + i).toString();
        }
        var g = gradiente.map(function (item) { return _this.math.simplify(_this.MinFuncao(item, x0)); });
        var d = this.EscalarVetor('-1', g);
        while (!this.NormaVetorMenorPrecisao(gradiente
            .map(function (der) { return _this.math.simplify(_this.MinFuncao(der, x0)); }), pre) && k < 4) { //Passo  1
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
            for (var j_1 = 0; j_1 < n; j_1++) {
                // Objeto interno 
                var objIntFor = {
                    j: j_1,
                    y1: x_aux,
                    fy1: this.math.eval(this.MinFuncao(newf[1], x_aux)),
                    grady1: null,
                    norm_grad: null,
                    beta: null,
                    dj: d,
                    lambda: null,
                    yk1: null //ok 
                };
                // Calculando lambda
                var aux = this.SomaVetor(x_aux, this.EscalarVetor('x', d));
                var lambda = newf[0] + this.MinFuncao(newf[1], aux);
                var resultadoLambda = this.MonoNewton(0, lambda, 0.001);
                objIntFor.lambda = resultadoLambda;
                // Calculando a direção vezes o lambda
                var direcaoVezesLambda = this.EscalarVetor("" + resultadoLambda, d);
                // Calculando o novo x
                var xk1 = this.SomaVetor(x_aux, direcaoVezesLambda);
                xk1 = xk1.map(function (item) { return _this.math.eval(item); });
                objIntFor.yk1 = xk1;
                // Calculando o novo g
                var g1 = gradiente.map(function (der) { return _this.math.simplify(_this.MinFuncao(der, xk1)); });
                objIntFor.grady1 = g1.map(function (g) { return g.toString(); });
                objIntFor.norm_grad = this.NormaVetor(g1);
                if (j_1 < n - 1) {
                    var beta = this.Betak(g.map(function (g) { return g.toString(); }), g1.map(function (g) { return g.toString(); }));
                    objIntFor.beta = beta;
                    var d1 = this.SomaVetor(this.EscalarVetor('-1', g1), this.EscalarVetor("" + beta, d));
                    d = d1;
                    x_aux = xk1;
                }
                else {
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
    };
    MethodsService.prototype.DavidonFletcherPowell = function (f, x, precisao, n) {
        var initialX = x.map(function (item) { return item.toString(); });
        //console.log(`Função: ${f}, x0: ${x}, precisao: ${precisao}, Quantidade de variaveis: ${n}`);
        var resultado = this.CalculoDFP(f, initialX, precisao, n);
        console.log(resultado);
        return resultado;
    };
    MethodsService.prototype.CalculoDFP = function (f, x, pre, n) {
        var iteracoes = [];
        var newf = f.split('=');
        newf[0] = 'f(x) = ';
        var k = 0;
        var i = 0;
        var xk = x; //x inicial
        var sk = []; // primeira vez = identidade
        var primeira_vez = true;
        console.log(n);
        while (k < 50) {
            console.log(k);
            console.log(i);
            var objIteracao = {
                k: k,
                i: i,
                xk: [],
                gk: [],
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
            if (primeira_vez) { //sk = identidade
                for (var z = 0; z < n; z++) { // Melhorar mais ainda
                    objIteracao.gk[z] = this.math.derivative(newf[1], 'x' + z);
                    objIteracao.gk[z] = this.math.eval(this.MinFuncao(objIteracao.gk[z].toString(), objIteracao.xk));
                    objIteracao.sk[z] = [];
                    for (var y = 0; y < n; y++) {
                        if (y == z)
                            objIteracao.sk[z][y] = 1;
                        else
                            objIteracao.sk[z][y] = 0;
                    }
                }
                primeira_vez = false;
            }
            else {
                for (var z = 0; z < n; z++) { // Melhorar mais ainda
                    objIteracao.gk[z] = this.math.derivative(newf[1], 'x' + z);
                    objIteracao.gk[z] = this.math.eval(this.MinFuncao(objIteracao.gk[z].toString(), objIteracao.xk));
                }
                objIteracao.sk = sk; //voltar aqui dps
            }
            console.log("norma vetor:" + this.NormaVetor(objIteracao.gk));
            if (this.NormaVetor(objIteracao.gk) < parseFloat(pre)) {
                xk = objIteracao.xk;
                iteracoes.push(this.CopyAnything(objIteracao));
                break;
            }
            console.log("xk:");
            console.log(objIteracao.xk);
            console.log("gradk:");
            console.log(objIteracao.gk);
            console.log("sk:");
            console.log(objIteracao.sk);
            objIteracao.dk = this.math.multiply(this.math.dotMultiply(-1, objIteracao.sk), this.math.transpose(objIteracao.gk));
            console.log(objIteracao.dk);
            var aux = this.SomaVetor(objIteracao.xk, this.EscalarVetor('x', objIteracao.dk));
            var lambda = newf[0] + this.MinFuncao(newf[1], aux);
            objIteracao.ak = this.MonoNewton(0, lambda, 0.001);
            console.log("ak: " + objIteracao.ak);
            objIteracao.xk_1 = this.math.add(objIteracao.xk, this.math.multiply(objIteracao.ak, objIteracao.dk));
            console.log("xk+1: " + objIteracao.xk_1);
            if (k < n - 1) {
                //gradiente k+1
                for (var z = 0; z < n; z++) { // Melhorar mais ainda
                    objIteracao.gk_1[z] = this.math.derivative(newf[1], 'x' + z);
                    objIteracao.gk_1[z] = this.math.eval(this.MinFuncao(objIteracao.gk_1[z].toString(), objIteracao.xk_1));
                }
                console.log("gradk+1: " + objIteracao.gk_1);
                objIteracao.qk = this.math.subtract(objIteracao.gk_1, objIteracao.gk);
                console.log("qk: " + objIteracao.qk);
                objIteracao.pk = this.math.dotMultiply(objIteracao.ak, objIteracao.dk);
                console.log("pk: " + objIteracao.pk);
                objIteracao.sk_1 = this.math.add(objIteracao.sk, this.math.subtract(this.math.dotDivide(this.math.multiply(objIteracao.pk, this.math.transpose(objIteracao.pk)), this.math.multiply(this.math.transpose(objIteracao.pk), objIteracao.qk)), this.math.dotDivide(this.math.multiply(this.math.multiply(this.math.multiply(objIteracao.sk, objIteracao.qk), this.math.transpose(objIteracao.qk)), objIteracao.sk), this.math.multiply(this.math.multiply(this.math.transpose(objIteracao.qk), objIteracao.sk), objIteracao.qk))));
                objIteracao.sk_1 = this.listToMatrix(objIteracao.sk_1, n);
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
            }
            else {
                xk = objIteracao.xk_1;
                sk = objIteracao.sk_1;
                i++;
                //break;
                k = 0;
            }
            iteracoes.push(this.CopyAnything(objIteracao));
            if (i == 2)
                break;
        }
        if (k == 300) {
            alert("Numero máximo de 300 iterações ultrapassados");
        }
        console.log(xk);
        var objResultado = {
            iteracoes: iteracoes,
            resultado: xk //.map((item) => { return this.math.simplify(item); })
        };
        //return objResultado;      
        return objResultado;
    };
    /** CÁLCULOS MATEMÁTICOS */
    /** CRITÉRIOS DE PARADA  */
    // Retorna a raiz quadrada do somatorio de xi^2, sendo os xi os elementos do vetor passado
    MethodsService.prototype.NormaVetorMenorPrecisao = function (vetor, pre) {
        var soma = 0;
        vetor.forEach(function (item) {
            var floatitem = parseFloat(item);
            soma += (floatitem * floatitem);
        });
        var resultado = this.math.eval("sqrt(" + soma + ")");
        var criterioParada = (resultado < parseFloat(pre));
        return criterioParada;
    };
    MethodsService.prototype.NormaVetor = function (vetor) {
        var soma = 0;
        vetor.forEach(function (item) {
            var floatitem = parseFloat(item);
            soma += (floatitem * floatitem);
        });
        var resultado = this.math.eval("sqrt(" + soma + ")");
        return resultado;
    };
    /** Funções auxiliares de Fleetcher and Reeves */
    MethodsService.prototype.Betak = function (gk, gk1) {
        var denominador = this.math.multiply(gk1, this.VetorTranspostaParaNormal(gk1));
        var dividendo = this.math.multiply(gk, this.VetorTranspostaParaNormal(gk));
        var beta = denominador / dividendo;
        return beta;
    };
    MethodsService.prototype.VetorTranspostaParaNormal = function (array) {
        var new_array = [];
        for (var i = 0; i < array.length; i++) {
            new_array[i] = [];
            new_array[i][0] = array[i];
        }
        return new_array;
    };
    /*** FUNÇÕES AUXILIARES  */
    // Passe uma expressão sem f(x0, ..., xn) e essa função retorna as variaveis 
    // da expressão
    MethodsService.prototype.GetVariables = function (func) {
        var _this = this;
        try {
            var aux = this.math.parse(func);
            var variables = [];
            aux.traverse(function (node) {
                if (node.type == "SymbolNode") {
                    if (!_this.SearchObjInArray(variables, node.name)) {
                        variables.push(node.name);
                    }
                }
            });
            return variables;
        }
        catch (e) {
            return ['false'];
        }
    };
    MethodsService.prototype.listToMatrix = function (list, elementsPerSubArray) {
        var matrix = [], i, k;
        for (i = 0, k = -1; i < list.length; i++) {
            if (i % elementsPerSubArray === 0) {
                k++;
                matrix[k] = [];
            }
            matrix[k].push(list[i]);
        }
        return matrix;
    };
    // Transforma uma string expressão em texto latex
    MethodsService.prototype.TransformToLatex = function (func) {
        var aux = this.math.parse(func);
        return aux.toTex();
    };
    // Procura um elemento em um array
    MethodsService.prototype.SearchObjInArray = function (vetor, dado) {
        for (var _i = 0, vetor_1 = vetor; _i < vetor_1.length; _i++) {
            var i = vetor_1[_i];
            if (i === dado) {
                return true;
            }
        }
        return false;
    };
    MethodsService.prototype.Derivada = function (fun, variavel) {
        return this.math.derivative(fun, variavel).toString();
    };
    MethodsService.prototype.EscalarVetor = function (escalar, vetor) {
        var _this = this;
        var multiVetor = vetor.map(function (item) {
            return _this.math.simplify(escalar + " * " + item).toString();
        });
        return multiVetor;
    };
    MethodsService.prototype.SubtraiVetor = function (vetor1, vetor2) {
        var _this = this;
        var subtracaoArray = vetor1.map(function (item, index) {
            return _this.math.simplify(item + " - " + vetor2[index]).toString();
        });
        return subtracaoArray;
    };
    MethodsService.prototype.SomaVetor = function (vetor1, vetor2) {
        var _this = this;
        var somaArray = vetor1.map(function (item, index) {
            return _this.math.simplify(item + " + " + vetor2[index]).toString();
        });
        return somaArray;
    };
    MethodsService.prototype.MinFuncao = function (func, vetor) {
        vetor.forEach(function (item, index) {
            var regex = new RegExp("x" + index, "g"); // Expressão regular para substituir todos os x+index encontrados
            func = func.replace(regex, "(" + item + ")");
        });
        return func;
    };
    MethodsService.prototype.GerarIdentidade = function (n) {
        var matriz = [];
        for (var i = 0; i < n; i++) {
            matriz[i] = [];
            for (var j = 0; j < n; j++) {
                if (i == j)
                    matriz[i][j] = 1;
                else
                    matriz[i][j] = 0;
            }
        }
        return matriz;
    };
    // Função para copiar qualquer coisa
    MethodsService.prototype.CopyAnything = function (ob) {
        var outro = ob;
        return outro;
    };
    /***************************************************************************
     *
     *                       MÉTODO MONOVARIAVEL DE NEWTON
     *
     *****************************************************************************/
    MethodsService.prototype.MonoNewton = function (x0, func, precisao) {
        var deri1 = this.math.derivative(func, 'x');
        var deri2 = this.math.derivative(deri1, 'x');
        return this.CalculoMonoNewton(0, x0, deri1, deri2, precisao);
    };
    MethodsService.prototype.CalculoMonoNewton = function (k, x0, der1, der2, pre) {
        // Calculando as derivadas depois o novo x
        var d1 = der1.eval({ x: x0 });
        var d2 = der2.eval({ x: x0 });
        var xk = x0 - d1 / d2;
        // Conferindo os criterios de parada 
        if (Math.abs(d1) > pre && !this.CriterioParadaLNewton(x0, xk, pre)) {
            return this.CalculoMonoNewton(k++, xk, der1, der2, pre);
        }
        else
            return xk;
    };
    MethodsService.prototype.CriterioParadaLNewton = function (xk, xk1, precisao) {
        var axk1 = Math.abs(xk1);
        var max = (axk1 < 1) ? 1 : axk1;
        return (Math.abs(axk1 - xk) / max < precisao);
    };
    MethodsService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], MethodsService);
    return MethodsService;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\leonardo.oliveira\Documents\Pessoal\projects\organize-github\Faculdade\T2-POII\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map