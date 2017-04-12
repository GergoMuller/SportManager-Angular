import { Component, OnInit, Input } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { PlayerService } from '../services/PlayerDataService';
import { Player } from '../model/Player';
import { CommService} from '../services/CommService';
import { Subscription }   from 'rxjs/Subscription';

@Component({
    selector: 'playerDetails',
    templateUrl: './app/htmls/playerDetail.html'
})
export class PlayerDetailComponent{

    private subscription: Subscription;
    public currentPlayer: Player;

    constructor(private router: Router, private commService: CommService) { 
        this.subscription = commService.selectedPlayerChanged
                            .subscribe(player => this.currentPlayer = player);
    }

    public active = (): boolean => {
        return !!this.currentPlayer;
    }

    shoPlayer(){
        alert(this.currentPlayer.name);
    }
     ngOnDestroy(){
        this.subscription.unsubscribe();
    }
}