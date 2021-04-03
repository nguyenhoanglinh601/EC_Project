import { Component, OnInit } from '@angular/core';
import { PrimeNGConfig } from 'primeng/api';
import { Brand } from 'src/app/Data/Types/Brand';
import { Category } from 'src/app/Data/Types/Category';
import { Resolution } from 'src/app/Data/Types/Resolution';
import { ProductApiService } from '../../../../../../Data/Services/product-api.service';
import { Product } from '../../../../../../Data/Types/Product';

@Component({
  selector: 'app-list-product',
  templateUrl: './list-product.component.html',
  styleUrls: ['./list-product.component.css']
})
export class ListProductComponent implements OnInit {
  products = new Array<Product>();
  indexSkip: number = 0;

  constructor(private ProductApiService: ProductApiService, private primengConfig: PrimeNGConfig) { }

  ngOnInit(): void {
    this.primengConfig.ripple=true;
    this.getProducts();
  }

  public getProducts() {
    this.ProductApiService.getProducts().subscribe(data => {
      this.products = data.map(item => {
        let brand = new Brand(item.brand.id, item.brand.name, item.brand.thumbnail, item.brand.slogan);
        let resolution = new Resolution(item.resolution.id, item.resolution.name);
        let category = new Category(item.category.id, item.category.name);
        return new Product(item.id, item.name, brand, item.warranty, item.color, resolution, item.sensor, item.lens, item.feature, item.power_source, item.connect_type, item.dimension, item.quantity, item.price, item.quality, item.images, item.description, item.deliver, item.thumbnail, category, item.status);
      })
    });
  }

  // public postProduct() {
  //   this.ProductApiService.postProduct(this.body).subscribe(data => {
  //     this.products.push(data);
  //   })
  // }

  public deleteProduct(data: string) {
    this.ProductApiService.deleleProduct(data).subscribe(data => {
      const index = this.products.findIndex(Id => Id == data);
      this.products.splice(index, 1);
    })
  }

  public loadMoreProduct(){
    this.indexSkip++;
    var productsLoaded=new Array<Product>();
    this.ProductApiService.getMoreProducts(this.indexSkip).subscribe(data => {
      productsLoaded = data.map(item => {
        let brand = new Brand(item.brand.id, item.brand.name, item.brand.thumbnail, item.brand.slogan);
        let resolution = new Resolution(item.resolution.id, item.resolution.name);
        let category = new Category(item.category.id, item.category.name);
        return new Product(item.id, item.name, brand, item.warranty, item.color, resolution, item.sensor, item.lens, item.feature, item.power_source, item.connect_type, item.dimension, item.quantity, item.price, item.quality, item.images, item.description, item.deliver, item.thumbnail, category, item.status);
      })
      this.products = this.products.concat(productsLoaded);
    });
  }
}
