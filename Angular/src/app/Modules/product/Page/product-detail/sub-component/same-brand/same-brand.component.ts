import { Component, OnInit } from '@angular/core';
import { Brand } from 'src/app/Data/Types/Brand';
import { Category } from 'src/app/Data/Types/Category';
import { Resolution } from 'src/app/Data/Types/Resolution';
import { ProductApiService } from '../../../../../../Data/Services/product-api.service';
import { Product } from '../../../../../../Data/Types/Product';

@Component({
  selector: 'app-same-brand',
  templateUrl: './same-brand.component.html',
  styleUrls: ['./same-brand.component.css']
})
export class SameBrandComponent implements OnInit {
  products = new Array<Product>();
  product: Product | undefined;
  id: any;

  responsiveOptions: any;

  constructor(private ProductApiService: ProductApiService) {
    this.responsiveOptions = [
      {
        breakpoint: '1024px',
        numVisible: 3,
        numScroll: 3
      },
      {
        breakpoint: '768px',
        numVisible: 2,
        numScroll: 2
      },
      {
        breakpoint: '560px',
        numVisible: 1,
        numScroll: 1
      }
    ];

  }

  ngOnInit(): void {
    this.getSameBrandProducts();
  }

  public getSameBrandProducts() {
    this.ProductApiService.getSameBrandProducts().subscribe(data => {
      this.products = data.map(item => {
        let brand = new Brand(item.brand._id, item.brand.name, item.brand.thumbnail, item.brand.slogan);
        let resolution = new Resolution(item.resolution._id, item.resolution.name);
        let category = new Category(item.category._id, item.category.name);
        return new Product(item._id, item.name, brand, item.warranty, item.color, resolution, item.sensor, item.lens, item.feature, item.power_source, item.connect_type, item.dimension, item.quantity, item.price, item.quality, item.images, item.description, item.deliver, item.thumbnail, category, item.status, item.quantity_sale);
      });
    });
  }

  scrollToTop(){
    window.scrollTo(0,0);
  }
}
