import { Component, OnInit} from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductApiService } from 'src/app/Data/Services/product-api.service';
import { BrandApiService } from 'src/app/Data/Services/brand-api.service';
import { ResolutionApiService } from 'src/app/Data/Services/resolution-api.service';
import { CategoriesApiService } from 'src/app/Data/Services/categories-api.service';
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
  products = new Array<Product>();
  brands!: Brand[];
  resolutions!: Resolution[];
  categories!: Category[];

  category!: any;
  brand!: any;
  keyWord!: any;
  sub!: any;

  constructor(
    private ProductApiService: ProductApiService,
    private BrandApiService: BrandApiService,
    private ResolutionApiService: ResolutionApiService,
    private CategoriesApiService: CategoriesApiService,
    private _Activatedroute: ActivatedRoute) {
  }

  ngOnInit(): void {
    this.mappingRoute();
  }

  public getProducts() {
    let key_word = "";
    if (this.keyWord != null) {
      key_word = this.keyWord;
    }
    if (this.brand == null) this.brand = "";
    if (this.category == null) this.category = "";
    this.ProductApiService.searchProducts(key_word, this.brand, "", this.category).subscribe(data => {
      this.products = data.map(item => {
        let brand = new Brand(item.brand._id, item.brand.name, item.brand.thumbnail, item.brand.slogan);
        let resolution = new Resolution(item.resolution._id, item.resolution.name);
        let category = new Category(item.category._id, item.category.name);
        return new Product(item._id, item.name, brand, item.warranty, item.color, resolution, item.sensor,
          item.lens, item.feature, item.power_source, item.connect_type, item.dimension, item.quantity,
          item.price, item.quality, item.images, item.description, item.deliver, item.thumbnail, category,
          item.status, item.quantity_sale);
      })
    });
  }

  public getBrands() {
    this.BrandApiService.getBrands().subscribe(data => {
      this.brands = data.map(item => {
        return new Brand(item._id, item.name, item.slogan, item.thumbnail);
      })
    })
  }

  public getResolutions() {
    this.ResolutionApiService.getResolutions().subscribe(data => {
      this.resolutions = data.map(item => {
        return new Resolution(item._id, item.name);
      })
    })
  }

  public getCategories() {
    this.CategoriesApiService.getCategories().subscribe(data => {
      this.categories = data.map(item => {
        return new Category(item._id, item.name);
      })
    })
  }

  mappingRoute() {
    this.sub = this._Activatedroute.paramMap.subscribe(params => {
      this.keyWord = params.get('keyword');
      this.category = params.get("category");
      this.brand = params.get("brand");
      this.getProducts();
      this.getBrands();
      this.getResolutions();
      this.getCategories();
      this.scrollToTop();
    });
  }

  scrollToTop() {
    window.scrollTo(0, 0);
  }

  filter(inputProducts: Array<Product>) {
    this.products = inputProducts;
  }
}
