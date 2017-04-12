import { Injectable } from '@angular/core';
import { Subject }    from 'rxjs/Subject';
import { Player } from '../model/Player';
import { PlayerService} from './PlayerDataService';
import { TeamService} from './TeamDataService';

@Injectable()
export class CommService{

    constructor(private playerService: PlayerService,private teamService: TeamService){}

    private displayedPlayersChangedSource = new Subject<Player[]>();
    private selectedPlayerSource = new Subject<Player>();

    public displayedlayersChanged$ = this.displayedPlayersChangedSource.asObservable();
    public selectedPlayerChanged = this.selectedPlayerSource.asObservable();

    public getPlayersOfTeam(teamId: number){
        let players: Player[];
        this.playerService.getPlayersByTeam(teamId)
            .subscribe(
                (res: Player[]) => players = res,
                error => console.log(error),
                () => console.log("REST get player complete")
            );
        setTimeout(() => this.displayedPlayersChangedSource.next(players), 100);
    }

    public selectPlayer(player: Player){
        setTimeout( () => this.selectedPlayerSource.next(player),50);
    }
}