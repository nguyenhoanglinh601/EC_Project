import { Component, OnInit } from '@angular/core';
import { LocalStorageService } from 'src/app/Data/Services/local-storage.service';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {
  cart_item_quantity: string | undefined;
  constructor(private LocalStorageService: LocalStorageService) { }

  ngOnInit(): void {
    this.LocalStorageService.share_cart_item_quantity.subscribe(cart_item_quantity => 
      {
        if(cart_item_quantity!=null) this.cart_item_quantity=cart_item_quantity;
        else this.cart_item_quantity="0";
      });
  }

}
