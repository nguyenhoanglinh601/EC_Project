import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-discount',
  templateUrl: './discount.component.html',
  styleUrls: ['./discount.component.css']
})
export class DiscountComponent implements OnInit {
  is_message_error: boolean=false;
  constructor() { }

  ngOnInit(): void {
  }

  checkDiscountCode(){
    this.is_message_error=true;
  }

  closeMessage(){
    this.is_message_error=false;
  }
}
