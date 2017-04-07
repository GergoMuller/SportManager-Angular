import { Injectable } from '@angular/core';
import { Http, Response, Headers } from '@angular/http';
import 'rxjs/add/operator/map'
import { Observable } from 'rxjs/Observable';
import { Player } from '../model/Player';
import { Configuration } from '../app.constants';

@Injectable()
export class PlayerService{

    private url: string;
    private headers: Headers;

    constructor(private http: Http, private config: Configuration){
        this.url = config.playerApiUrl;
        this.headers = new Headers();
        this.headers.append('Content-Type', 'application/json');
        this.headers.append('Accept', 'application/json');
    }

    public getPlayerByName(name: string): Observable<Player[]>{
        return this.http.get(this.url + name)
                    .map((response: Response) => <Player[]>response.json());
    }

    public getPlayersByTeam(teamId: number): Observable<Player[]>{
        return this.http.get(this.url + "id/" + teamId)
                    .map((res: Response) => <Player[]>res.json());
    }

    private handleError(error: Response) {
        console.error(error);
        return Observable.throw(error.json().error || 'Server error');
    }

}
