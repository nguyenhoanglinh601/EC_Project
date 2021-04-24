import { Admin } from "./Admin";
import { Brand } from "./Brand";
import { Category } from "./Category";
import { Coupon } from "./Coupon";
import { Resolution } from "./Resolution";

export class Product {
    // public _id: string;
    // public name: string;
    // public brand: Brand;
    // public warranty: string;
    // public color: string;
    // public resolution: Resolution;
    // public sensor: string;
    // public lens: string;
    // public feature: string;
    // public power_source: string;
    // public connect_type: string;
    // public dimension: string;
    // public quantity: number;
    // public price: number;
    // public quality: string;
    // public images: Array<string>;
    // public description: string;
    // public deliver: string;
    // public thumbnail: string;
    // public category: Category;
    // public status: string;
    // public quantity_sale: number;

    // constructor(
    //     _id: string,
    //     name: string,
    //     brand: Brand,
    //     warranty: string,
    //     color: string,
    //     resolution: Resolution,
    //     sensor: string,
    //     lens: string,
    //     feature: string,
    //     power_source: string,
    //     connect_type: string,
    //     dimension: string,
    //     quantity: number,
    //     price: number,
    //     quality: string,
    //     images: Array<string>,
    //     description: string,
    //     deliver: string,
    //     thumbnail: string,
    //     category: Category,
    //     status: string,
    //     quantity_sale: number
    // ) {
    //     this._id = _id;
    //     this.name = name;
    //     this.brand = brand;
    //     this.warranty = warranty;
    //     this.color = color;
    //     this.resolution = resolution;
    //     this.sensor = sensor;
    //     this.lens = lens;
    //     this.feature = feature;
    //     this.power_source = power_source;
    //     this.connect_type = connect_type;
    //     this.dimension = dimension;
    //     this.quantity = quantity;
    //     this.price = price;
    //     this.quality = quality;
    //     this.images = images;
    //     this.description = description;
    //     this.deliver = deliver;
    //     this.thumbnail = thumbnail;
    //     this.category = category;
    //     this.status = status;
    //     this.quantity_sale=quantity_sale;
    // }

    _id: string;
    product_single: boolean;
    product_set: boolean;
    set_detail: Product[];
    name: string;
    brand: Brand;
    warranty: string;
    color: string;
    resolution: Resolution;
    sensor: string;
    lens: string;
    feature: string;
    power_source: string;
    connect_type: string;
    dimension: string;
    quantity: number;
    store_time: string;
    compatible_device: string[];
    price: number;
    market_price: number;
    quality: string;
    images: Array<string>;
    description: string;
    deliver: string;
    thumbnail: string;
    category: Category;
    status: string;
    quantity_sale: number;
    create_time: number;
    edit_time: number;
    modifiers: Admin[];

    constructor(object: any) {
        this._id = object._id;
        this.name = object.name;
        this.brand = object.brand;
        this.warranty = object.warranty;
        this.color = object.color;
        this.resolution = object.resolution;
        this.sensor = object.sensor;
        this.lens = object.lens;
        this.feature = object.feature;
        this.power_source = object.power_source;
        this.connect_type = object.connect_type;
        this.dimension = object.dimension;
        this.quantity = object.quantity;
        this.price = object.price;
        this.quality = object.quality;
        this.images = object.images;
        this.description = object.description;
        this.deliver = object.deliver;
        this.thumbnail = object.thumbnail;
        this.category = object.category;
        this.status = object.status;
        this.quantity_sale = object.quantity_sale;
        this.product_single = object.product_single;
        this.product_set = object.product_set;
        this.set_detail = object.set_detail;
        this.store_time = object.store_time;
        this.compatible_device = object.compatible_device;
        this.market_price = object.market_price;
        this.create_time = object.create_time;
        this.edit_time = object.edit_time;
        this.modifiers = object.modifiers;
    }

    public truncateText(content: string, maxLength: number) {
        if (content.length > maxLength) {
            content = content.substr(0, maxLength) + '...';
        }
        return content;
    }

    public convertPrice(price: number) {
        var value = price.toString();
        var result = "";
        var length = value.length;
        var j = 0;
        for (var i = length; i >= 0; i--) {
            if (j != 0 && j % 3 == 0 && i != 0) {
                result = "." + value.charAt(i) + result;
            }
            else {
                result = value.charAt(i) + result;
            }
            j++;
        }
        return result;
    }
}