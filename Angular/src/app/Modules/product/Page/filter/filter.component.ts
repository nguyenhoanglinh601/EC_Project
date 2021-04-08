import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductApiService } from 'src/app/Data/Services/product-api.service';
import { Brand } from 'src/app/Data/Types/Brand';
import { Category } from 'src/app/Data/Types/Category';
import { Product } from 'src/app/Data/Types/Product';
import { Resolution } from 'src/app/Data/Types/Resolution';

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.css']
})
export class FilterComponent implements OnInit {
  products!: Product[];
  keyWord!: any;
  sub!: any;

  constructor(private ProductApiService: ProductApiService, private _Activatedroute: ActivatedRoute) { }

  ngOnInit(): void {
    this.mappingRoute();
    this.getProducts();
    this.scrollToTop();
  }

  public getProducts() {
    this.ProductApiService.searchProducts(this.keyWord).subscribe(data => {
      this.products = data.map(item => {
        let brand = new Brand(item.brand._id, item.brand.name, item.brand.thumbnail, item.brand.slogan);
        let resolution = new Resolution(item.resolution._id, item.resolution.name);
        let category = new Category(item.category._id, item.category.name);
        return new Product(item._id, item.name, brand, item.warranty, item.color, resolution, item.sensor, item.lens, item.feature, item.power_source, item.connect_type, item.dimension, item.quantity, item.price, item.quality, item.images, item.description, item.deliver, item.thumbnail, category, item.status, item.quantity_sale);
      })
    });
  }

  mappingRoute() {
    this.sub = this._Activatedroute.paramMap.subscribe(params => {
      this.keyWord = params.get('keyword');
    })
    console.log("keyWord: " + this.keyWord);
  }

  scrollToTop(){
    window.scrollTo(0,0);
  }
}
