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
var PlayerDataService_1 = require("../services/PlayerDataService");
var CommService_1 = require("../services/CommService");
var router_1 = require("@angular/router");
var _ = require("lodash");
var core_2 = require("@angular/core");
var PlayerComponent = (function () {
    function PlayerComponent(playerService, commService, router) {
        var _this = this;
        this.playerService = playerService;
        this.commService = commService;
        this.router = router;
        this.searchParam = "";
        this.setCurrentPlayer = function (player) {
            var currentPlayer = _.find(_this.players, function (p) { return p.id == player.id; });
            _this.commService.selectPlayer(currentPlayer);
            _this.router.navigate(["/player-details"]);
        };
        this.subscription = this.commService.displayedlayersChanged$
            .subscribe(function (players) { return _this.players = players; });
    }
    PlayerComponent.prototype.ngOnInit = function () {
        //this.getPlayerByName();
    };
    PlayerComponent.prototype.getPlayerByName = function () {
        var _this = this;
        this.playerService
            .getPlayerByName(this.searchParam)
            .subscribe(function (res) { return _this.players = res; }, function (error) { return console.log(error); }, function () { return console.log("REST get player complete"); });
    };
    PlayerComponent.prototype.getByTeamId = function (teamId) {
        var _this = this;
        this.playerService.getPlayersByTeam(teamId)
            .subscribe(function (res) { return _this.players = res; }, function (error) { return console.log(error); }, function () { return console.log("REST get player complete"); });
    };
    PlayerComponent.prototype.ngOnDestroy = function () {
        this.subscription.unsubscribe();
    };
    return PlayerComponent;
}());
PlayerComponent = __decorate([
    core_1.Component({
        selector: "player-byname",
        providers: [PlayerDataService_1.PlayerService],
        templateUrl: "./app/htmls/searchPlayer.html",
        animations: [
            core_2.trigger('playerAnim', [
                core_2.state('*', core_2.style({
                    opacity: 1,
                    transform: 'translateY(0)'
                })),
                core_2.transition(':enter', [
                    core_2.style({
                        opacity: 0,
                        transform: 'translateY(-100%)'
                    }),
                    core_2.animate('0.5s ease-in')
                ]),
                core_2.transition(':leave', [
                    core_2.animate('0.5s ease-out', core_2.style({
                        opacity: 0,
                        transform: 'translateY(100%)'
                    }))
                ])
            ])
        ]
    }),
    __metadata("design:paramtypes", [PlayerDataService_1.PlayerService,
        CommService_1.CommService,
        router_1.Router])
], PlayerComponent);
exports.PlayerComponent = PlayerComponent;
//# sourceMappingURL=app.player.component.js.map