import { Component, Input, OnInit } from '@angular/core';
import { Product } from 'src/app/Data/Types/Product';

@Component({
  selector: 'app-general-information',
  templateUrl: './general-information.component.html',
  styleUrls: ['./general-information.component.css']
})
export class GeneralInformationComponent implements OnInit {
  @Input() product: Product | undefined;
  img: string = "";
  constructor() {
  }

  ngOnInit(): void {
  }

  ngOnChanges(): void {
    if(this.product!=undefined){
      this.img=this.product.images[0];
    }
  }

  changeImage(img: string){
    this.img=img;
  }
}
