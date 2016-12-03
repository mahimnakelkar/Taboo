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
        this.loginStatus = false;
        this.loginEmitter = new core_2.EventEmitter();
        this.currentUserEmitter = new core_2.EventEmitter();
        this.loginEmitter = new core_2.EventEmitter();
        this.currentUserEmitter = new core_2.EventEmitter();
        this.loginStatus = false;
        this.loginEmitter.emit(this.loginStatus);
        this.user = { username: "", password: "", email: "", name: "", team: "" };
        this.currentUser = { name: "", username: "", email: "" };
        this.currentUserEmitter.emit(this.currentUser);
    }
    NewUserComponent.prototype.addUser = function () {
        if (this.password == "" || this.username == "" || this.email == "")
            return;
        this.currentUser = {
            name: this.name,
            username: this.username,
            email: this.email
        };
        this.currentUserEmitter.emit(this.currentUser);
        if (Math.random() % 2) {
            this.team = "red";
        }
        else {
            this.team = "blue";
        }
        this.loginStatus = true;
        this.loginEmitter.emit(this.loginStatus);
        this.user = {
            username: this.username,
            password: this.password,
            email: this.email,
            name: this.name,
            team: this.team
        };
        this.userservice.addUser(this.user);
    };
    NewUserComponent = __decorate([
        core_1.Component({
            selector: 'new-user',
            templateUrl: 'client/components/newuser/newuser.component.html',
            providers: [newuser_component_service_1.newuserservice],
            outputs: ['loginEmitter', 'loginStatus', 'currentUserEmitter', 'currentUser']
        }), 
        __metadata('design:paramtypes', [newuser_component_service_1.newuserservice])
    ], NewUserComponent);
    return NewUserComponent;
}());
exports.NewUserComponent = NewUserComponent;
//# sourceMappingURL=newuser.component.js.map