import { Admin } from "./Admin";

export class Coupon{
    _id:string;
    name:string;
    value:number;
    quantity:number;
    use_quantity: number;
    exp: number;
    create_time: number;
    edit_time: number;
    modifier: Admin[];
    note: string;
    status: string;

    constructor(object: any){
        this._id=object._id;
        this.name=object.name;
        this.value=object.value;
        this.quantity=object.quantity;
        this.use_quantity=object.use_quantity;
        this.exp=object.exp;
        this.create_time=object.create_time;
        this.edit_time=object.edit_time;
        this.modifier=object.modifier;
        this.note=object.note;
        this.status=object.status;
    }
}