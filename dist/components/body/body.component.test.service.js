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
var bodycomponentservice = (function () {
    function bodycomponentservice(http) {
        this.http = http;
    }
    bodycomponentservice.prototype.addCard = function (dummycard) {
        var headers = new http_1.Headers();
        headers.append('Content-Type', 'application/json');
        return this.http.post('api/card/', JSON.stringify(dummycard), { headers: headers }).subscribe(function (res) { });
    };
    bodycomponentservice.prototype.getTeamScore = function (team) {
        return this.http.get('api/team/?name=' + team.toLowerCase()).map(function (response) { return response.json(); });
    };
    bodycomponentservice.prototype.getCardById = function (id) {
        return this.http.get('api/card/?_id=' + id).map(function (response) { return response.json(); });
    };
    bodycomponentservice.prototype.getAllCards = function (team) {
        console.log(team);
        if (team) {
            console.log('yes team');
            return this.http.get('api/card/?team=' + team + '&active=true').map(function (response) { return response.json(); });
        }
        console.log('no team');
        return this.http.get('api/card/').map(function (response) { return response.json(); });
    };
    bodycomponentservice.prototype.setActiveFalse = function (id) {
        var headers = new http_1.Headers();
        headers.append('Content-Type', 'application/json');
        this.http.post('api/card/', JSON.stringify({ _id: id, active: false }), { headers: headers }).subscribe(function (res) { });
    };
    bodycomponentservice.prototype.incrementTeamScore = function (team) {
        var _this = this;
        var headers = new http_1.Headers();
        headers.append('Content-Type', 'application/json');
        this.getTeamScore(team).subscribe(function (res) {
            res.map(function (ret_team) {
                var score = ret_team.score + 2;
                _this.http.post('api/team/', JSON.stringify({ name: team.toLowerCase(), score: score }), { headers: headers }).subscribe(function (res) { });
            });
        });
    };
    bodycomponentservice.prototype.decrementTeamScore = function (team) {
        var _this = this;
        var headers = new http_1.Headers();
        headers.append('Content-Type', 'application/json');
        this.getTeamScore(team).subscribe(function (res) {
            res.map(function (ret_team) {
                var score = ret_team.score - 1;
                console.log(score);
                _this.http.post('api/team/', JSON.stringify({ name: team.toLowerCase(), score: score }), { headers: headers }).subscribe(function (res) { });
            });
        });
    };
    bodycomponentservice.prototype.decrementUserScore = function (user) {
        var headers = new http_1.Headers();
        headers.append('Content-Type', 'application/json');
        var score = user.score - 1;
        this.http.post('api/user/', JSON.stringify({ _id: user._id, score: score }), { headers: headers }).subscribe(function (res) { });
    };
    bodycomponentservice.prototype.incrementUserScore = function (user) {
        var headers = new http_1.Headers();
        headers.append('Content-Type', 'application/json');
        var score = user.score + 2;
        this.http.post('api/user/', JSON.stringify({ _id: user._id, score: score }), { headers: headers }).subscribe(function (res) { });
    };
    bodycomponentservice.prototype.getUserScore = function (username) {
        return this.http.get('api/user/?username=' + username).map(function (response) { return response.json(); });
    };
    bodycomponentservice = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [http_1.Http])
    ], bodycomponentservice);
    return bodycomponentservice;
}());
exports.bodycomponentservice = bodycomponentservice;
//# sourceMappingURL=body.component.test.service.js.map