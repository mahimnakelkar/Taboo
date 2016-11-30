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
var newuser_component_service_1 = require('./newuser.component.service');
var core_2 = require('@angular/core');
var NewUserComponent = (function () {
    function NewUserComponent(userservice) {
        this.userservice = userservice;
        this.testval = "hello";
        this.user = { username: "", password: "" };
        this.loginStatus = false;
        this.loginEmitter = new core_2.EventEmitter();
        this.loginEmitter = new core_2.EventEmitter();
        this.loginStatus = false;
        this.loginEmitter.emit(this.loginStatus);
    }
    NewUserComponent.prototype.addUser = function () {
        this.loginStatus = true;
        this.loginEmitter.emit(this.loginStatus);
        console.log('in user component');
        console.log(this.username);
        this.user = {
            username: 'eric',
            password: 'bond' //this.password
        };
        /*
        this.userservice.addUser(this.user).subscribe(res => {
            console.log(res);
        });
        */
    };
    NewUserComponent.prototype.getUser = function () {
        this.userservice.getUserByUsername('eric').subscribe(function (res) {
            console.log(res);
        });
    };
    NewUserComponent = __decorate([
        core_1.Component({
            selector: 'new-user',
            templateUrl: 'client/components/newuser/newuser.component.html',
            providers: [newuser_component_service_1.newuserservice],
            outputs: ['loginEmitter', 'loginStatus']
        }), 
        __metadata('design:paramtypes', [newuser_component_service_1.newuserservice])
    ], NewUserComponent);
    return NewUserComponent;
}());
exports.NewUserComponent = NewUserComponent;
//# sourceMappingURL=newuser.component.js.map