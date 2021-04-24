export class Admin{
    _id:string;
    name:string;
    phone_number: string;
    password: string;
    role: string;

    constructor(object: any){
        this._id=object._id;
        this.name=object.name;
        this.phone_number=object.phone_number;
        this.password=object.password;
        this.role=object.role;
    }
}