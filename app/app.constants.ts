import { Injectable } from '@angular/core';

@Injectable()
export class Configuration{
    private server: string = 'http://localhost:8080/proji/sm/';
    private playerApi: string = 'players/';
    private teamApi: string = 'teams/';
    public teamApiUrl: string = this.server + this.teamApi;
    public playerApiUrl: string = this.server + this.playerApi;
    

    

}