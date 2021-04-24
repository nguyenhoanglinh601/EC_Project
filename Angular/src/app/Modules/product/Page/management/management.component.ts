import { TypeCheckScopeRegistry } from '@angular/compiler-cli/src/ngtsc/scope';
import { Component, OnInit } from '@angular/core';
import { BrandApiService } from 'src/app/Data/Services/brand-api.service';
import { CategoriesApiService } from 'src/app/Data/Services/categories-api.service';
import { ProductApiService } from 'src/app/Data/Services/product-api.service';
import { ResolutionApiService } from 'src/app/Data/Services/resolution-api.service';
import { Brand } from 'src/app/Data/Types/Brand';
import { Category } from 'src/app/Data/Types/Category';
import { Product } from 'src/app/Data/Types/Product';
import { Resolution } from 'src/app/Data/Types/Resolution';

@Component({
  selector: 'app-management',
  templateUrl: './management.component.html',
  styleUrls: ['./management.component.css']
})
export class ManagementComponent implements OnInit {
  productDetail!: Product;
  products!: Array<Product>;
  numberOfPage: number = 4;
  totalProducts!: number;
  currentPage: number = 0;
  brands!: Array<Brand>;
  categories!: Array<Category>;
  resolutions!: Array<Resolution>;
  constructor(
    private ProductApiService: ProductApiService,
    private BrandApiService: BrandApiService,
    private ResolutionApiService: ResolutionApiService,
    private CategoryApiService: CategoriesApiService
    ) { }

  ngOnInit(): void {
    this.getProductsTotal();
    this.getProducts(this.currentPage);
    this.getBrands();
    this.getCategories();
    this.getResolutions();
  }

  getProductsTotal(){
    this.ProductApiService.countProductsTotal().subscribe(total => {
      this.totalProducts=total;
    })
  }

  getProducts(currentPage: number) {
    this.ProductApiService.getProductsByPage(currentPage).subscribe(products => {
      this.products = products;
      this.highlightSelectedPage(this.currentPage);
      window.scrollTo(0,0);
    })
  }

  getBrands(){
    this.BrandApiService.getBrands().subscribe(brands =>{
      this.brands=brands;
    })
  }

  getCategories(){
    this.CategoryApiService.getCategories().subscribe(categories => {
      this.categories=categories;
    })
  }

  getResolutions(){
    this.ResolutionApiService.getResolutions().subscribe(resolutions => {
      this.resolutions=resolutions;
    })
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

  search(){}

  paginate(event: any) {
    console.log(event);
    this.currentPage=event.page;
    this.getProducts(this.currentPage);
  }

  highlightSelectedPage(page: number){
    let pageButtonArray = document.getElementsByClassName("p-paginator-page");
    for(let i=0; i<pageButtonArray.length; i++){
      pageButtonArray[i].classList.remove("p-highlight");
    }
    pageButtonArray[page].classList.add("p-highlight");
  }

  setEditProduct(product: Product){
    this.productDetail=product;
  }
}
