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
var NewUserComponent = (function () {
    function NewUserComponent(userservice) {
        this.userservice = userservice;
        this.testval = "hello";
    }
    NewUserComponent.prototype.addUser = function () {
        console.log('in user component');
        console.log(this.username);
        var user = {
            username: 'eric',
            password: 'bond' //this.password
        };
        this.userservice.addUser(user).subscribe(function (res) {
            console.log(res);
        });
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
            providers: [newuser_component_service_1.newuserservice]
        }), 
        __metadata('design:paramtypes', [newuser_component_service_1.newuserservice])
    ], NewUserComponent);
    return NewUserComponent;
}());
exports.NewUserComponent = NewUserComponent;
//# sourceMappingURL=newuser.component.js.map