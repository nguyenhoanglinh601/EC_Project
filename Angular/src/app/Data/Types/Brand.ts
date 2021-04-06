export class Brand{
    public _id: string;
    public name: string;
    public thumbnail: string;
    public slogan: string;

    constructor(_id:string, name:string, thumbnail:string, slogan:string){
        this._id=_id;
        this.name=name;
        this.thumbnail=thumbnail;
        this.slogan=slogan;
    }
}