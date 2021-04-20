import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LocalStorageService } from 'src/app/Data/Services/local-storage.service';
import { OrderApiService } from 'src/app/Data/Services/order-api.service';
import { ItemCart } from 'src/app/Data/Types/ItemCart';
import { Order } from 'src/app/Data/Types/Order';

@Component({
  selector: 'app-order-information',
  templateUrl: './order-information.component.html',
  styleUrls: ['./order-information.component.css']
})
export class OrderInformationComponent implements OnInit {
  location: string = "home";
  error: boolean = false;
  error_message: string = "";
  result: boolean = false;

  order_success!: Order;

  @Input() cart = new Array<ItemCart>();

  constructor(private OrderApiServices: OrderApiService, private LocalStorageService: LocalStorageService) { }

  ngOnInit(): void {
  }

  changeLocation(element: any) {
    this.location = element.target.value;
  }

  getOrderInfo() {
    this.error = false;

    let location_home = (<HTMLInputElement>document.getElementById("home")).checked;
    let location_showroom = (<HTMLInputElement>document.getElementById("showroom")).checked;

    let name = "", phone_number = "", email = "", city = "", district = "", ward = "", street = "", home_number = "", showroom_info = "";

    name = (<HTMLInputElement>document.getElementById("name")).value;
    phone_number = (<HTMLInputElement>document.getElementById("phoneNumber")).value;
    email = (<HTMLInputElement>document.getElementById("email")).value;

    if (name == "") {
      this.error = true;
      this.error_message = "Họ tên người nhận không hợp lệ";
    }

    if (phone_number == "") {
      this.error = true;
      this.error_message = "Số điện thoại người nhận không hợp lệ";
    }

    if (location_home == true) {

      city = (<HTMLInputElement>document.getElementById("city")).value;
      district = (<HTMLInputElement>document.getElementById("district")).value;
      ward = (<HTMLInputElement>document.getElementById("ward")).value;
      street = (<HTMLInputElement>document.getElementById("street")).value;
      home_number = (<HTMLInputElement>document.getElementById("homeNumber")).value;

      if (city == ""){
        this.error = true;
        this.error_message = "Tỉnh/Thành phố không hợp lệ";
      } 

      if (district == "") {
        this.error = true;
        this.error_message = "Quận/Huyện không hợp lệ";
      }

      if (ward == ""){
        this.error = true;
        this.error_message = "Phường/Xã không hợp lệ";
      }

      if (street == ""){
        this.error = true;
        this.error_message = "Tên đường không hợp lệ";
      }

      if (home_number == ""){
        this.error = true;
        this.error_message = "Số nhà không hợp lệ";
      }
    }
    else {
      let showroom_info_arr = document.getElementsByName("showroomInfo");
      showroom_info_arr.forEach(item => {
        let input = <HTMLInputElement>item;
        if (input.checked == true) {
          showroom_info = input.value;
        }
      })
    }

    let note = (<HTMLInputElement>document.getElementById("note")).value;
    let payment_method = "cash";

    let payment_method_arr = document.getElementsByName("payment");
    payment_method_arr.forEach(item => {
      let input = <HTMLInputElement>item;
      if (input.checked == true) {
        payment_method = input.value;
      }
    })

    let export_bill = false;
    if ((<HTMLInputElement>document.getElementById("export_bill")).checked == true) export_bill = true;

    let order_info = {
      location_home: location_home, location_showroom: location_showroom, name: name, phone_number: phone_number, email: email,
      city: city, district: district, ward: ward, street: street, home_number: home_number, showroom_info: showroom_info,
      note: note, payment_method: payment_method, export_bill: export_bill
    }

    return order_info;
  }

  order() {
    let info = this.getOrderInfo();
    let customer_id=localStorage.getItem("customer_id") + "";
    let time=new Date();
    let order_info = new Order("",customer_id, info.location_home, info.location_showroom, info.name, info.phone_number, info.email,
      info.city, info.district, info.ward, info.street, info.home_number, info.showroom_info,
      info.note, info.payment_method, info.export_bill, this.cart, time.getTime(), 0, time.getTime(), 1);

    if (this.error == false) {
      this.OrderApiServices.postOrder(order_info).subscribe(item => {
        if(item!=null){
          this.result=true;
          this.order_success=item;

          let cart_length = parseInt(localStorage.getItem("cart_item_quantity")+"");
          for(let i=1; i<=cart_length; i++){
            localStorage.removeItem("cart_"+i);
          }
          localStorage.setItem("cart_item_quantity","0");

          this.LocalStorageService.shareCartItemQuantity("0");
        }
      })
    }
  }

  closeMessage() {
    this.error = false;
  }

  scrollToTop(){
    window.scrollTo(0, 0);
  }
}
