import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.css']
})
export class PaymentComponent implements OnInit {
  @Input() total: number = 0;
  constructor(private router: Router) { }

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

  // isLogin(){
  //   let customer_id=localStorage.getItem("customer_id");
  //   if(customer_id==null){
  //     this.router.navigate(['/login']);
  //   }
  // }

}
