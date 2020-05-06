(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./$$_lazy_route_resource lazy recursive":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
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
webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/app.component.html":
/*!**************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/app.component.html ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- <app-landing></app-landing> -->\n<router-outlet></router-outlet>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/dashboard/dashboard.component.html":
/*!******************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/dashboard/dashboard.component.html ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\n    <div class=\"col-md-3\" style=\"height: auto;\">\n        <button class=\"btn btn-dark\" id=\"sidebar\" (click)=getLocal()><h6>LOCAL NEW UPDATES</h6></button>\n        <button class=\"btn btn-dark\" id=\"sidebar\" (click)=getGlobal()><h6>GLOBAL NEW UPDATES</h6></button>\n        <button class=\"btn btn-dark\" id=\"sidebar\" (click)=getTesting()><h6>PCR TESTING DETAILS</h6></button>\n        <button class=\"btn btn-dark\" id=\"sidebar\" (click)=getDetails()><h6>SEE DETAILS OF PATIENTS WITH HOSPITAL</h6></button>\n    </div>\n    <div class=\"col-md-9\">\n        <h6 class=\"text-right\" style=\"margin-right: 65px;\">last updated : {{updateDate}}</h6>\n        <app-right-local *ngIf=\"local\"></app-right-local>\n        <app-right-global *ngIf=\"global\"></app-right-global>\n        <app-right-pcr *ngIf=\"testing\"></app-right-pcr>\n        <app-details-hospitals *ngIf=\"details\"></app-details-hospitals>\n    </div>\n\n</div>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/details-hospitals/details-hospitals.component.html":
/*!**********************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/details-hospitals/details-hospitals.component.html ***!
  \**********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\n    <div class=\"col-md-2\"></div>\n    <div class=\"col-md-8\">\n        <h5 class=\"text-center\" style=\"margin-top: 20px;margin-bottom: 20px;\">Details of patients according to Hospital</h5>\n        <div class=\"span3 card\">\n\n            <table class=\"table\" style=\"width: 100%;\">\n\n                <thead class=\"thead-dark\">\n                    <tr>\n                        <th class=\"col1\">Hospital Name</th>\n                        <th class=\"col1\">Treatment local</th>\n                        <th class=\"col1\">Trematment foreign</th>\n                        <th class=\"col2\">Treatment total</th>\n                    </tr>\n                </thead>\n\n                <tbody class=\"thead-light\">\n                    <tr *ngFor=\"let hospital of hostpitalList\">\n                        <td class=\"col1\">{{hospital.hospital.name}}</td>\n                        <td class=\"col2\">{{hospital.cumulative_local}}</td>\n                        <td class=\"col2\">{{hospital.cumulative_foreign}}</td>\n                        <td class=\"col2\">{{hospital.cumulative_total}}</td>\n                    </tr>\n\n                </tbody>\n            </table>\n        </div>\n    </div>\n    <div class=\"col-md-2\"></div>\n</div>\n\n\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/landing/landing.component.html":
/*!**************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/landing/landing.component.html ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"row text-center\">\n    <div class=\"col-md-3\" id=\"left_side\">\n        <h1 id=\"header_h\">Stay Home</h1>\n        <h1 id=\"header_s\">Stay Safe</h1>\n        <h5 id=\"header_g\">Get Latest Corona Details in Sri Lanka</h5>\n        <button class=\"btn btn-danger\" style=\"align-items: center;margin-top:30px;\" (click)=\"navigatedashboard()\">Go to the dashboard</button>\n    </div>\n    <div class=\"col-md-9\" style=\"background-color: black;\" id=\"right_side\">\n        <img src=\"https://cdn-a.william-reed.com/var/wrbm_gb_food_pharma/storage/images/publications/food-beverage-nutrition/foodnavigator.com/news/food-safety-quality/covid-19-and-food-this-virus-is-sensitive-to-cooking-temperatures/10810118-1-eng-GB/COVID-19-and-food-This-virus-is-sensitive-to-cooking-temperatures_wrbm_large.jpg\"\n            style=\"width:100%;\">\n    </div>\n</div>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/right-global/right-global.component.html":
/*!************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/right-global/right-global.component.html ***!
  \************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\n    <div class=\"col-md-6\">\n        <div class=\"card\" id=\"content1\">\n            <i class='fas fa-heartbeat' style=\"font-size: 80px;\"></i>\n            <h4>Global recorded cases : {{globaltotalcases}}</h4>\n        </div>\n    </div>\n    <div class=\"col-md-6\">\n        <div class=\"card\" id=\"content1\">\n            <i class='fas fa-notes-medical' style=\"font-size: 80px;\"></i>\n            <h4>Global recorded deaths : {{globaldeaths}} </h4>\n        </div>\n    </div>\n</div>\n<div class=\"row\">\n    <div class=\"col-md-6\">\n        <div class=\"card\" id=\"content1\">\n            <i class='fas fa-file-medical' style=\"font-size: 80px;\"></i>\n            <h4>Global recovered cases : {{globalrecovered}}</h4>\n        </div>\n    </div>\n    <div class=\"col-md-6\">\n        <div class=\"card\" id=\"content1\">\n            <i class='fas fa-plus' style=\"font-size: 80px;\"></i>\n            <h4>global newly recorded cases today: {{globalnewcases}}</h4>\n        </div>\n    </div>\n</div>\n<div class=\"row\">\n    <div class=\"col-md-3\"></div>\n    <div class=\"col-md-6\">\n        <div class=\"card\" id=\"content1\">\n            <i class='fas fa-viruses' style=\"font-size: 80px;\"></i>\n            <h4>Global newly recorded deaths today : {{globalnewdeaths}}</h4>\n        </div>\n    </div>\n    <div class=\"col-md-3\"></div>\n</div>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/right-local/right-local.component.html":
/*!**********************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/right-local/right-local.component.html ***!
  \**********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\n    <div class=\"col-md-6\">\n        <div class=\"card\" id=\"content1\">\n            <i class='fas fa-heartbeat' style=\"font-size: 80px;\"></i>\n            <h4>Total recorded cases : {{localtotalcases}}</h4>\n        </div>\n    </div>\n    <div class=\"col-md-6\">\n        <div class=\"card\" id=\"content1\">\n            <i class='fas fa-notes-medical' style=\"font-size: 80px;\"></i>\n            <h4>Total recorded deaths : {{localdeaths}} </h4>\n        </div>\n    </div>\n</div>\n<div class=\"row\">\n    <div class=\"col-md-6\">\n        <div class=\"card\" id=\"content1\">\n            <i class='fas fa-file-medical' style=\"font-size: 80px;\"></i>\n            <h4>Total recovered cases : {{localrecovered}}</h4>\n        </div>\n    </div>\n    <div class=\"col-md-6\">\n        <div class=\"card\" id=\"content1\">\n            <i class='fas fa-viruses' style=\"font-size: 80px;\"></i>\n            <h4>Total active cases : {{localactive}}</h4>\n        </div>\n    </div>\n</div>\n<div class=\"row\">\n    <div class=\"col-md-6\">\n        <div class=\"card\" id=\"content1\">\n            <i class='fas fa-plus' style=\"font-size: 80px;\"></i>\n            <h4>Total newly recorded cases today: {{localnewcases}}</h4>\n        </div>\n    </div>\n    <div class=\"col-md-6\">\n        <div class=\"card\" id=\"content1\">\n            <i class='far fa-heart' style=\"font-size: 80px;\"></i>\n            <h4>Total newly recorded deaths today : {{localnewdeaths}}</h4>\n        </div>\n    </div>\n</div>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/right-pcr/right-pcr.component.html":
/*!******************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/right-pcr/right-pcr.component.html ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\n    <div class=\"col-md-3\"></div>\n    <div class=\"col-md-6\">\n        <div class=\"card\" id=\"content1\">\n            <i class='fas fa-viruses' style=\"font-size: 80px;\"></i>\n            <h4>Total PCR Test : {{pcrcount}}</h4>\n        </div>\n    </div>\n    <div class=\"col-md-3\"></div>\n</div>\n\n<div class=\"row\">\n    <div class=\"col-md-2\"></div>\n    <div class=\"col-md-8\">\n        <h5 class=\"text-center\" style=\"margin-top: 20px;margin-bottom: 20px;\">Evaluation of PCR Testings</h5>\n        <div class=\"span3 card\">\n\n            <table class=\"table\" style=\"width: 100%;\">\n\n                <thead class=\"thead-dark\">\n                    <tr>\n                        <th class=\"col1\">Date</th>\n                        <th class=\"col2\">No of PCR testings</th>\n                    </tr>\n                </thead>\n\n                <tbody class=\"thead-light\">\n                    <tr *ngFor=\"let pcr of pcrList\">\n                        <td class=\"col1\">{{pcr.date}}</td>\n                        <td class=\"col2\">{{pcr.count}}</td>\n                    </tr>\n\n                </tbody>\n            </table>\n        </div>\n    </div>\n    <div class=\"col-md-2\"></div>\n</div>\n\n\n"

/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./dashboard/dashboard.component */ "./src/app/dashboard/dashboard.component.ts");
/* harmony import */ var _landing_landing_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./landing/landing.component */ "./src/app/landing/landing.component.ts");





var routes = [
    { path: '', component: _landing_landing_component__WEBPACK_IMPORTED_MODULE_4__["LandingComponent"] },
    { path: 'dashboard', component: _dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_3__["DashboardComponent"] }
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".left_side{\r\n    background-color: black;\r\n    padding: 0px;\r\n}\r\n#header_h{\r\n    color: red;\r\n    margin-left: 30px;\r\n    text-align: left;\r\n}\r\n#header_s{\r\n    color: red;\r\n    margin-right: 20px;\r\n    text-align: right;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXBwLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSx1QkFBdUI7SUFDdkIsWUFBWTtBQUNoQjtBQUNBO0lBQ0ksVUFBVTtJQUNWLGlCQUFpQjtJQUNqQixnQkFBZ0I7QUFDcEI7QUFDQTtJQUNJLFVBQVU7SUFDVixrQkFBa0I7SUFDbEIsaUJBQWlCO0FBQ3JCIiwiZmlsZSI6InNyYy9hcHAvYXBwLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIubGVmdF9zaWRle1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogYmxhY2s7XHJcbiAgICBwYWRkaW5nOiAwcHg7XHJcbn1cclxuI2hlYWRlcl9oe1xyXG4gICAgY29sb3I6IHJlZDtcclxuICAgIG1hcmdpbi1sZWZ0OiAzMHB4O1xyXG4gICAgdGV4dC1hbGlnbjogbGVmdDtcclxufVxyXG4jaGVhZGVyX3N7XHJcbiAgICBjb2xvcjogcmVkO1xyXG4gICAgbWFyZ2luLXJpZ2h0OiAyMHB4O1xyXG4gICAgdGV4dC1hbGlnbjogcmlnaHQ7XHJcbn1cclxuIl19 */"

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


var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'covid';
    }
    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! raw-loader!./app.component.html */ "./node_modules/raw-loader/index.js!./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        })
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
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _landing_landing_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./landing/landing.component */ "./src/app/landing/landing.component.ts");
/* harmony import */ var _dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./dashboard/dashboard.component */ "./src/app/dashboard/dashboard.component.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _right_local_right_local_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./right-local/right-local.component */ "./src/app/right-local/right-local.component.ts");
/* harmony import */ var _right_global_right_global_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./right-global/right-global.component */ "./src/app/right-global/right-global.component.ts");
/* harmony import */ var _right_pcr_right_pcr_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./right-pcr/right-pcr.component */ "./src/app/right-pcr/right-pcr.component.ts");
/* harmony import */ var _details_hospitals_details_hospitals_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./details-hospitals/details-hospitals.component */ "./src/app/details-hospitals/details-hospitals.component.ts");













var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"],
                _landing_landing_component__WEBPACK_IMPORTED_MODULE_5__["LandingComponent"],
                _dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_6__["DashboardComponent"],
                _right_local_right_local_component__WEBPACK_IMPORTED_MODULE_9__["RightLocalComponent"],
                _right_global_right_global_component__WEBPACK_IMPORTED_MODULE_10__["RightGlobalComponent"],
                _right_pcr_right_pcr_component__WEBPACK_IMPORTED_MODULE_11__["RightPcrComponent"],
                _details_hospitals_details_hospitals_component__WEBPACK_IMPORTED_MODULE_12__["DetailsHospitalsComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_7__["RouterModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_8__["HttpClientModule"]
            ],
            providers: [],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/dashboard/dashboard.component.css":
/*!***************************************************!*\
  !*** ./src/app/dashboard/dashboard.component.css ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "* {\r\n    border-radius: 0 !important;\r\n  }\r\n#sidebar{\r\n    width: 100%;\r\n    height: 28%;\r\n    border: 2px solid whitesmoke;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZGFzaGJvYXJkL2Rhc2hib2FyZC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksMkJBQTJCO0VBQzdCO0FBQ0Y7SUFDSSxXQUFXO0lBQ1gsV0FBVztJQUNYLDRCQUE0QjtBQUNoQyIsImZpbGUiOiJzcmMvYXBwL2Rhc2hib2FyZC9kYXNoYm9hcmQuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIioge1xyXG4gICAgYm9yZGVyLXJhZGl1czogMCAhaW1wb3J0YW50O1xyXG4gIH1cclxuI3NpZGViYXJ7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGhlaWdodDogMjglO1xyXG4gICAgYm9yZGVyOiAycHggc29saWQgd2hpdGVzbW9rZTtcclxufSJdfQ== */"

/***/ }),

/***/ "./src/app/dashboard/dashboard.component.ts":
/*!**************************************************!*\
  !*** ./src/app/dashboard/dashboard.component.ts ***!
  \**************************************************/
/*! exports provided: DashboardComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DashboardComponent", function() { return DashboardComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_api_service_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/api-service.service */ "./src/app/services/api-service.service.ts");



var DashboardComponent = /** @class */ (function () {
    function DashboardComponent(api_service) {
        var _this = this;
        this.api_service = api_service;
        this.local = true;
        this.global = false;
        this.testing = false;
        this.details = false;
        this.api_service.getCovidUpdates().subscribe(function (data) {
            _this.apiData = data;
            console.log(data);
            _this.updateDate = data.data.update_date_time;
        });
    }
    DashboardComponent.prototype.initial = function () {
        this.local = false;
        this.global = false;
        this.testing = false;
        this.details = false;
    };
    DashboardComponent.prototype.ngOnInit = function () {
    };
    DashboardComponent.prototype.getLocal = function () {
        console.log('local');
        this.initial();
        this.local = true;
        console.log(this.local + " " + this.global + " " + this.testing);
    };
    DashboardComponent.prototype.getGlobal = function () {
        console.log('global');
        this.initial();
        this.global = true;
        console.log(this.local + " " + this.global + " " + this.testing);
    };
    DashboardComponent.prototype.getTesting = function () {
        console.log('testing');
        this.initial();
        this.testing = true;
        console.log(this.local + " " + this.global + " " + this.testing);
    };
    DashboardComponent.prototype.getDetails = function () {
        this.initial();
        this.details = true;
    };
    DashboardComponent.ctorParameters = function () { return [
        { type: _services_api_service_service__WEBPACK_IMPORTED_MODULE_2__["ApiServiceService"] }
    ]; };
    DashboardComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-dashboard',
            template: __webpack_require__(/*! raw-loader!./dashboard.component.html */ "./node_modules/raw-loader/index.js!./src/app/dashboard/dashboard.component.html"),
            styles: [__webpack_require__(/*! ./dashboard.component.css */ "./src/app/dashboard/dashboard.component.css")]
        })
    ], DashboardComponent);
    return DashboardComponent;
}());



/***/ }),

/***/ "./src/app/details-hospitals/details-hospitals.component.css":
/*!*******************************************************************!*\
  !*** ./src/app/details-hospitals/details-hospitals.component.css ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "#content1{\r\n    width: 80%;\r\n    margin-left: 30px;\r\n    margin-top: 20px;\r\n    text-align: center;\r\n    background-color: cornsilk;\r\n}\r\ni{\r\n    margin-top:5px;\r\n    margin-bottom: 10px;\r\n}\r\n.span3 {\r\n    height: 500px !important;\r\n    overflow: scroll;\r\n}\r\ntable{\r\n    width: 100%;\r\n}\r\n.col1{\r\n    width:60%;\r\n    text-align: center;\r\n}\r\n.col2{\r\n    width: 40%;\r\n    text-align: center;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZGV0YWlscy1ob3NwaXRhbHMvZGV0YWlscy1ob3NwaXRhbHMuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLFVBQVU7SUFDVixpQkFBaUI7SUFDakIsZ0JBQWdCO0lBQ2hCLGtCQUFrQjtJQUNsQiwwQkFBMEI7QUFDOUI7QUFDQTtJQUNJLGNBQWM7SUFDZCxtQkFBbUI7QUFDdkI7QUFDQTtJQUNJLHdCQUF3QjtJQUN4QixnQkFBZ0I7QUFDcEI7QUFDQTtJQUNJLFdBQVc7QUFDZjtBQUNBO0lBQ0ksU0FBUztJQUNULGtCQUFrQjtBQUN0QjtBQUNBO0lBQ0ksVUFBVTtJQUNWLGtCQUFrQjtBQUN0QiIsImZpbGUiOiJzcmMvYXBwL2RldGFpbHMtaG9zcGl0YWxzL2RldGFpbHMtaG9zcGl0YWxzLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIjY29udGVudDF7XHJcbiAgICB3aWR0aDogODAlO1xyXG4gICAgbWFyZ2luLWxlZnQ6IDMwcHg7XHJcbiAgICBtYXJnaW4tdG9wOiAyMHB4O1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogY29ybnNpbGs7XHJcbn1cclxuaXtcclxuICAgIG1hcmdpbi10b3A6NXB4O1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMTBweDtcclxufVxyXG4uc3BhbjMge1xyXG4gICAgaGVpZ2h0OiA1MDBweCAhaW1wb3J0YW50O1xyXG4gICAgb3ZlcmZsb3c6IHNjcm9sbDtcclxufVxyXG50YWJsZXtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG59XHJcbi5jb2wxe1xyXG4gICAgd2lkdGg6NjAlO1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG59XHJcbi5jb2wye1xyXG4gICAgd2lkdGg6IDQwJTtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxufSJdfQ== */"

/***/ }),

/***/ "./src/app/details-hospitals/details-hospitals.component.ts":
/*!******************************************************************!*\
  !*** ./src/app/details-hospitals/details-hospitals.component.ts ***!
  \******************************************************************/
/*! exports provided: DetailsHospitalsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DetailsHospitalsComponent", function() { return DetailsHospitalsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_api_service_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/api-service.service */ "./src/app/services/api-service.service.ts");



var DetailsHospitalsComponent = /** @class */ (function () {
    function DetailsHospitalsComponent(serviceAPI) {
        var _this = this;
        this.serviceAPI = serviceAPI;
        this.serviceAPI.getCovidUpdates().subscribe(function (data) {
            // console.log(data.data.global_new_cases)
            _this.hostpitalList = data.data.hospital_data;
            // console.log(data.data.local_new_cases)
            console.log(data.data.global_total_cases);
        });
    }
    DetailsHospitalsComponent.prototype.ngOnInit = function () {
    };
    DetailsHospitalsComponent.ctorParameters = function () { return [
        { type: _services_api_service_service__WEBPACK_IMPORTED_MODULE_2__["ApiServiceService"] }
    ]; };
    DetailsHospitalsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-details-hospitals',
            template: __webpack_require__(/*! raw-loader!./details-hospitals.component.html */ "./node_modules/raw-loader/index.js!./src/app/details-hospitals/details-hospitals.component.html"),
            styles: [__webpack_require__(/*! ./details-hospitals.component.css */ "./src/app/details-hospitals/details-hospitals.component.css")]
        })
    ], DetailsHospitalsComponent);
    return DetailsHospitalsComponent;
}());



/***/ }),

/***/ "./src/app/landing/landing.component.css":
/*!***********************************************!*\
  !*** ./src/app/landing/landing.component.css ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "#left_side{\r\n    background-color: black;\r\n    /* padding: 0px; */\r\n}\r\n#right_side{\r\n    /* background-color: gray; */\r\n    padding: 0px;\r\n}\r\n#header_h{\r\n    color: red;\r\n    margin-left: 20px;\r\n    text-align: left;\r\n    margin-top:30%;\r\n}\r\n#header_s{\r\n    color: red;\r\n    /* margin-right: 20px; */\r\n    text-align: right;\r\n    margin-top: 10px;\r\n}\r\n#header_g{\r\n    color: white;\r\n    text-align: center;\r\n    margin-top: 80px;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbGFuZGluZy9sYW5kaW5nLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSx1QkFBdUI7SUFDdkIsa0JBQWtCO0FBQ3RCO0FBQ0E7SUFDSSw0QkFBNEI7SUFDNUIsWUFBWTtBQUNoQjtBQUNBO0lBQ0ksVUFBVTtJQUNWLGlCQUFpQjtJQUNqQixnQkFBZ0I7SUFDaEIsY0FBYztBQUNsQjtBQUNBO0lBQ0ksVUFBVTtJQUNWLHdCQUF3QjtJQUN4QixpQkFBaUI7SUFDakIsZ0JBQWdCO0FBQ3BCO0FBQ0E7SUFDSSxZQUFZO0lBQ1osa0JBQWtCO0lBQ2xCLGdCQUFnQjtBQUNwQiIsImZpbGUiOiJzcmMvYXBwL2xhbmRpbmcvbGFuZGluZy5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiI2xlZnRfc2lkZXtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IGJsYWNrO1xyXG4gICAgLyogcGFkZGluZzogMHB4OyAqL1xyXG59XHJcbiNyaWdodF9zaWRle1xyXG4gICAgLyogYmFja2dyb3VuZC1jb2xvcjogZ3JheTsgKi9cclxuICAgIHBhZGRpbmc6IDBweDtcclxufVxyXG4jaGVhZGVyX2h7XHJcbiAgICBjb2xvcjogcmVkO1xyXG4gICAgbWFyZ2luLWxlZnQ6IDIwcHg7XHJcbiAgICB0ZXh0LWFsaWduOiBsZWZ0O1xyXG4gICAgbWFyZ2luLXRvcDozMCU7XHJcbn1cclxuI2hlYWRlcl9ze1xyXG4gICAgY29sb3I6IHJlZDtcclxuICAgIC8qIG1hcmdpbi1yaWdodDogMjBweDsgKi9cclxuICAgIHRleHQtYWxpZ246IHJpZ2h0O1xyXG4gICAgbWFyZ2luLXRvcDogMTBweDtcclxufVxyXG4jaGVhZGVyX2d7XHJcbiAgICBjb2xvcjogd2hpdGU7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBtYXJnaW4tdG9wOiA4MHB4O1xyXG59XHJcbiJdfQ== */"

/***/ }),

/***/ "./src/app/landing/landing.component.ts":
/*!**********************************************!*\
  !*** ./src/app/landing/landing.component.ts ***!
  \**********************************************/
/*! exports provided: LandingComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LandingComponent", function() { return LandingComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");



var LandingComponent = /** @class */ (function () {
    function LandingComponent(router) {
        this.router = router;
        this.z = 10;
    }
    LandingComponent.prototype.ngOnInit = function () {
    };
    LandingComponent.prototype.navigatedashboard = function () {
        console.log('dash');
        this.router.navigate(['/dashboard']);
    };
    LandingComponent.ctorParameters = function () { return [
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }
    ]; };
    LandingComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-landing',
            template: __webpack_require__(/*! raw-loader!./landing.component.html */ "./node_modules/raw-loader/index.js!./src/app/landing/landing.component.html"),
            styles: [__webpack_require__(/*! ./landing.component.css */ "./src/app/landing/landing.component.css")]
        })
    ], LandingComponent);
    return LandingComponent;
}());



/***/ }),

/***/ "./src/app/right-global/right-global.component.css":
/*!*********************************************************!*\
  !*** ./src/app/right-global/right-global.component.css ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "#content1{\r\n    width: 80%;\r\n    margin-left: 30px;\r\n    margin-top: 50px;\r\n    text-align: center;\r\n    background-color: cornsilk;\r\n}\r\ni{\r\n    margin-top:5px;\r\n    margin-bottom: 10px;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcmlnaHQtZ2xvYmFsL3JpZ2h0LWdsb2JhbC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksVUFBVTtJQUNWLGlCQUFpQjtJQUNqQixnQkFBZ0I7SUFDaEIsa0JBQWtCO0lBQ2xCLDBCQUEwQjtBQUM5QjtBQUNBO0lBQ0ksY0FBYztJQUNkLG1CQUFtQjtBQUN2QiIsImZpbGUiOiJzcmMvYXBwL3JpZ2h0LWdsb2JhbC9yaWdodC1nbG9iYWwuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIiNjb250ZW50MXtcclxuICAgIHdpZHRoOiA4MCU7XHJcbiAgICBtYXJnaW4tbGVmdDogMzBweDtcclxuICAgIG1hcmdpbi10b3A6IDUwcHg7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBjb3Juc2lsaztcclxufVxyXG5pe1xyXG4gICAgbWFyZ2luLXRvcDo1cHg7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAxMHB4O1xyXG59Il19 */"

/***/ }),

/***/ "./src/app/right-global/right-global.component.ts":
/*!********************************************************!*\
  !*** ./src/app/right-global/right-global.component.ts ***!
  \********************************************************/
/*! exports provided: RightGlobalComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RightGlobalComponent", function() { return RightGlobalComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_api_service_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/api-service.service */ "./src/app/services/api-service.service.ts");



var RightGlobalComponent = /** @class */ (function () {
    function RightGlobalComponent(serviceAPI) {
        var _this = this;
        this.serviceAPI = serviceAPI;
        this.serviceAPI.getCovidUpdates().subscribe(function (data) {
            // console.log(data.data.global_new_cases)
            _this.globaltotalcases = data.data.global_total_cases;
            _this.globaldeaths = data.data.global_deaths;
            _this.globalrecovered = data.data.global_recovered;
            _this.globalnewcases = data.data.global_new_cases;
            _this.globalnewdeaths = data.data.global_new_deaths;
            // console.log(data.data.local_new_cases)
            console.log(data.data.global_total_cases);
        });
    }
    RightGlobalComponent.prototype.ngOnInit = function () {
    };
    RightGlobalComponent.ctorParameters = function () { return [
        { type: _services_api_service_service__WEBPACK_IMPORTED_MODULE_2__["ApiServiceService"] }
    ]; };
    RightGlobalComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-right-global',
            template: __webpack_require__(/*! raw-loader!./right-global.component.html */ "./node_modules/raw-loader/index.js!./src/app/right-global/right-global.component.html"),
            styles: [__webpack_require__(/*! ./right-global.component.css */ "./src/app/right-global/right-global.component.css")]
        })
    ], RightGlobalComponent);
    return RightGlobalComponent;
}());



/***/ }),

/***/ "./src/app/right-local/right-local.component.css":
/*!*******************************************************!*\
  !*** ./src/app/right-local/right-local.component.css ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "#content1{\r\n    width: 80%;\r\n    margin-left: 30px;\r\n    margin-top: 50px;\r\n    text-align: center;\r\n    background-color: cornsilk;\r\n}\r\ni{\r\n    margin-top:5px;\r\n    margin-bottom: 10px;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcmlnaHQtbG9jYWwvcmlnaHQtbG9jYWwuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLFVBQVU7SUFDVixpQkFBaUI7SUFDakIsZ0JBQWdCO0lBQ2hCLGtCQUFrQjtJQUNsQiwwQkFBMEI7QUFDOUI7QUFDQTtJQUNJLGNBQWM7SUFDZCxtQkFBbUI7QUFDdkIiLCJmaWxlIjoic3JjL2FwcC9yaWdodC1sb2NhbC9yaWdodC1sb2NhbC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiI2NvbnRlbnQxe1xyXG4gICAgd2lkdGg6IDgwJTtcclxuICAgIG1hcmdpbi1sZWZ0OiAzMHB4O1xyXG4gICAgbWFyZ2luLXRvcDogNTBweDtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IGNvcm5zaWxrO1xyXG59XHJcbml7XHJcbiAgICBtYXJnaW4tdG9wOjVweDtcclxuICAgIG1hcmdpbi1ib3R0b206IDEwcHg7XHJcbn0iXX0= */"

/***/ }),

/***/ "./src/app/right-local/right-local.component.ts":
/*!******************************************************!*\
  !*** ./src/app/right-local/right-local.component.ts ***!
  \******************************************************/
/*! exports provided: RightLocalComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RightLocalComponent", function() { return RightLocalComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_api_service_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/api-service.service */ "./src/app/services/api-service.service.ts");



var RightLocalComponent = /** @class */ (function () {
    function RightLocalComponent(serviceAPI) {
        var _this = this;
        this.serviceAPI = serviceAPI;
        this.serviceAPI.getCovidUpdates().subscribe(function (data) {
            // console.log(data.data.global_new_cases)
            _this.localtotalcases = data.data.local_total_cases;
            _this.localdeaths = data.data.local_deaths;
            _this.localrecovered = data.data.local_recovered;
            _this.localactive = data.data.local_active_cases;
            _this.localnewcases = data.data.local_new_cases;
            _this.localnewdeaths = data.data.local_new_deaths;
            console.log(data.data.local_new_cases);
            console.log(_this.localnewcases);
        });
    }
    RightLocalComponent.prototype.ngOnInit = function () {
    };
    RightLocalComponent.ctorParameters = function () { return [
        { type: _services_api_service_service__WEBPACK_IMPORTED_MODULE_2__["ApiServiceService"] }
    ]; };
    RightLocalComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-right-local',
            template: __webpack_require__(/*! raw-loader!./right-local.component.html */ "./node_modules/raw-loader/index.js!./src/app/right-local/right-local.component.html"),
            styles: [__webpack_require__(/*! ./right-local.component.css */ "./src/app/right-local/right-local.component.css")]
        })
    ], RightLocalComponent);
    return RightLocalComponent;
}());



/***/ }),

/***/ "./src/app/right-pcr/right-pcr.component.css":
/*!***************************************************!*\
  !*** ./src/app/right-pcr/right-pcr.component.css ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "#content1{\r\n    width: 80%;\r\n    margin-left: 30px;\r\n    margin-top: 20px;\r\n    text-align: center;\r\n    background-color: cornsilk;\r\n}\r\ni{\r\n    margin-top:5px;\r\n    margin-bottom: 10px;\r\n}\r\n.span3 {\r\n    height: 390px !important;\r\n    overflow: scroll;\r\n}\r\ntable{\r\n    width: 80%;\r\n}\r\n.col1{\r\n    width:60%;\r\n    text-align: center;\r\n}\r\n.col2{\r\n    width: 40%;\r\n    text-align: center;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcmlnaHQtcGNyL3JpZ2h0LXBjci5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksVUFBVTtJQUNWLGlCQUFpQjtJQUNqQixnQkFBZ0I7SUFDaEIsa0JBQWtCO0lBQ2xCLDBCQUEwQjtBQUM5QjtBQUNBO0lBQ0ksY0FBYztJQUNkLG1CQUFtQjtBQUN2QjtBQUNBO0lBQ0ksd0JBQXdCO0lBQ3hCLGdCQUFnQjtBQUNwQjtBQUNBO0lBQ0ksVUFBVTtBQUNkO0FBQ0E7SUFDSSxTQUFTO0lBQ1Qsa0JBQWtCO0FBQ3RCO0FBQ0E7SUFDSSxVQUFVO0lBQ1Ysa0JBQWtCO0FBQ3RCIiwiZmlsZSI6InNyYy9hcHAvcmlnaHQtcGNyL3JpZ2h0LXBjci5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiI2NvbnRlbnQxe1xyXG4gICAgd2lkdGg6IDgwJTtcclxuICAgIG1hcmdpbi1sZWZ0OiAzMHB4O1xyXG4gICAgbWFyZ2luLXRvcDogMjBweDtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IGNvcm5zaWxrO1xyXG59XHJcbml7XHJcbiAgICBtYXJnaW4tdG9wOjVweDtcclxuICAgIG1hcmdpbi1ib3R0b206IDEwcHg7XHJcbn1cclxuLnNwYW4zIHtcclxuICAgIGhlaWdodDogMzkwcHggIWltcG9ydGFudDtcclxuICAgIG92ZXJmbG93OiBzY3JvbGw7XHJcbn1cclxudGFibGV7XHJcbiAgICB3aWR0aDogODAlO1xyXG59XHJcbi5jb2wxe1xyXG4gICAgd2lkdGg6NjAlO1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG59XHJcbi5jb2wye1xyXG4gICAgd2lkdGg6IDQwJTtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxufSJdfQ== */"

/***/ }),

/***/ "./src/app/right-pcr/right-pcr.component.ts":
/*!**************************************************!*\
  !*** ./src/app/right-pcr/right-pcr.component.ts ***!
  \**************************************************/
/*! exports provided: RightPcrComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RightPcrComponent", function() { return RightPcrComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_api_service_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/api-service.service */ "./src/app/services/api-service.service.ts");



var RightPcrComponent = /** @class */ (function () {
    function RightPcrComponent(serviceAPI) {
        var _this = this;
        this.serviceAPI = serviceAPI;
        this.serviceAPI.getCovidUpdates().subscribe(function (data) {
            // console.log(data.data.global_new_cases)
            _this.pcrcount = data.data.total_pcr_testing_count;
            _this.pcrList = data.data.daily_pcr_testing_data;
            // console.log(data.data.local_new_cases)
            console.log(data.data.global_total_cases);
        });
    }
    RightPcrComponent.prototype.ngOnInit = function () {
    };
    RightPcrComponent.ctorParameters = function () { return [
        { type: _services_api_service_service__WEBPACK_IMPORTED_MODULE_2__["ApiServiceService"] }
    ]; };
    RightPcrComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-right-pcr',
            template: __webpack_require__(/*! raw-loader!./right-pcr.component.html */ "./node_modules/raw-loader/index.js!./src/app/right-pcr/right-pcr.component.html"),
            styles: [__webpack_require__(/*! ./right-pcr.component.css */ "./src/app/right-pcr/right-pcr.component.css")]
        })
    ], RightPcrComponent);
    return RightPcrComponent;
}());



/***/ }),

/***/ "./src/app/services/api-service.service.ts":
/*!*************************************************!*\
  !*** ./src/app/services/api-service.service.ts ***!
  \*************************************************/
/*! exports provided: DataCovid, Data, PCR, HospitalDetails, Hospital, ApiServiceService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DataCovid", function() { return DataCovid; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Data", function() { return Data; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PCR", function() { return PCR; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HospitalDetails", function() { return HospitalDetails; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Hospital", function() { return Hospital; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ApiServiceService", function() { return ApiServiceService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");



var DataCovid = /** @class */ (function () {
    function DataCovid(data, message, success) {
        this.data = data;
        this.message = message;
        this.success = success;
    }
    DataCovid.ctorParameters = function () { return [
        { type: Data },
        { type: String },
        { type: Boolean }
    ]; };
    DataCovid = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])()
    ], DataCovid);
    return DataCovid;
}());

var Data = /** @class */ (function () {
    function Data(update_date_time, local_new_cases, local_total_cases, local_total_number_of_individuals_in_hospitals, local_deaths, local_new_deaths, local_recovered, local_active_cases, global_new_cases, global_total_cases, global_deaths, global_new_deaths, global_recovered, total_pcr_testing_count, daily_pcr_testing_data, hospital_data) {
        this.update_date_time = update_date_time;
        this.local_new_cases = local_new_cases;
        this.local_total_cases = local_total_cases;
        this.local_total_number_of_individuals_in_hospitals = local_total_number_of_individuals_in_hospitals;
        this.local_deaths = local_deaths;
        this.local_new_deaths = local_new_deaths;
        this.local_recovered = local_recovered;
        this.local_active_cases = local_active_cases;
        this.global_new_cases = global_new_cases;
        this.global_total_cases = global_total_cases;
        this.global_deaths = global_deaths;
        this.global_new_deaths = global_new_deaths;
        this.global_recovered = global_recovered;
        this.total_pcr_testing_count = total_pcr_testing_count;
        this.daily_pcr_testing_data = daily_pcr_testing_data;
        this.hospital_data = hospital_data;
    }
    Data.ctorParameters = function () { return [
        { type: Date },
        { type: Number },
        { type: Number },
        { type: Number },
        { type: Number },
        { type: Number },
        { type: Number },
        { type: Number },
        { type: Number },
        { type: Number },
        { type: Number },
        { type: Number },
        { type: Number },
        { type: Number },
        { type: PCR },
        { type: HospitalDetails }
    ]; };
    return Data;
}());

var PCR = /** @class */ (function () {
    function PCR(date, count) {
        this.date = date;
        this.count = count;
    }
    PCR.ctorParameters = function () { return [
        { type: Date },
        { type: Number }
    ]; };
    return PCR;
}());

var HospitalDetails = /** @class */ (function () {
    function HospitalDetails(id, hospital_id, cumulative_local, cumulative_foreign, treatment_local, treatment_foreign, created_at, updated_at, deleted_at, cumulative_total, treatment_total, hospital) {
        this.id = id;
        this.hospital_id = hospital_id;
        this.cumulative_local = cumulative_local;
        this.cumulative_foreign = cumulative_foreign;
        this.treatment_local = treatment_local;
        this.treatment_foreign = treatment_foreign;
        this.created_at = created_at;
        this.updated_at = updated_at;
        this.deleted_at = deleted_at;
        this.cumulative_total = cumulative_total;
        this.treatment_total = treatment_total;
        this.hospital = hospital;
    }
    HospitalDetails.ctorParameters = function () { return [
        { type: Number },
        { type: Number },
        { type: Number },
        { type: Number },
        { type: Number },
        { type: Number },
        { type: Date },
        { type: Date },
        { type: Date },
        { type: Number },
        { type: Number },
        { type: Hospital }
    ]; };
    return HospitalDetails;
}());

var Hospital = /** @class */ (function () {
    function Hospital(id, name, name_si, name_ta, created_at, updated_at, deleted_at) {
        this.id = id;
        this.name = name;
        this.name_si = name_si;
        this.name_ta = name_ta;
        this.created_at = created_at;
        this.updated_at = updated_at;
        this.deleted_at = deleted_at;
    }
    Hospital.ctorParameters = function () { return [
        { type: Number },
        { type: String },
        { type: String },
        { type: String },
        { type: Date },
        { type: Date },
        { type: Date }
    ]; };
    return Hospital;
}());

var ApiServiceService = /** @class */ (function () {
    function ApiServiceService(http) {
        this.http = http;
    }
    ApiServiceService.prototype.getCovidUpdates = function () {
        return this.http.get('https://www.hpb.health.gov.lk/api/get-current-statistical');
    };
    ApiServiceService.ctorParameters = function () { return [
        { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }
    ]; };
    ApiServiceService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        })
    ], ApiServiceService);
    return ApiServiceService;
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

module.exports = __webpack_require__(/*! D:\Python\covid\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main-es5.js.map