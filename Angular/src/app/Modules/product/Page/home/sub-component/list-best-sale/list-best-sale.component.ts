import { Component, OnInit } from '@angular/core';
import { Brand } from 'src/app/Data/Types/Brand';
import { Category } from 'src/app/Data/Types/Category';
import { Resolution } from 'src/app/Data/Types/Resolution';
import { ProductApiService } from '../../../../../../Data/Services/product-api.service';
import { Product } from '../../../../../../Data/Types/Product';

@Component({
  selector: 'app-list-best-sale',
  templateUrl: './list-best-sale.component.html',
  styleUrls: ['./list-best-sale.component.css']
})
export class ListBestSaleComponent implements OnInit {
  products = new Array<Product>();
  product: Product | undefined;

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

  public getProduct() {
    this.ProductApiService.getProduct('6052b57c7de55528b8fb06f6').subscribe(data => {
      this.product = data;
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
}
