import { Component, Input, OnInit, Output } from '@angular/core';
import { PrimeNGConfig } from 'primeng/api';
import { Brand } from 'src/app/Data/Types/Brand';
import { Resolution } from 'src/app/Data/Types/Resolution';
import { Category } from 'src/app/Data/Types/Category';
import { ProductApiService } from 'src/app/Data/Services/product-api.service';
import { Product } from 'src/app/Data/Types/Product';
import { EventEmitter } from '@angular/core';

@Component({
  selector: 'app-filter-content',
  templateUrl: './filter-content.component.html',
  styleUrls: ['./filter-content.component.css']
})
export class FilterContentComponent implements OnInit {
  @Input() keyWord!: string;
  @Input() brands!: Brand[];
  @Input() resolutions!: Resolution[];
  @Input() categories!: Category[];

  brandList = new Array<Brand>();
  resolutionList = new Array<Resolution>();
  categoryList = new Array<Category>();

  @Output() outputProducts: EventEmitter<Product[]> = new EventEmitter();

  products = new Array<Product>();

  constructor(private primengConfig: PrimeNGConfig, private ProductApiService: ProductApiService) { }

  ngOnInit(): void {
    this.primengConfig.ripple = true;
  }

  selected(event: any, filter: string, object: any) {
    event.target.classList.toggle("button");
    event.target.classList.toggle("button-active");

    switch (filter) {
      case "brand":
        this.changeFilter(this.brandList, object);
        break;
      case "resolution":
        this.changeFilter(this.resolutionList, object);
        break;
      case "category":
        this.changeFilter(this.categoryList, object);
        break;
    }

    this.filterProducts();

    // console.log("[");
    // this.resolutionList.forEach(item => {
    //   console.log(item.name);
    // });
    // console.log("]");
  }

  changeFilter(array: any, object: any) {
    let isObjectExist = array.includes(object);
    if (isObjectExist) {
      let index = array.indexOf(object);
      array.splice(index, 1);
    }
    else {
      array.push(object);
    }
  }

  filterProducts() {
    let stringBrand = "";
    let stringResolution = "";
    let stringCategory = "";

    // console.log("length: " + this.brandList.length);

    if (this.brandList.length > 0) {
      this.brandList.forEach(item => {
        stringBrand = stringBrand + "-" + item._id;
      })
      stringBrand = stringBrand.substring(1);
    }

    // console.log("stringBrand: " + stringBrand);

    if (this.resolutionList.length > 0) {
      this.resolutionList.forEach(item => {
        stringResolution = stringResolution + "-" + item._id;
      })
      stringResolution = stringResolution.substring(1);
    }

    // console.log("stringResolution: " + stringResolution);

    if (this.categoryList.length > 0) {
      this.categoryList.forEach(item => {
        stringCategory = stringCategory + "-" + item._id;
      })
      stringCategory = stringCategory.substring(1);
    }

    // console.log("stringCategory: " + stringCategory);

    this.ProductApiService.searchProducts(this.keyWord, stringBrand, stringResolution, stringCategory).subscribe(data => {
      this.products = data.map(item => {
        // let brand = new Brand(item.brand._id, item.brand.name, item.brand.slogan, item.brand.thumbnail);
        // let resolution = new Resolution(item.resolution._id, item.resolution.name);
        // let category = new Category(item.category._id, item.category.name);
        // return new Product(item._id, item.name, brand, item.warranty, item.color, resolution, item.sensor,
        //   item.lens, item.feature, item.power_source, item.connect_type, item.dimension, item.quantity,
        //   item.price, item.quality, item.images, item.description, item.deliver, item.thumbnail, item.category,
        //   item.status, item.quantity_sale);
        return new Product(item);
      })
      this.outputProducts.emit(this.products);
    })
  }

}
