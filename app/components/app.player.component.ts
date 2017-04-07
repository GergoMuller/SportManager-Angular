import { Component, OnInit } from '@angular/core';
import { PlayerService } from '../services/PlayerDataService';
import { Player } from '../model/Player';
import { CommService} from '../services/CommService';
import { Subscription }   from 'rxjs/Subscription';

@Component({
    selector: "player-byname",
    providers: [PlayerService],
    templateUrl: "./app/htmls/searchPlayer.html"
})
export class PlayerComponent{
    public players: Player[];
    public searchParam: string= "";
    private subscription: Subscription;
    

    constructor(private playerService: PlayerService, private commService: CommService ){
        this.subscription = this.commService.displayedlayersChanged$
                                .subscribe( players => this.players = players);
    }

    ngOnInit(){
        //this.getPlayerByName();
    }

    public getPlayerByName(){
        this.playerService
            .getPlayerByName(this.searchParam)
            .subscribe(
                (res: Player[]) => this.players = res,
                error => console.log(error),
                () => console.log("REST get player complete")
            );
    }

    public getByTeamId(teamId: number){
        this.playerService.getPlayersByTeam(teamId)
            .subscribe(
                (res: Player[]) => this.players = res,
                error => console.log(error),
                () => console.log("REST get player complete")
            );
    }
}