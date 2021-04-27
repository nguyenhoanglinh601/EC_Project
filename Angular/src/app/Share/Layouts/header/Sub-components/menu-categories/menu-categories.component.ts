import { Component, OnInit } from '@angular/core';
import { CategoriesApiService } from '../../../../../Data/Services/categories-api.service';
import { Category } from '../../../../../Data/Types/Category';
import { BrandApiService } from 'src/app/Data/Services/brand-api.service';
import { Brand } from 'src/app/Data/Types/Brand';

@Component({
  selector: 'app-menu-categories',
  templateUrl: './menu-categories.component.html',
  styleUrls: ['./menu-categories.component.css']
})
export class MenuCategoriesComponent implements OnInit {
  listCategories: Category[] | undefined;
  brands = new Array<Brand>();

  constructor(private CategoryApiService: CategoriesApiService, private BrandApiService: BrandApiService) { }

  ngOnInit(): void {
    this.getCategories();
    this.getBrands();
  }

  public getCategories() {
    this.CategoryApiService.getCategories().subscribe(data => {
      this.listCategories = data.map(item => {
        return new Category(item._id, item.name);
      })
    });
  }

  public getBrands() {
    this.BrandApiService.getBrands().subscribe(data => {
      this.brands = data.map(item => {
        return new Brand(item._id, item.name, item.slogan, item.thumbnail, item.status);
      })
    })
  }
}
