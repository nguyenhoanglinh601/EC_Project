import { AfterContentInit, Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges } from '@angular/core';
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
  products: Array<Product> | undefined;

  errorMesage = "";
  set_detail = new Array<Product>();
  constructor(private ProductApiService: ProductApiService) {
  }

  ngOnInit(): void {
    this.getProducts();
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (this.productDetail != undefined && !this.productDetail.product_single) {
      this.set_detail = this.productDetail.set_detail;
    }
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

  changeInfo(product: Product) {
    Object.assign(this.productDetail, product);
  }

  validate(): any {

    let name = (<HTMLInputElement>document.getElementById("name-edit")).value;
    let store_time = (<HTMLInputElement>document.getElementById("store_time-edit")).value;
    let compatible_device_select = (<HTMLSelectElement>document.getElementById("compatible_device-edit")).options;
    let compatible_device = new Array<string>();
    for (let i = 0; i < compatible_device_select.length; i++) {
      if (compatible_device_select[i].selected) compatible_device.push(compatible_device_select[i].value);
    }
    let feature = (<HTMLInputElement>document.getElementById("feature-edit")).value;
    let connect_type = (<HTMLInputElement>document.getElementById("connect_type-edit")).value;
    let quality = (<HTMLInputElement>document.getElementById("quality-edit")).value;
    let price = (<HTMLInputElement>document.getElementById("price-edit")).value;
    let market_price = (<HTMLInputElement>document.getElementById("market_price-edit")).value;
    let quantity = (<HTMLInputElement>document.getElementById("quantity-edit")).value;
    let description = (<HTMLInputElement>document.getElementById("description-edit")).value;
    let deliver = (<HTMLInputElement>document.getElementById("deliver-edit")).value;
    let status = (<HTMLInputElement>document.getElementById("status-edit")).value;
    if(status==="null") status=this.productDetail.status;

    let brand = null, warranty = "", color = "", resolution = null, sensor = "", lens = "", power_source = "", dimension = "", category = null;
    let is_single_product, is_product_set;
    let now_time = Date.now();
    let modifier = Array<string>();
    modifier.push("developer");

    this.errorMesage = "";

    if (name === "") return this.errorMesage = "Tên sản phẩm không được để trống";
    if (price === "") return this.errorMesage = "Giá bán không được để trống";
    if (quantity === "") return this.errorMesage = "Số lượng sản phẩm tồn không được để trống";
    if (this.productDetail.thumbnail === "") return this.errorMesage = "Hình đại diện không được để trống";
    if (this.productDetail.images.length < 1) return this.errorMesage = "Sản phẩm cần có ít nhất 1 hình ảnh";
    if (isNaN(parseInt(quantity)) || parseInt(quantity) < 0) return this.errorMesage = "Số lượng sản phẩm không hợp lệ";
    if (isNaN(parseInt(price)) || parseInt(price) < 0) return this.errorMesage = "Giá bán không hợp lệ";
    if (isNaN(parseInt(market_price)) || parseInt(market_price) < 0) return this.errorMesage = "Giá thị trường không hợp lệ";

    let numberOfEmptyElement = 0;
    if (feature === "") numberOfEmptyElement++;
    if (connect_type === "") numberOfEmptyElement++;
    if (quality === "") numberOfEmptyElement++;
    if (description === "") numberOfEmptyElement++;
    if (deliver === "") numberOfEmptyElement++;
    if (store_time === "") numberOfEmptyElement++;
    if (compatible_device.length === 0) numberOfEmptyElement++;

    if (this.productDetail.product_single) {
      is_single_product = true;
      is_product_set = false;
      let brandIndex = (<HTMLInputElement>document.getElementById("brand-edit")).value;
      if (brandIndex === "null") {
        brand = this.productDetail.brand;
      }
      else {
        brand = this.brands[parseInt(brandIndex)];
      }
      warranty = (<HTMLInputElement>document.getElementById("warranty-edit")).value;
      color = (<HTMLInputElement>document.getElementById("color-edit")).value;
      let resolutionIndex = (<HTMLInputElement>document.getElementById("resolution-edit")).value;
      if (resolutionIndex === "null") {
        resolution = this.productDetail.resolution;
      }
      else {
        resolution = this.resolutions[parseInt(resolutionIndex)];
      }
      sensor = (<HTMLInputElement>document.getElementById("sensor-edit")).value;
      lens = (<HTMLInputElement>document.getElementById("lens-edit")).value;
      power_source = (<HTMLInputElement>document.getElementById("power_source-edit")).value;
      dimension = (<HTMLInputElement>document.getElementById("dimension-edit")).value;
      let categoryIndex = (<HTMLInputElement>document.getElementById("category-edit")).value;
      if (categoryIndex === "null") {
        category = this.productDetail.category;
      }
      else {
        category = this.categories[parseInt(categoryIndex)];
      }

      if (warranty === "") numberOfEmptyElement++;
      if (color === "") numberOfEmptyElement++;
      if (sensor === "") numberOfEmptyElement++;
      if (lens === "") numberOfEmptyElement++;
      if (power_source === "") numberOfEmptyElement++;
      if (dimension === "") numberOfEmptyElement++;
    }
    else {
      is_single_product = false;
      is_product_set = true;
      if (this.set_detail.length < 1) return this.errorMesage = "Bộ sản phẩm cần có ít nhất 1 sản phẩm"
    }

    let product = {
      _id:this.productDetail._id,
      product_single: is_single_product,
      product_set: is_product_set,
      set_detail: this.set_detail,
      name: name,
      brand: brand,
      warranty: warranty,
      color: color,
      resolution: resolution,
      sensor: sensor,
      lens: lens,
      feature: feature,
      power_source: power_source,
      connect_type: connect_type,
      dimension: dimension,
      quality: quality,
      store_time: store_time,
      compatible_device: compatible_device,
      price: price,
      market_price: market_price,
      quantity: quantity,
      images: this.productDetail.images,
      description: description,
      deliver: deliver,
      thumbnail: this.productDetail.thumbnail,
      category: category,
      status: status,
      quantity_sale: 0,
      create_time: this.productDetail.create_time,
      edit_time: now_time,
      modifiers: modifier
    }

    let confirmValue = true;
    if (numberOfEmptyElement != 0) {
      confirmValue = confirm("Thông tin sản phẩm có " + numberOfEmptyElement + " trường trống. Bạn có chắc muốn lưu sản phẩm?");
    }

    if (confirmValue === true) {
      let saved_product = new Product(product);
      console.log(saved_product);
      this.updateProduct(saved_product);
      let divModal = (<HTMLElement>document.getElementById("editProductModal"));
      document.getElementsByTagName("body")[0].classList.toggle("modal-open");
      divModal.classList.toggle("show");
      divModal.setAttribute("style", "display: none;");
      divModal.removeAttribute("aria-modal");
      divModal.removeAttribute("role");
      divModal.setAttribute("aria-hidden", "true");

      this.clearModal();
    }
  }

  updateProduct(product: Product) {
    console.log(this.productDetail._id);
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
      firstOption.selected = true;
    }
  }

  isCheckCompatibleDevice(device: string) {
    let findedDevice = this.productDetail.compatible_device.find(item => {
      return item === device;
    })
    return findedDevice === undefined ? false : true;
  }

  getProducts() {
    this.ProductApiService.getAll().subscribe(products => {
      this.products = products;
    })
  }

  convertPrice(price: number) {
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

  addProductSet(product: Product) {
    let isExist = this.set_detail.find(item => {
      return item._id === product._id;
    });
    let quantityPick = parseInt((<HTMLInputElement>document.getElementById("quantityPick_" + product._id)).value);
    if (quantityPick > 0) {
      if (isExist === undefined) {
        this.set_detail.push(product);
        this.set_detail[this.set_detail.length - 1].quantity = quantityPick;
      }
      else {
        if (isExist.quantity !== quantityPick) isExist.quantity = quantityPick;
      }
    }
    else {
      alert("Số lượng sản phẩm cần thêm không hợp lệ.")
    }
  }

  deleteProductInSet(product: Product) {
    let index = this.set_detail.findIndex(item => {
      return product._id === item._id;
    })
    this.set_detail.splice(index, 1);
  }
}
