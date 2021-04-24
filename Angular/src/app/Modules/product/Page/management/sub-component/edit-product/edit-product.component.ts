import { Component, EventEmitter, Input, OnInit, Output, SimpleChange } from '@angular/core';
import { ProductApiService } from 'src/app/Data/Services/product-api.service';
import { Brand } from 'src/app/Data/Types/Brand';
import { Category } from 'src/app/Data/Types/Category';
import { Product } from 'src/app/Data/Types/Product';
import { Resolution } from 'src/app/Data/Types/Resolution';

@Component({
  selector: 'app-edit-product',
  templateUrl: './edit-product.component.html',
  styleUrls: ['./edit-product.component.css']
})
export class EditProductComponent implements OnInit {
  @Input() brands!: Array<Brand>;
  @Input() resolutions!: Array<Resolution>;
  @Input() categories!: Array<Category>;
  @Input() productDetail!: Product;

  errorMesage = "";
  constructor(private ProductApiService: ProductApiService) { }

  ngOnInit(): void {
  }

  addThumbnail() {
    this.productDetail.thumbnail = (<HTMLInputElement>document.getElementById("thumbnail-edit")).value;
    this.productDetail.thumbnail = this.productDetail.thumbnail.replace("file/d/", "thumbnail?id=");
    this.productDetail.thumbnail = this.productDetail.thumbnail.replace("/view?usp=sharing", "");
  }

  deleteThumbnail() {
    this.productDetail.thumbnail = "";
  }

  addImage() {
    let imageLink = (<HTMLInputElement>document.getElementById("images-edit")).value;
    imageLink = imageLink.replace("file/d/", "thumbnail?id=");
    imageLink = imageLink.replace("/view?usp=sharing", "");
    let isExist = false;
    this.productDetail.images.forEach(image => {
      if (image === imageLink) isExist = true;
    })
    if (isExist === false) {
      this.productDetail.images.push(imageLink);
    }
  }

  deleteImage(imageLink: string) {
    for (let i = 0; i < this.productDetail.images.length; i++) {
      if (imageLink === this.productDetail.images[i]) {
        this.productDetail.images.splice(i, 1);
        break;
      }
    }
  }

  changeInfo(product: Product){
    Object.assign(this.productDetail, product);
  }

  validate(): any {
    let name = (<HTMLInputElement>document.getElementById("name-edit")).value;
    let brandIndex = (<HTMLInputElement>document.getElementById("brand-edit")).value;
    let brand;
    if (brandIndex === "null") {
      brand = this.productDetail.brand;
    }
    else {
      brand = this.brands[parseInt(brandIndex)];
    }
    let warranty = (<HTMLInputElement>document.getElementById("warranty-edit")).value;
    let color = (<HTMLInputElement>document.getElementById("color-edit")).value;
    let resolutionIndex = (<HTMLInputElement>document.getElementById("resolution-edit")).value;
    let resolution;
    if (resolutionIndex === "null") {
      resolution = this.productDetail.resolution;
    }
    else {
      resolution = this.resolutions[parseInt(resolutionIndex)];
    }
    let sensor = (<HTMLInputElement>document.getElementById("sensor-edit")).value;
    let lens = (<HTMLInputElement>document.getElementById("lens-edit")).value;
    let feature = (<HTMLInputElement>document.getElementById("feature-edit")).value;
    let power_source = (<HTMLInputElement>document.getElementById("power_source-edit")).value;
    let connect_type = (<HTMLInputElement>document.getElementById("connect_type-edit")).value;
    let dimension = (<HTMLInputElement>document.getElementById("dimension-edit")).value;
    let quality = (<HTMLInputElement>document.getElementById("quality-edit")).value;
    let price = (<HTMLInputElement>document.getElementById("price-edit")).value;
    let quantity = (<HTMLInputElement>document.getElementById("quantity-edit")).value;
    let description = (<HTMLInputElement>document.getElementById("description-edit")).value;
    let deliver = (<HTMLInputElement>document.getElementById("deliver-edit")).value;
    let status = (<HTMLInputElement>document.getElementById("status-edit")).value;
    if (status === "null") {
      status = this.productDetail.status;
    }
    let categoryIndex = (<HTMLInputElement>document.getElementById("category-edit")).value;
    let category;
    if (categoryIndex === "null") {
      category = this.productDetail.category;
    }
    else {
      category = this.categories[parseInt(categoryIndex)];
    }
    this.errorMesage = "";

    if (name === "") return this.errorMesage = "Tên sản phẩm không được để trống";
    if (brand === undefined) return this.errorMesage = "Thương hiệu không được để trống";
    if (category === undefined) return this.errorMesage = "Danh mục sản phẩm không được để trống";
    if (resolution === undefined) return this.errorMesage = "Độ phân giải không được để trống";
    if (price === "") return this.errorMesage = "Giá bán không được để trống";
    if (quantity === "") return this.errorMesage = "Số lượng sản phẩm tồn không được để trống";
    if (status === "") return this.errorMesage = "Trạng thái sản phẩm không được để trống";
    if (this.productDetail.thumbnail === "") return this.errorMesage = "Hình đại diện không được để trống";
    if (this.productDetail.images.length < 1) return this.errorMesage = "Sản phẩm cần có ít nhất 1 hình ảnh";
    if (isNaN(parseInt(quantity)) || parseInt(quantity) < 0) return this.errorMesage = "Số lượng sản phẩm không hợp lệ";
    if (isNaN(parseInt(price)) || parseInt(price) < 0) return this.errorMesage = "Giá bán không hợp lệ";

    let numberOfEmptyElement = 0;
    if (warranty === "") numberOfEmptyElement++;
    if (color === "") numberOfEmptyElement++;
    if (sensor === "") numberOfEmptyElement++;
    if (lens === "") numberOfEmptyElement++;
    if (feature === "") numberOfEmptyElement++;
    if (power_source === "") numberOfEmptyElement++;
    if (connect_type === "") numberOfEmptyElement++;
    if (dimension === "") numberOfEmptyElement++;
    if (quality === "") numberOfEmptyElement++;
    if (description === "") numberOfEmptyElement++;
    if (deliver === "") numberOfEmptyElement++;

    // let product = new Product(this.productDetail._id, name, brand, warranty, color, resolution, sensor, lens, feature, power_source,
    //   connect_type, dimension, parseInt(quantity), parseInt(price), quality, this.productDetail.images, description, deliver, this.productDetail.thumbnail, category,
    //   status, this.productDetail.quantity_sale);
    if (numberOfEmptyElement != 0) {
      let confirmValue = confirm("Thông tin sản phẩm có " + numberOfEmptyElement + " trường trống. Bạn có chắc muốn lưu thay đổi?");
      if (confirmValue == true) {
        // this.updateProduct(product);
      }
    }
    else {
      let confirmValue = confirm("Các thay đổi sau khi lưu không thể hoàn tác. Bạn có chắc muốn lưu các thay đổi?")
      if(confirmValue== true){
        // this.updateProduct(product);
      }
    }
  }

  updateProduct(product: Product) {
    this.ProductApiService.updateProduct(product, this.productDetail._id).subscribe(result => {
    })

    this.changeInfo(product);

    let divModal = (<HTMLElement>document.getElementById("editProductModal"));
    document.getElementsByTagName("body")[0].classList.toggle("modal-open");
    divModal.classList.toggle("show");
    divModal.setAttribute("style", "display: none;");
    divModal.removeAttribute("aria-modal");
    divModal.removeAttribute("role");
    divModal.setAttribute("aria-hidden", "true");
    (<HTMLElement>document.getElementsByClassName("modal-backdrop")[0]).remove();
    
    this.clearModal();
    alert("Lưu thay đổi thành công.")
  }

  clearModal() {
    let selects = document.getElementsByTagName("select");
    for (let j = 0; j < selects.length; j++) {
      let firstOption = (<HTMLOptionElement>(<HTMLSelectElement>selects[j]).childNodes[0]);
      firstOption.selected=true;
    }
  }
}
