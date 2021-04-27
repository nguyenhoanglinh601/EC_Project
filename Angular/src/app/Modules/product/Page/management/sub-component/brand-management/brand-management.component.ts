import { Component, OnInit } from '@angular/core';
import { BrandApiService } from 'src/app/Data/Services/brand-api.service';
import { Brand} from 'src/app/Data/Types/Brand';

@Component({
  selector: 'app-brand-management',
  templateUrl: './brand-management.component.html',
  styleUrls: ['./brand-management.component.css']
})
export class BrandManagementComponent implements OnInit {
  brands = new Array<Brand>();
  brandToShow!: Brand;
  constructor(private BrandApiService: BrandApiService) { }

  ngOnInit(): void {
    this.getBrands();
  }

  getBrands(){
    this.BrandApiService.getAllBrands().subscribe(brands => {
      this.brands=brands;
    })
  }

  showBrand(brand: Brand){
    this.brandToShow=brand;
  }

  displayThumbnail(link: string){
    link = link.replace("file/d/", "thumbnail?id=");
    link = link.replace("/view?usp=sharing", "");
    return link;
  }

  updateBrand(){
    let name = (<HTMLInputElement>document.getElementById("name-edit")).value;
    let slogan = (<HTMLInputElement>document.getElementById("slogan-edit")).value;
    let thumbnail = (<HTMLInputElement>document.getElementById("thumbnail-edit")).value;
    let status = (<HTMLInputElement>document.getElementById("status-edit")).checked;

    let brand = new Brand(this.brandToShow._id, name, thumbnail, slogan, status);
    this.BrandApiService.updateBrand(brand, this.brandToShow._id).subscribe();

    let index=this.brands.findIndex(brandToCheck => {
      return brandToCheck._id===brand._id;
    })
    Object.assign(this.brands[index], brand);
    alert("Cập nhập thành công");
  }

  saveBrand(){
    let name = (<HTMLInputElement>document.getElementById("name")).value;
    let slogan = (<HTMLInputElement>document.getElementById("slogan")).value;
    let thumbnail = (<HTMLInputElement>document.getElementById("thumbnail")).value;
    let status = (<HTMLInputElement>document.getElementById("status")).checked;

    let brand = new Brand("", name, thumbnail, slogan, status);
    this.BrandApiService.postBrand(brand).subscribe(brand => {
      if(brand!=null){
        this.brands.unshift(brand);
        alert("Lưu thương thiệu thành công");
        (<HTMLInputElement>document.getElementById("name")).innerHTML="";
        (<HTMLInputElement>document.getElementById("slogan")).innerHTML="";
        (<HTMLInputElement>document.getElementById("thumbnail")).innerHTML="";
        (<HTMLInputElement>document.getElementById("status")).checked=false;
      }
      else{
        alert("Lưu thương hiệu thất bại");
      }
    })
  }
}
