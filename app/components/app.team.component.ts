import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { TeamService } from '../services/TeamDataService';
import { Team } from '../model/Team';
import { CommService} from '../services/CommService';

@Component({
    selector: "teams",
    providers: [TeamService],
    templateUrl: "./app/htmls/teams.html"
})
export class TeamComponent{
    constructor(private teamService: TeamService, private commService: CommService){}
    public teams: Team[];

    public showPlayersOfTeam(teamId: number){
        this.commService.getPlayersOfTeam(teamId);
    }

    public getAllTeams(){
        this.teamService.getAllTeams()
            .subscribe(
                (result: Team[]) => this.teams = result,
                 error => console.log(error),
                 () => console.log("REST get player complete")
            );
    }

    ngOnInit(){
        this.getAllTeams();
    }

}