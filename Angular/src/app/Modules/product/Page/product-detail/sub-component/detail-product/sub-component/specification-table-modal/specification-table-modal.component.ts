import { Component, Input, OnInit } from '@angular/core';
import { Product } from 'src/app/Data/Types/Product';

@Component({
  selector: 'app-specification-table-modal',
  templateUrl: './specification-table-modal.component.html',
  styleUrls: ['./specification-table-modal.component.css']
})
export class SpecificationTableModalComponent implements OnInit {
  @Input() product: Product | undefined;
  constructor() { }

  ngOnInit(): void {
  }

}
