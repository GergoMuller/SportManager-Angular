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
var Subject_1 = require("rxjs/Subject");
var PlayerDataService_1 = require("./PlayerDataService");
var TeamDataService_1 = require("./TeamDataService");
var CommService = (function () {
    function CommService(playerService, teamService) {
        this.playerService = playerService;
        this.teamService = teamService;
        this.displayedPlayersChangedSource = new Subject_1.Subject();
        this.displayedlayersChanged$ = this.displayedPlayersChangedSource.asObservable();
    }
    CommService.prototype.getPlayersOfTeam = function (teamId) {
        var players;
        this.playerService.getPlayersByTeam(teamId)
            .subscribe(function (res) { return players = res; }, function (error) { return console.log(error); }, function () { return console.log("REST get player complete"); });
        alert("Kiskutya");
        this.displayedPlayersChangedSource.next(players);
    };
    return CommService;
}());
CommService = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [typeof (_a = typeof PlayerDataService_1.PlayerService !== "undefined" && PlayerDataService_1.PlayerService) === "function" && _a || Object, typeof (_b = typeof TeamDataService_1.TeamService !== "undefined" && TeamDataService_1.TeamService) === "function" && _b || Object])
], CommService);
exports.CommService = CommService;
var _a, _b;
//# sourceMappingURL=CommService.js.map