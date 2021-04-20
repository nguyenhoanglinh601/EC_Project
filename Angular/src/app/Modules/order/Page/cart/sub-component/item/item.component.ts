import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

import { LocalStorageService } from 'src/app/Data/Services/local-storage.service';
import { ItemCart } from 'src/app/Data/Types/ItemCart';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.css']
})
export class ItemComponent implements OnInit {
  @Input() item!: ItemCart;
  @Output() remove_item: EventEmitter<string> = new EventEmitter();
  @Output() change_quantity: EventEmitter<any> = new EventEmitter();
  constructor(private LocalStorageService: LocalStorageService) { }

  ngOnInit(): void {
  }


  deleteItem(id: string) {
    let length_cart = parseInt(localStorage.getItem("cart_item_quantity") + "");
    let index_start = 0;
    for (let i = 1; i <= length_cart; i++) {
      let item_id = localStorage.getItem("cart_" + i) + "";
      if (id == item_id) {
        index_start = i;
        break;
      }
    }
    if (index_start != 0) {
      this.arrangeCart(index_start, length_cart);
      length_cart--;
      localStorage.setItem("cart_item_quantity", length_cart.toString());

      this.LocalStorageService.shareCartItemQuantity(length_cart.toString());

      this.remove_item.emit(id);
    }
  }

  private arrangeCart(index_start: number, length_cart: number) {
    for (let i = index_start; i < length_cart; i++) {
      let j = i + 1;
      let item = localStorage.getItem("cart_" + j) + "";
      localStorage.setItem("cart_" + i, item);
    }
  }

  changeQuantity(object: any, element: any){
    let data = {id: object.item._id, quantity: element.target.value};
    this.change_quantity.emit(data);
  }
}
