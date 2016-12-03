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
var core_2 = require('@angular/core');
var LoginComponent = (function () {
    function LoginComponent(http) {
        this.http = http;
        this.logonEmitter = new core_2.EventEmitter();
        this.logonStatus = false;
        this.logonEmitter = new core_2.EventEmitter();
        this.logonStatus = false;
        this.logonEmitter.emit(this.logonStatus);
    }
    LoginComponent.prototype.login = function () {
        var _this = this;
        var headers = new http_1.Headers();
        headers.append('Content-Type', 'application/json');
        this.http.post('login', JSON.stringify({ username: this.username, password: this.password }), { headers: headers }).map(function (response) { return response.json(); }).subscribe(function (res) {
            if (res.success) {
                console.log('verified');
                _this.logonStatus = true;
                console.log(_this.logonStatus);
                _this.logonEmitter.emit(_this.logonStatus);
            }
            else {
                console.log('not verified');
            }
        });
    };
    LoginComponent = __decorate([
        core_1.Component({
            selector: 'login-user',
            templateUrl: 'client/components/login/login.component.html',
            outputs: ['logonEmitter', 'logonStatus']
        }), 
        __metadata('design:paramtypes', [http_1.Http])
    ], LoginComponent);
    return LoginComponent;
}());
exports.LoginComponent = LoginComponent;
//# sourceMappingURL=login.component.js.map