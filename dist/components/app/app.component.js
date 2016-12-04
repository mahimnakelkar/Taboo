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
var AppComponent = (function () {
    function AppComponent() {
        this.page = "main";
        this.loginStatus = 'false';
        this.currentUser = {
            name: "",
            username: "",
            email: "",
            team: ""
        };
    }
    AppComponent.prototype.changePage = function (state) {
        if (state === void 0) { state = "main"; }
        this.page = state;
    };
    AppComponent.prototype.changeLogin = function (loginStatus) {
        console.log("Change Login");
        if (loginStatus == true) {
            this.loginStatus = 'true';
            this.page = "profile";
        }
        else
            this.loginStatus = 'false';
    };
    AppComponent.prototype.changeCurrentUser = function (user) {
        this.currentUser = user;
        console.log("User follows");
        console.log(user);
    };
    AppComponent.prototype.logout = function () {
        this.loginStatus = 'false';
        this.page = "main";
        this.currentUser = { name: "", username: "", email: "", team: "" };
    };
    AppComponent = __decorate([
        core_1.Component({
            selector: "taboo-app",
            templateUrl: 'client/components/app/app.component.html',
            styleUrls: ["client/components/app/app.component.css"],
            inputs: ['loginStatus', 'user', 'logonStatus', 'logonUser']
        }), 
        __metadata('design:paramtypes', [])
    ], AppComponent);
    return AppComponent;
}());
exports.AppComponent = AppComponent;
//# sourceMappingURL=app.component.js.map