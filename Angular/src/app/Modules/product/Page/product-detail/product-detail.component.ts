import { Component, OnDestroy, OnInit, SimpleChange } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { Product } from 'src/app/Data/Types/Product';
import { Brand } from 'src/app/Data/Types/Brand';
import { Resolution } from 'src/app/Data/Types/Resolution';
import { Category } from 'src/app/Data/Types/Category';
import { ProductApiService } from 'src/app/Data/Services/product-api.service';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent implements OnInit, OnDestroy {
  product: Product | undefined;
  id!: any;
  sub!: any;
  constructor(private _Activatedroute: ActivatedRoute, private ProductApiService: ProductApiService, private router: Router) { }

  ngOnInit(): void {
    this.mappingRoute();
    window.scrollTo(0, 0);
  }

  ngOnDestroy(): void {
    this.sub.unsubscribe();
  }

  mappingRoute() {
    this.sub = this._Activatedroute.paramMap.subscribe(params => {
      this.id = params.get('id');
      this.ProductApiService.getProduct(this.id).subscribe(item => {
        this.product = item
          let brand = new Brand(item.brand._id, item.brand.name, item.brand.thumbnail, item.brand.slogan);
          let resolution = new Resolution(item.resolution._id, item.resolution.name);
          let category = new Category(item.category._id, item.category.name);
          return new Product(item._id, item.name, brand, item.warranty, item.color, resolution, 
            item.sensor, item.lens, item.feature, item.power_source, item.connect_type, item.dimension, 
            item.quantity, item.price, item.quality, item.images, item.description, item.deliver, 
            item.thumbnail, category, item.status, item.quantity_sale);
        })
    });
  }

  onBack(): void {
    this.router.navigate(['']);
  }
}
