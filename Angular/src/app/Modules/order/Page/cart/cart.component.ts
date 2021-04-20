import { Component, OnInit } from '@angular/core';
import { ProductApiService } from 'src/app/Data/Services/product-api.service';
import { Brand } from 'src/app/Data/Types/Brand';
import { Category } from 'src/app/Data/Types/Category';
import { ItemCart } from 'src/app/Data/Types/ItemCart';
import { Product } from 'src/app/Data/Types/Product';
import { Resolution } from 'src/app/Data/Types/Resolution';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})



export class CartComponent implements OnInit {
  cart_items = new Array<ItemCart>();
  total: number=0;
  constructor(private ProductApiService: ProductApiService) {
  }

  ngOnInit(): void {
    this.getProductInCart();
  }

  getProductInCart() {
    let cart_item_quantity = parseInt(localStorage.getItem("cart_item_quantity") + "");
    for (let i = 1; i <= cart_item_quantity; i++) {
      let item_id = localStorage.getItem("cart_" + i) + "";
      this.ProductApiService.getProduct(item_id).subscribe(item => {
        let brand = new Brand(item.brand._id, item.brand.name, item.brand.thumbnail, item.brand.slogan);
        let resolution = new Resolution(item.resolution._id, item.resolution.name);
        let category = new Category(item.category._id, item.category.name);
        let product = new Product(item._id, item.name, brand, item.warranty, item.color, resolution,
          item.sensor, item.lens, item.feature, item.power_source, item.connect_type, item.dimension,
          item.quantity, item.price, item.quality, item.images, item.description, item.deliver,
          item.thumbnail, category, item.status, item.quantity_sale);

        let cart_item = new ItemCart(product._id, product.name, product.thumbnail , product.price, product.quantity, 1);
        this.cart_items.push(cart_item);
        this.total+=cart_item.cost();
      });
    }
  }

  removeItem(id: string) {
    for (let i = 0; i < this.cart_items.length; i++) {
      if (this.cart_items[i]._id == id) this.cart_items.splice(i, 1);
    }
    this.caculateTotal();
  }

  private caculateTotal(){
    this.total=0;
    this.cart_items.forEach(item => {
      this.total+=item.cost();
    })
  }

  changeItemQuantity(data: any){
    this.cart_items.forEach(item =>{
      if(item._id==data.id){
        item.quantity=data.quantity;
      };
    });
    this.caculateTotal();
  }

}