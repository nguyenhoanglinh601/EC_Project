import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.css']
})
export class PaymentComponent implements OnInit {
  @Input() total: number=0;
  constructor() { }

  ngOnInit(): void {
  }

  public convertPrice(price: number){
    var value = price.toString();
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
