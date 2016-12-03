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
var body_component_test_service_1 = require('./body.component.test.service');
var card = (function () {
    function card() {
    }
    return card;
}());
var BodyComponent = (function () {
    function BodyComponent(testservice) {
        this.testservice = testservice;
        this.cards = [
            { _id: "1", answer: "ans", color: "blue", hints: ["Clue1", "Clue2", "Clue3", "Clue4"] }
        ];
    }
    BodyComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.cards.pop();
        this.testservice.getAllCards().subscribe(function (res) {
            res.map(function (card) {
                _this.cards.push(card);
            });
        });
        console.log(this.currentUser);
    };
    BodyComponent.prototype.getColor = function (card) {
        if (card === void 0) { card = { color: "green" }; }
        return card.color;
    };
    BodyComponent.prototype.submitAnswer = function (card, answer, inputs) {
        console.log("Checking answer");
        console.log(card._id + " " + answer);
        var index = 0;
        for (var i = 0; i < this.cards.length; i++) {
            if (this.cards[i]._id == card._id) {
                console.log("Card Id Found");
                index = i;
                break;
            }
        }
        inputs.value = null;
        if (answer.toLowerCase() == card.answer.toLowerCase()) {
            answer = "";
            this.cards[index] = this.cards[0];
            this.cards.shift();
            inputs.value = null;
        }
    };
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Object)
    ], BodyComponent.prototype, "currentUser", void 0);
    BodyComponent = __decorate([
        core_1.Component({
            selector: 'main-app',
            templateUrl: 'client/components/body/body.component.html',
            styleUrls: ["client/components/body/body.component.css"],
            providers: [body_component_test_service_1.bodycomponentservice]
        }), 
        __metadata('design:paramtypes', [body_component_test_service_1.bodycomponentservice])
    ], BodyComponent);
    return BodyComponent;
}());
exports.BodyComponent = BodyComponent;
//# sourceMappingURL=body.component.js.map