export class Brand{
    public id: string;
    public name: string;
    public thumbnail: string;
    public slogan: string;

    constructor(id:string, name:string, thumbnail:string, slogan:string){
        this.id=id;
        this.name=name;
        this.thumbnail=thumbnail;
        this.slogan=slogan;
    }
}