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
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var animation_1 = require("./animation");
var TitleComponent = (function () {
    function TitleComponent() {
        this.routeAnimation = true;
        this.display = 'block';
        this.position = 'absolute';
    }
    return TitleComponent;
}());
__decorate([
    core_1.HostBinding('@routeAnimation'),
    __metadata("design:type", Object)
], TitleComponent.prototype, "routeAnimation", void 0);
__decorate([
    core_1.HostBinding('style.display'),
    __metadata("design:type", Object)
], TitleComponent.prototype, "display", void 0);
__decorate([
    core_1.HostBinding('style.position'),
    __metadata("design:type", Object)
], TitleComponent.prototype, "position", void 0);
TitleComponent = __decorate([
    core_1.Component({
        selector: "titleComp",
        template: " <h1 class=\"main-title\"> SportManager </h1> ",
        animations: [animation_1.slideInDownAnimation],
    })
], TitleComponent);
exports.TitleComponent = TitleComponent;
//# sourceMappingURL=app.title.component.js.map