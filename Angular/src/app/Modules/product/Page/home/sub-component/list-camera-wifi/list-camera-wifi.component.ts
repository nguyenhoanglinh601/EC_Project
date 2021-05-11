import { Component, OnInit, SimpleChange } from '@angular/core';
import { PrimeNGConfig } from 'primeng/api';
import { ProductApiService } from '../../../../../../Data/Services/product-api.service';
import { Product } from '../../../../../../Data/Types/Product';

@Component({
  selector: 'app-list-camera-wifi',
  templateUrl: './list-camera-wifi.component.html',
  styleUrls: ['./list-camera-wifi.component.css']
})
export class ListCameraWifiComponent implements OnInit {
  products = new Array<Product>();
  indexSkipCameraWifiList = 0;
  isLoadMore = true;

  constructor(private ProductApiService: ProductApiService, private primengConfig: PrimeNGConfig) {
    if(sessionStorage.getItem("indexSkipCameraWifiList")==null){
      sessionStorage.setItem("indexSkipCameraWifiList","0");
    }
  }

  ngOnInit(): void {
    this.primengConfig.ripple = true;
    this.getProducts();

    let indexSkipCameraWifiListOld=JSON.parse(sessionStorage.getItem("indexSkipCameraWifiList")!);
    for(let i=1;i<=indexSkipCameraWifiListOld;i++){
      this.loadMoreProduct();
    }
  }

  ngOnChanges(changes: SimpleChange): void {
    if(changes.currentValue.products!=changes.previousValue.products){
      console.log("changes");
      this.products=changes.currentValue.products;
    }
  }

  public getProducts() {
    this.ProductApiService.getWifiCameras(0).subscribe(data => {
      this.products = data.map(item => {
        // let brand = new Brand(item.brand._id, item.brand.name, item.brand.thumbnail, item.brand.slogan);
        // let resolution = new Resolution(item.resolution._id, item.resolution.name);
        // let category = new Category(item.category._id, item.category.name);
        // return new Product(item._id, item.name, brand, item.warranty, item.color, resolution, item.sensor, item.lens, item.feature, item.power_source, item.connect_type, item.dimension, item.quantity, item.price, item.quality, item.images, item.description, item.deliver, item.thumbnail, category, item.status, item.quantity_sale);
        return new Product(item);
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

  public loadMoreProduct() {
    this.indexSkipCameraWifiList++;
    let productsLoaded = new Array<Product>();
    this.ProductApiService.getMoreSingleProducts("606a628f4665f514bcd9b59e", this.indexSkipCameraWifiList).subscribe(data => {
      productsLoaded = data.map(item => {
        // let brand = new Brand(item.brand._id, item.brand.name, item.brand.thumbnail, item.brand.slogan);
        // let resolution = new Resolution(item.resolution._id, item.resolution.name);
        // let category = new Category(item.category._id, item.category.name);
        // return new Product(item._id, item.name, brand, item.warranty, item.color, resolution, item.sensor, item.lens, item.feature, item.power_source, item.connect_type, item.dimension, item.quantity, item.price, item.quality, item.images, item.description, item.deliver, item.thumbnail, category, item.status, item.quantity_sale);
        return new Product(item);
      });
      if(productsLoaded.length<8){
        this.isLoadMore=false;
      }
      this.products = this.products.concat(productsLoaded);
    });
    sessionStorage.setItem("indexSkipCameraWifiList",this.indexSkipCameraWifiList.toString());
  }

  public isNew(create_time: number){
    return (Date.now()-create_time) < (86400000*30);
  }
}
