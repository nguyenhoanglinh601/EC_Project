import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LocalStorageService {
  private cart_item_quantity= new BehaviorSubject(localStorage.getItem("cart_item_quantity"));
  share_cart_item_quantity = this.cart_item_quantity.asObservable();

  constructor() { }

  shareCartItemQuantity(shared_cart_item_quantity: string){
    this.cart_item_quantity.next(shared_cart_item_quantity);
  }
}
