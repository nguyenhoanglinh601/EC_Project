import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { OrderApiService } from 'src/app/Data/Services/order-api.service';
import { ItemCart } from 'src/app/Data/Types/ItemCart';
import { Order } from 'src/app/Data/Types/Order';

@Component({
  selector: 'app-order-management',
  templateUrl: './order-management.component.html',
  styleUrls: ['./order-management.component.css']
})
export class OrderManagementComponent implements OnInit {
  order_list!: Array<Order>;
  order_detail!: Order;

  admin_id!: string;

  constructor(private router: Router, private OrderApiService: OrderApiService) {
    // let customer_id = localStorage.getItem("customer_id");
    // if (customer_id == null) {
    //   this.router.navigateByUrl("/login");
    // }
    this.admin_id = sessionStorage.getItem("admin_id") + "";
    if (this.admin_id == "null") {
      this.router.navigateByUrl("/admin/login");
    }
  }

  ngOnInit(): void {
    this.getAllOrders();
  }

  getAllOrders() {
    this.OrderApiService.getAllOrder().subscribe(items => {
      this.order_list = items;
    })
  }

  sliceId(id: string) {
    return id.slice(0, 3) + "..." + id.slice(id.length - 3, id.length)
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

  convertTime(milliseconds: number) {
    let time = new Date(milliseconds);
    return time.getDate() + "/" + (time.getMonth() + 1) + "/" + time.getFullYear();
  }

  showDetailInfo(order: Order) {
    this.order_detail = order;
  }

  scrollToTop() {
    window.scrollTo(0, 0);
  }
}
