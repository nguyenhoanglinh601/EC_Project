import { Component, OnInit, SimpleChanges } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { LocalStorageService } from 'src/app/Data/Services/local-storage.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  cart_item_quantity: string | undefined;

  constructor(private LocalStorageService: LocalStorageService) {
    
   }

  ngOnInit(): void {
    this.LocalStorageService.share_cart_item_quantity.subscribe(cart_item_quantity => 
       {
         if(cart_item_quantity!=null) this.cart_item_quantity=cart_item_quantity;
         else this.cart_item_quantity="0";
       });
  }

}
