export class ItemCart {
  public _id: string;
  public name: string;
  public thumbnail: string;
  public price: number;
  public inventory_quantity: number;
  public quantity: number;

  constructor(id: string, name: string, thumbnail: string, price: number, inventory_quantity: number, quantity: number) {
    this._id = id;
    this.name = name;
    this.thumbnail = thumbnail;
    this.price = price;
    this.inventory_quantity = inventory_quantity;
    this.quantity = quantity;
  }

  cost() {
    if (this.quantity > this.inventory_quantity) this.quantity = this.inventory_quantity;
    return this.price * this.quantity;
  }

  public convertPrice(price: number) {
    var value = this.price.toString();
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