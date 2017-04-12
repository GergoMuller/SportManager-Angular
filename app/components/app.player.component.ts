import { Component, OnInit } from '@angular/core';
import { PlayerService } from '../services/PlayerDataService';
import { Player } from '../model/Player';
import { CommService} from '../services/CommService';
import { Subscription }   from 'rxjs/Subscription';
import { Router, NavigationEnd } from '@angular/router';
import * as _ from 'lodash';

@Component({
    selector: "player-byname",
    providers: [PlayerService],
    templateUrl: "./app/htmls/searchPlayer.html"
})
export class PlayerComponent{
    public players: Player[];
    public searchParam: string= "";
    private subscription: Subscription;
    
    constructor(private playerService: PlayerService, 
                private commService: CommService ,
                private router: Router){
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

    public setCurrentPlayer = (player: Player): void => {
      // let currentPlayer = _.find(this.players,(p: Player) => p.id == playerId)
      this.commService.selectPlayer(player);
      this.router.navigate(["/player-details"]);
    }

    ngOnDestroy(){
        this.subscription.unsubscribe();
    }
}
