import { Brand } from "./Brand";
import { Category } from "./Category";
import { Resolution } from "./Resolution";

export class Product {
    public id: string;
    public name: string;
    public brand: Brand;
    public warranty: string;
    public color: string;
    public resolution: Resolution;
    public sensor: string;
    public lens: string;
    public feature: string;
    public power_source: string;
    public connect_type: string;
    public dimension: string;
    public quantity: number;
    public price: number;
    public quality: string;
    public images: Array<string>;
    public description: string;
    public deliver: string;
    public thumbnail: string;
    public category: Category;
    public status: string;

    constructor(
        id: string,
        name: string,
        brand: Brand,
        warranty: string,
        color: string,
        resolution: Resolution,
        sensor: string,
        lens: string,
        feature: string,
        power_source: string,
        connect_type: string,
        dimension: string,
        quantity: number,
        price: number,
        quality: string,
        images: Array<string>,
        description: string,
        deliver: string,
        thumbnail: string,
        category: Category,
        status: string
    ) {
        this.id = id;
        this.name = name;
        this.brand = brand;
        this.warranty = warranty;
        this.color = color;
        this.resolution = resolution;
        this.sensor = sensor;
        this.lens = lens;
        this.feature = feature;
        this.power_source = power_source;
        this.connect_type = connect_type;
        this.dimension = dimension;
        this.quantity = quantity;
        this.price = price;
        this.quality = quality;
        this.images = images;
        this.description = description;
        this.deliver = deliver;
        this.thumbnail = thumbnail;
        this.category = category;
        this.status = status;
    }

    public truncateText(content: string, maxLength: number) {
        if (content.length > maxLength) {
            content= content.substr(0, maxLength) + '...';
        }
        return content;
    }

    public convertPrice(price: number){
        var value = this.price.toString();
        var result="";
        var length=value.length;
        var j=0;
        for(var i=length; i>=0; i--){
            if(j!=0 && j%3==0 && i!=0){
                result="."+value.charAt(i)+result;
            }
            else{
                result=value.charAt(i)+result;
            }
            j++;
        }
        return result;
    }
}