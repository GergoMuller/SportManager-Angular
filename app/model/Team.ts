import { Player } from './Player'


export class Team{
    public name: string;
    public email: string;
    public foundedIn: string;
    public wins: number;
    public losses: number;
    public currentPlayers: Player[];
    public id: number;
}