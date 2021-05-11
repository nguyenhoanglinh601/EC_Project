import { Component, Input, OnInit, SimpleChanges } from '@angular/core';
import { Observable } from 'rxjs';
import { Product } from 'src/app/Data/Types/Product';

@Component({
  selector: 'app-detail-product',
  templateUrl: './detail-product.component.html',
  styleUrls: ['./detail-product.component.css']
})
export class DetailProductComponent implements OnInit {
  @Input() product: Product | undefined;

  constructor() { }

  ngOnInit(): void {
  }

  openProductDetail(){
    console.log("open");
  }

  lineBreak(content: string){
    return content.split("\n");
  }

  clearLine(line: string){
    return line.replace("\\n","");
  }
}
