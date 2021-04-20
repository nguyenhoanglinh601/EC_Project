import { stringify } from '@angular/compiler/src/util';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { OrderApiService } from 'src/app/Data/Services/order-api.service';
import { ItemCart } from 'src/app/Data/Types/ItemCart';
import { Order } from 'src/app/Data/Types/Order';

@Component({
  selector: 'app-order-list',
  templateUrl: './order-list.component.html',
  styleUrls: ['./order-list.component.css']
})
export class OrderListComponent implements OnInit {
  order_list!: Array<Order>;
  order_detail!: Order;

  customer_name!: string;
  customer_phone_number!: string;

  constructor(private router: Router, private OrderApiService: OrderApiService) {
    // let customer_id = localStorage.getItem("customer_id");
    // if (customer_id == null) {
    //   this.router.navigateByUrl("/login");
    // }
    this.customer_name=sessionStorage.getItem("customer_name")+"";
    this.customer_phone_number=sessionStorage.getItem("customer_phone_number")+"";
    if(this.customer_name == "null" || this.customer_phone_number == "null"){
      this.router.navigateByUrl("/search-order");
    }
  }

  ngOnInit(): void {
    this.getAllOrders();
  }

  getAllOrders() {
    this.OrderApiService.SearchOrders(this.customer_name, this.customer_phone_number).subscribe(items => {
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

  convertTime(milliseconds: string) {
    let time = new Date(milliseconds);
    return time.getDate() + "/" + (time.getMonth()+1) + "/" + time.getFullYear();
  }

  showDetailInfo(order: Order){
    this.order_detail=order;
  }

  scrollToTop(){
    window.scrollTo(0,0);
  }
}
