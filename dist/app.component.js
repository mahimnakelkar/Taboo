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
        // Connect this part to database later
        this.cards = [
            { color: "green", hints: ["Clue1", "Clue2"] },
            { color: "red", hints: ["Clue1"] },
            { color: "blue", hints: ["Clue1", "Clue2", "Clue3", "Clue4"] }
        ];
    }
    AppComponent.prototype.getColor = function (card) {
        if (card === void 0) { card = { color: "green" }; }
        return card.color;
    };
    AppComponent.prototype.addCard = function () {
        this.cards.push({ color: "green", hints: ["Clue1", "Clue2"] });
    };
    AppComponent = __decorate([
        core_1.Component({
            selector: 'my-app',
            templateUrl: '../views/index.html'
        }), 
        __metadata('design:paramtypes', [])
    ], AppComponent);
    return AppComponent;
}());
exports.AppComponent = AppComponent;
//# sourceMappingURL=app.component.js.map