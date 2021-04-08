import { Component, Input, OnInit } from '@angular/core';
import { Product } from 'src/app/Data/Types/Product';
import { PrimeNGConfig } from 'primeng/api';

@Component({
  selector: 'app-general-information',
  templateUrl: './general-information.component.html',
  styleUrls: ['./general-information.component.css']
})
export class GeneralInformationComponent implements OnInit {
  @Input() product: Product | undefined;
  img: string | undefined;

  constructor(private primengConfig: PrimeNGConfig) {
  }

  ngOnInit(): void {
    this.primengConfig.ripple=true;
  }

  ngOnChanges(): void {
    if (this.product != undefined) {
      this.img = this.product.images[0];
    }
  }

  changeImage(img: string) {
    this.img = img;
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
}
