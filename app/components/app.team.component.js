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
var TeamDataService_1 = require("../services/TeamDataService");
var CommService_1 = require("../services/CommService");
var TeamComponent = (function () {
    function TeamComponent(teamService, commService) {
        this.teamService = teamService;
        this.commService = commService;
    }
    TeamComponent.prototype.showPlayersOfTeam = function (teamId) {
        this.commService.getPlayersOfTeam(teamId);
    };
    TeamComponent.prototype.getAllTeams = function () {
        var _this = this;
        this.teamService.getAllTeams()
            .subscribe(function (result) { return _this.teams = result; }, function (error) { return console.log(error); }, function () { return console.log("REST get player complete"); });
    };
    TeamComponent.prototype.ngOnInit = function () {
        this.getAllTeams();
    };
    return TeamComponent;
}());
TeamComponent = __decorate([
    core_1.Component({
        selector: "teams",
        providers: [TeamDataService_1.TeamService],
        templateUrl: "./app/htmls/teams.html"
    }),
    __metadata("design:paramtypes", [TeamDataService_1.TeamService, CommService_1.CommService])
], TeamComponent);
exports.TeamComponent = TeamComponent;
//# sourceMappingURL=app.team.component.js.map