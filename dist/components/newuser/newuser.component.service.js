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
var newuserservice = (function () {
    function newuserservice(http) {
        this.http = http;
    }
    newuserservice.prototype.addUser = function (user) {
        var headers = new http_1.Headers();
        headers.append('Content-Type', 'application/json');
        this.http.post("api/user", JSON.stringify(user), { headers: headers }).subscribe(function (res) { });
    };
    newuserservice.prototype.getUserByUsername = function (username) {
        return this.http.get("/api/user/?username=" + username).map(function (response) { return response.json(); });
    };
    newuserservice.prototype.getUserByEmail = function (email) {
        return this.http.get("/api/user/?email=" + email).map(function (response) { return response.json(); });
    };
    newuserservice = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [http_1.Http])
    ], newuserservice);
    return newuserservice;
}());
exports.newuserservice = newuserservice;
//# sourceMappingURL=newuser.component.service.js.map