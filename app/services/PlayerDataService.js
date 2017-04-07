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
var http_1 = require("@angular/http");
require("rxjs/add/operator/map");
var Observable_1 = require("rxjs/Observable");
var app_constants_1 = require("../app.constants");
var PlayerService = (function () {
    function PlayerService(http, config) {
        this.http = http;
        this.config = config;
        this.url = config.playerApiUrl;
        this.headers = new http_1.Headers();
        this.headers.append('Content-Type', 'application/json');
        this.headers.append('Accept', 'application/json');
    }
    PlayerService.prototype.getPlayerByName = function (name) {
        return this.http.get(this.url + name)
            .map(function (response) { return response.json(); });
    };
    PlayerService.prototype.getPlayersByTeam = function (teamId) {
        return this.http.get(this.url + "id/" + teamId)
            .map(function (res) { return res.json(); });
    };
    PlayerService.prototype.handleError = function (error) {
        console.error(error);
        return Observable_1.Observable.throw(error.json().error || 'Server error');
    };
    return PlayerService;
}());
PlayerService = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [http_1.Http, app_constants_1.Configuration])
], PlayerService);
exports.PlayerService = PlayerService;
//# sourceMappingURL=PlayerDataService.js.map