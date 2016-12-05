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
var body_component_test_service_1 = require('../body/body.component.test.service');
var ProfileComponent = (function () {
    function ProfileComponent(testservice) {
        this.testservice = testservice;
        this.userscore = 0;
    }
    ProfileComponent.prototype.ngOnInit = function () {
        var _this = this;
        console.log("Profile Init");
        this.testservice.getUserScore(this.currentUser.username).subscribe(function (res) {
            res.map(function (user) {
                console.log(_this.userscore);
                _this.userscore = user.score + 10;
                console.log(_this.userscore);
            });
        });
    };
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Object)
    ], ProfileComponent.prototype, "currentUser", void 0);
    ProfileComponent = __decorate([
        core_1.Component({
            selector: 'profile',
            templateUrl: 'client/components/profile/profile.component.html',
            styleUrls: ["client/components/profile/profile.component.css"],
            providers: [body_component_test_service_1.bodycomponentservice]
        }), 
        __metadata('design:paramtypes', [body_component_test_service_1.bodycomponentservice])
    ], ProfileComponent);
    return ProfileComponent;
}());
exports.ProfileComponent = ProfileComponent;
//# sourceMappingURL=profile.component.js.map