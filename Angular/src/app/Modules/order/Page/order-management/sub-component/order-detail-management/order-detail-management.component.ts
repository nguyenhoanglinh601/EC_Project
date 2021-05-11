import { Component, Input, OnInit } from '@angular/core';
import { OrderApiService } from 'src/app/Data/Services/order-api.service';
import { ItemCart } from 'src/app/Data/Types/ItemCart';
import { Order } from 'src/app/Data/Types/Order';
import { Product } from 'src/app/Data/Types/Product';

@Component({
  selector: 'app-order-detail-management',
  templateUrl: './order-detail-management.component.html',
  styleUrls: ['./order-detail-management.component.css']
})
export class OrderDetailManagementComponent implements OnInit {
  @Input() order!: Order;
  products!: Array<Product>;

  constructor(private OrderApiService: OrderApiService) { }

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

  caculateTotal(cart: Array<ItemCart>, other: number) {
    let total = 0;
    cart.forEach(item => {
      total += item.price * item.quantity;
    });
    total+=other;
    return this.convertPrice(total);
  }

  convertTime(milliseconds: number) {
    let time = new Date(milliseconds);
    return time.getHours() + ":" + time.getMinutes() + ":" + time.getSeconds() + "  " + time.getDate() + "/" + (time.getMonth() + 1) + "/" + time.getFullYear();
  }

  handleOrder(order: Order) {
    let status = (<HTMLSelectElement>document.getElementById("order-status")).selectedIndex;
    let deliver_cost = (<HTMLInputElement>document.getElementById("deliver-cost")).value;
    order.status = status;
    order.deliver_expense = parseInt(deliver_cost);

    this.OrderApiService.updateOrder(order, order._id).subscribe(result => {
      alert("Lưu thành công");
    },
    error => {
      alert("Thao tác thất bại. Lỗi hệ thống");
    }
    )
  }
}
