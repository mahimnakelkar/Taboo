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
            template: "\n\n    \t\n    \t<header>\n    \t\t<nav class =\"navbar navbar-inverse\">\n    \t\t\t<div class = \"navbar-header\">\t\t\t\n    \t\t\t\t\t<span>\n    \t\t\t\t\t\t<a href= \"/\" class=\"navbar-brand\"> Taboo </a>\n    \t\t\t\t\t</span>\n    \t\t\t\t\t<span>\n    \t\t\t\t\t\t<a href= \"/\" class=\"navbar-brand login\" style> Login </a>\n    \t\t\t\t\t</span>\n    \t\t\t</div>\n    \t\t</nav>\n    \t</header>\n        <main>\n        \t<button (click) = \"addCard()\"> Add Card </button> <p>\n        \t<div *ngFor = \"let card of cards\">\n\t        \t<div class = \"flip-container\">\n\t        \t\t<div class = \"flipper\">\n\t        \t\t\t<div class = \"front\" >\n\t        \t\t\t\t<div class = \"card\" [style.background-color]=\"getColor(card)\">\n\t        \t\t\t\t\t<div class = \"clue\">\n\t        \t\t\t\t\t\t<div *ngFor = \"let hint of card.hints\">\n\t        \t\t\t\t\t\t\t<span class=\"hint\"> {{ hint }} </span>\n\t        \t\t\t\t\t\t</div>\n\t        \t\t\t\t\t</div>\n\t        \t\t\t\t</div>\n\n\t        \t\t\t</div>\n\t        \t\t\t<div class = \"back\">\n\t        \t\t\t\t<div class = \"card\" [style.background-color]=\"getColor(card)\">\n\t        \t\t\t\t\t<div class=\"inputDiv\">\n\t        \t\t\t\t\t\t<input type = 'text' class='answerInput'/>\n\t        \t\t\t\t\t</div>\n\t        \t\t\t\t</div>\n\n\t        \t\t\t</div>\n\t        \t\t</div>\n\t        \t</div>\n        \t</div>\n\n\n\n        </main>\n    "
        }), 
        __metadata('design:paramtypes', [])
    ], AppComponent);
    return AppComponent;
}());
exports.AppComponent = AppComponent;
//# sourceMappingURL=app.component.js.map