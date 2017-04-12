

export class Player{
    public name: string;
    public email: string;
    public age: number;
    public description: string;
    public position: string;
    public id: number;
    public picture: any;

    private _b64pic: string;
    get b64pic(): string{
        return btoa(this.picture);
    }
}