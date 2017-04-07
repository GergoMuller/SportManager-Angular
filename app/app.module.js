"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var platform_browser_1 = require("@angular/platform-browser");
var forms_1 = require("@angular/forms");
var app_component_1 = require("./app.component");
var app_player_component_1 = require("./components/app.player.component");
var app_team_component_1 = require("./components/app.team.component");
var app_constants_1 = require("./app.constants");
var http_1 = require("@angular/http");
var PlayerDataService_1 = require("./services/PlayerDataService");
var TeamDataService_1 = require("./services/TeamDataService");
var CommService_1 = require("./services/CommService");
var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    core_1.NgModule({
        imports: [
            platform_browser_1.BrowserModule,
            forms_1.FormsModule,
            http_1.HttpModule
        ],
        declarations: [
            app_component_1.AppComponent,
            app_player_component_1.PlayerComponent,
            app_team_component_1.TeamComponent
        ],
        bootstrap: [app_component_1.AppComponent, app_player_component_1.PlayerComponent, app_team_component_1.TeamComponent],
        providers: [app_constants_1.Configuration, PlayerDataService_1.PlayerService, TeamDataService_1.TeamService, CommService_1.CommService]
    })
], AppModule);
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map