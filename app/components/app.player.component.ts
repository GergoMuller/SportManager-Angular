import { Component, OnInit } from '@angular/core';
import { PlayerService } from '../services/PlayerDataService';
import { Player } from '../model/Player';
import { CommService} from '../services/CommService';
import { Subscription }   from 'rxjs/Subscription';
import { Router, NavigationEnd } from '@angular/router';
import * as _ from 'lodash';
import {slideInDownAnimation} from '../components/animation';
import { animate, AnimationEntryMetadata, state, style, transition, trigger } from '@angular/core';

@Component({
    selector: "player-byname",
    providers: [PlayerService],
    templateUrl: "./app/htmls/searchPlayer.html",
    animations: [
    trigger('playerAnim', [
    state('*',
      style({
        opacity: 1,
        transform: 'translateY(0)'
      })
    ),
    transition(':enter', [
      style({
        opacity: 0,
        transform: 'translateY(-100%)'
      }),
      animate('0.5s ease-in')
    ]),
    transition(':leave', [
      animate('0.5s ease-out', style({
        opacity: 0,
        transform: 'translateY(100%)'
      }))
    ])
  ])
  ]
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
      let currentPlayer = _.find(this.players,(p: Player) => p.id == player.id);
      this.commService.selectPlayer(currentPlayer);
      this.router.navigate(["/player-details"]);
    }

    ngOnDestroy(){
        this.subscription.unsubscribe();
    }
}
