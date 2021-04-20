import { ItemCart } from "./ItemCart";

export class Order{
    constructor(
        public _id: string,
        public customer_id: string,
        public location_home: boolean,
        public location_showroom: boolean,
        public name: string,
        public phone_number: string,
        public email: string,
        public city: string,
        public district: string,
        public ward: string,
        public street: string,
        public home_number: string,
        public showroom_info: string,
        public note: string,
        public payment_method: string,
        public export_bill: boolean,
        public carts: Array<ItemCart>,
        public order_time: number,
        public deliver_expense: number,
        public shipping_time: number,
        public status: number
        ){}
}