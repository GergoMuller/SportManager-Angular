import { Injectable } from '@angular/core';
import { Http, Response, Headers } from '@angular/http';
import 'rxjs/add/operator/map'
import { Observable } from 'rxjs/Observable';
import { Team } from '../model/Team';
import { Configuration } from '../app.constants';

@Injectable()
export class TeamService{

    private url: string;
    private headers: Headers;

    constructor(private http: Http, private config: Configuration){
        this.url = config.teamApiUrl;
        this.headers = new Headers();
        this.headers.append('Content-Type', 'application/json');
        this.headers.append('Accept', 'application/json');
    }

    public getAllTeams(): Observable<Team[]>{
        return this.http.get(this.url)
                    .map((response: Response) => <Team[]>response.json())
                    

    }

    private handleError(error: Response) {
        console.error(error);
        return Observable.throw(error.json().error || 'Server error');
    }

}
