"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var http_1 = require('@angular/http');
require('rxjs/add/operator/map');
var bodycomponenttestservice = (function () {
    function bodycomponenttestservice(http) {
        this.http = http;
    }
    bodycomponenttestservice.prototype.addCard = function (dummycard) {
        var headers = new http_1.Headers();
        headers.append('Content-Type', 'application/json');
        return this.http.post('api/card/', JSON.stringify(dummycard), { headers: headers }); //.map(response => response.json());
    };
    bodycomponenttestservice.prototype.getCardById = function (id) {
        return this.http.get('api/card/?_id=' + id).map(function (response) { return response.json(); });
    };
    bodycomponenttestservice.prototype.getAllCards = function () {
        return this.http.get('api/card/').map(function (response) { return response.json(); });
    };
    bodycomponenttestservice = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [http_1.Http])
    ], bodycomponenttestservice);
    return bodycomponenttestservice;
}());
exports.bodycomponenttestservice = bodycomponenttestservice;
//# sourceMappingURL=body.component.test.service.js.map