import { Component, Input, OnInit } from '@angular/core';
import { Product } from 'src/app/Data/Types/Product';
import { PrimeNGConfig } from 'primeng/api';
import { LocalStorageService } from 'src/app/Data/Services/local-storage.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-general-information',
  templateUrl: './general-information.component.html',
  styleUrls: ['./general-information.component.css']
})
export class GeneralInformationComponent implements OnInit {
  @Input() product: Product | undefined;
  img: string | undefined;

  constructor(
    private primengConfig: PrimeNGConfig, 
    private LocalStorageService: LocalStorageService,
    private router: Router) {
  }

  ngOnInit(): void {
    this.primengConfig.ripple=true;
  }

  ngOnChanges(): void {
    if (this.product != undefined) {
      this.img = this.product.images[0];
    }
  }

  changeImage(img: string) {
    this.img = img;
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

  addCart(id: string){
    if(localStorage.getItem("cart_item_quantity")==null){
      localStorage.setItem("cart_item_quantity","1");
      localStorage.setItem("cart_1",id);

      this.LocalStorageService.shareCartItemQuantity("1");
    }
    else{
      let cart_item_quantity=parseInt(localStorage.getItem("cart_item_quantity")+"");
      let isExist=false;
      for(let i=1; i<=cart_item_quantity; i++){
        let item_id=localStorage.getItem("cart_"+i);
        if(item_id==id){
          isExist=true;
        }
      }
      if(isExist==false){
        cart_item_quantity++;
        localStorage.setItem("cart_item_quantity",cart_item_quantity.toString());
        localStorage.setItem("cart_"+cart_item_quantity,id);
        this.LocalStorageService.shareCartItemQuantity(cart_item_quantity.toString());
      }
    }

    let cart_item_quantity=parseInt(localStorage.getItem("cart_item_quantity")+"");
    for(let i=1; i<=cart_item_quantity; i++){
      let item_id=localStorage.getItem("cart_"+i);
    }
  }

  buy(id: string){
    this.addCart(id);
    this.router.navigateByUrl('/cart');
  }

  lineBreak(content: string){
    return content.split("\n");
  }

  clearLine(line: string){
    return line.replace("\\n","");
  }
}
