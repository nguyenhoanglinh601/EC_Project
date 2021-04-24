
import { Component, Input, OnInit } from '@angular/core';
import { ProductApiService } from 'src/app/Data/Services/product-api.service';
import { Brand } from 'src/app/Data/Types/Brand';
import { Category } from 'src/app/Data/Types/Category';
import { Product } from 'src/app/Data/Types/Product';
import { Resolution } from 'src/app/Data/Types/Resolution';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css']
})
export class AddProductComponent implements OnInit {
  @Input() brands!: Array<Brand>;
  @Input() resolutions!: Array<Resolution>;
  @Input() categories!: Array<Category>;
  products: Array<Product> | undefined;

  product!: Product;
  errorMesage = "";
  thumbnail: string = "";
  images = new Array<string>();
  isSingleProduct: boolean = true;
  set_detail = new Array<Product>();
  constructor(private ProductApiService: ProductApiService) { }

  ngOnInit(): void {
    this.getProducts();
  }

  clearModal() {
    let inputs = document.getElementsByTagName("input");
    for (let i = 0; i < inputs.length; i++) {
      (<HTMLInputElement>inputs[i]).value = "";
    }
    let selects = document.getElementsByTagName("select");
    for (let j = 0; j < selects.length; j++) {
      (<HTMLSelectElement>selects[j]).value = "null";
    }
    this.thumbnail = "";
    this.images.splice(0, this.images.length);
    let textareas = document.getElementsByTagName("textarea");
    for (let k = 0; k < textareas.length; k++) {
      (<HTMLTextAreaElement>textareas[k]).value = "";
    }
  }

  addThumbnail() {
    this.thumbnail = (<HTMLInputElement>document.getElementById("thumbnail")).value;
    this.thumbnail = this.thumbnail.replace("file/d/", "thumbnail?id=");
    this.thumbnail = this.thumbnail.replace("/view?usp=sharing", "");
  }

  deleteThumbnail() {
    this.thumbnail = "";
  }

  addImage() {
    let imageLink = (<HTMLInputElement>document.getElementById("images")).value;
    imageLink = imageLink.replace("file/d/", "thumbnail?id=");
    imageLink = imageLink.replace("/view?usp=sharing", "");
    let isExist = false;
    this.images.forEach(image => {
      if (image === imageLink) isExist = true;
    })
    if (isExist === false) {
      this.images.push(imageLink);
    }
  }

  deleteImage(imageLink: string) {
    for (let i = 0; i < this.images.length; i++) {
      if (imageLink === this.images[i]) {
        this.images.splice(i, 1);
        break;
      }
    }
  }

  validate(): any {
    let name = (<HTMLInputElement>document.getElementById("name")).value;
    let store_time = (<HTMLInputElement>document.getElementById("store_time")).value;
    let compatible_device_select = (<HTMLSelectElement>document.getElementById("compatible_device")).options;
    let compatible_device = new Array<string>();
    for (let i = 0; i < compatible_device_select.length; i++) {
      if (compatible_device_select[i].selected) compatible_device.push(compatible_device_select[i].value);
    }
    let feature = (<HTMLInputElement>document.getElementById("feature")).value;
    let connect_type = (<HTMLInputElement>document.getElementById("connect_type")).value;
    let quality = (<HTMLInputElement>document.getElementById("quality")).value;
    let price = (<HTMLInputElement>document.getElementById("price")).value;
    let market_price = (<HTMLInputElement>document.getElementById("market_price")).value;
    let quantity = (<HTMLInputElement>document.getElementById("quantity")).value;
    let description = (<HTMLInputElement>document.getElementById("description")).value;
    let deliver = (<HTMLInputElement>document.getElementById("deliver")).value;
    let status = (<HTMLInputElement>document.getElementById("status")).value;

    let brand = null, warranty = "", color = "", resolution = null, sensor = "", lens = "", power_source = "", dimension = "", category = null;
    let is_single_product, is_product_set;
    let now_time = Date.now();
    let modifier = Array<string>();
    modifier.push("developer");

    this.errorMesage = "";

    if (name === "") return this.errorMesage = "Tên sản phẩm không được để trống";
    if (price === "") return this.errorMesage = "Giá bán không được để trống";
    if (quantity === "") return this.errorMesage = "Số lượng sản phẩm tồn không được để trống";
    if (status === "") return this.errorMesage = "Trạng thái sản phẩm không được để trống";
    if (this.thumbnail === "") return this.errorMesage = "Hình đại diện không được để trống";
    if (this.images.length < 1) return this.errorMesage = "Sản phẩm cần có ít nhất 1 hình ảnh";
    if (isNaN(parseInt(quantity)) || parseInt(quantity) < 0) return this.errorMesage = "Số lượng sản phẩm không hợp lệ";
    if (isNaN(parseInt(price)) || parseInt(price) <= 0) return this.errorMesage = "Giá bán không hợp lệ";
    if (isNaN(parseInt(market_price)) || parseInt(market_price) < 0) return this.errorMesage = "Giá thị trường không hợp lệ";

    let numberOfEmptyElement = 0;
    if (feature === "") numberOfEmptyElement++;
    if (connect_type === "") numberOfEmptyElement++;
    if (quality === "") numberOfEmptyElement++;
    if (description === "") numberOfEmptyElement++;
    if (deliver === "") numberOfEmptyElement++;
    if (store_time === "") numberOfEmptyElement++;
    if (compatible_device.length === 0) numberOfEmptyElement++;

    if (this.isSingleProduct) {
      is_single_product=true;
      is_product_set=false;
      let brandIndex = (<HTMLInputElement>document.getElementById("brand")).value;
      brand = this.brands[parseInt(brandIndex)];
      warranty = (<HTMLInputElement>document.getElementById("warranty")).value;
      color = (<HTMLInputElement>document.getElementById("color")).value;
      let resolutionIndex = (<HTMLInputElement>document.getElementById("resolution")).value;
      resolution = this.resolutions[parseInt(resolutionIndex)];
      sensor = (<HTMLInputElement>document.getElementById("sensor")).value;
      lens = (<HTMLInputElement>document.getElementById("lens")).value;
      power_source = (<HTMLInputElement>document.getElementById("power_source")).value;
      dimension = (<HTMLInputElement>document.getElementById("dimension")).value;
      let categoryIndex = (<HTMLInputElement>document.getElementById("category")).value;
      category = this.categories[parseInt(categoryIndex)];

      if (brand === undefined) return this.errorMesage = "Thương hiệu không được để trống";
      if (category === undefined) return this.errorMesage = "Danh mục sản phẩm không được để trống";
      if (resolution === undefined) return this.errorMesage = "Độ phân giải không được để trống";

      if (warranty === "") numberOfEmptyElement++;
      if (color === "") numberOfEmptyElement++;
      if (sensor === "") numberOfEmptyElement++;
      if (lens === "") numberOfEmptyElement++;
      if (power_source === "") numberOfEmptyElement++;
      if (dimension === "") numberOfEmptyElement++;
    }
    else {
      is_single_product=false;
      is_product_set=true;
      if (this.set_detail.length < 1) return this.errorMesage = "Bộ sản phẩm cần có ít nhất 1 sản phẩm"
    }

    let product = {
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
      images: this.images,
      description: description,
      deliver: deliver,
      thumbnail: this.thumbnail,
      category: category,
      status: status,
      quantity_sale: 0,
      create_time: now_time,
      edit_time: now_time,
      modifiers: modifier
    }

    let confirmValue=true;
    if (numberOfEmptyElement != 0) {
      confirmValue = confirm("Thông tin sản phẩm có " + numberOfEmptyElement + " trường trống. Bạn có chắc muốn lưu sản phẩm?");    
    }

    if (confirmValue === true) {
      // let product = new ("",name,brand,warranty,color,resolution,sensor,lens,feature,power_source,
      // connect_type,dimension,parseInt(quantity),parseInt(price),quality,this.images,description,deliver,this.thumbnail,category,
      // status,0);
      // this.postProduct(product);
      let saved_product = new Product(product);
      console.log(saved_product);
      this.postProduct(saved_product);
      let divModal = (<HTMLElement>document.getElementById("addProductModal"));
      document.getElementsByTagName("body")[0].classList.toggle("modal-open");
      divModal.classList.toggle("show");
      divModal.setAttribute("style", "display: none;");
      divModal.removeAttribute("aria-modal");
      divModal.removeAttribute("role");
      divModal.setAttribute("aria-hidden", "true");
      (<HTMLElement>document.getElementsByClassName("modal-backdrop")[0]).remove();

      this.clearModal();
    }
  }

  postProduct(product: Product) {
    this.ProductApiService.postProduct(product).subscribe(result => {
      console.log(result);
      if (result != null) {
        alert("Lưu sản phẩm thành công");
        location.reload();
      }
      else {
        alert("Lưu sản phẩm thất bại.");
      }
    })
  }

  changeProductType() {
    this.isSingleProduct = !this.isSingleProduct;
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

  getProducts() {
    this.ProductApiService.getAll().subscribe(products => {
      this.products = products;
    })
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
