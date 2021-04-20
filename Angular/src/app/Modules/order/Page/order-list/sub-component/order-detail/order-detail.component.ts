import { Component, Input, OnInit } from '@angular/core';
import { ItemCart } from 'src/app/Data/Types/ItemCart';
import { Order } from 'src/app/Data/Types/Order';
import { Product } from 'src/app/Data/Types/Product';

@Component({
  selector: 'app-order-detail',
  templateUrl: './order-detail.component.html',
  styleUrls: ['./order-detail.component.css']
})
export class OrderDetailComponent implements OnInit {
  @Input() order!: Order;
  products!: Array<Product>;

  constructor() { }

  ngOnInit(): void {
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

  caculateTotal(cart: Array<ItemCart>) {
    let total = 0;
    cart.forEach(item => {
      total += item.price * item.quantity;
    });
    return this.convertPrice(total);
  }

  convertTime(milliseconds: string) {
    let time = new Date(milliseconds);
    return time.getHours() + ":" + time.getMinutes() + ":" + time.getSeconds() + "  " + time.getDate() + "/" + (time.getMonth() + 1) + "/" + time.getFullYear();
  }
}
