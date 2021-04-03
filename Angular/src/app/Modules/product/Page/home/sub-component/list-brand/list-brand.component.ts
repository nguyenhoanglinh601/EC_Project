import { Component, OnInit } from '@angular/core';
import { BrandApiService } from '../../../../../../Data/Services/brand-api.service';
import { Brand } from '../../../../../../Data/Types/Brand';

@Component({
  selector: 'app-list-brand',
  templateUrl: './list-brand.component.html',
  styleUrls: ['./list-brand.component.css']
})
export class ListBrandComponent implements OnInit {
  brands = new Array<Brand>();
  brand: Brand | undefined;

  responsiveOptions: any;

  constructor(private BrandApiService: BrandApiService) {
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
    this.getBrands();
  }

  public getBrands() {
    this.BrandApiService.getBrands().subscribe(data => {
      this.brands = data.map(item => {
        return new Brand(item.id, item.name, item.thumbnail, item.slogan);
      })
    });
  }

  public getBrand() {
    this.BrandApiService.getBrand('6052b57c7de55528b8fb06f6').subscribe(data => {
      this.brand = data;
    });
  }

  // public postBrand() {
  //   this.BrandApiService.postBrand(this.body).subscribe(data => {
  //     this.brands.push(data);
  //   })
  // }

  public deleteBrand(data: string) {
    this.BrandApiService.deleleBrand(data).subscribe(data => {
      const index = this.brands.findIndex(Id => Id == data);
      this.brands.splice(index, 1);
    })
  }

}
