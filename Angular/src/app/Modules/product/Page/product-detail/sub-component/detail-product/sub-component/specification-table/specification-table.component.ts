import { Component, Input, OnInit } from '@angular/core';
import { Product } from 'src/app/Data/Types/Product';

@Component({
  selector: 'app-specification-table',
  templateUrl: './specification-table.component.html',
  styleUrls: ['./specification-table.component.css']
})
export class SpecificationTableComponent implements OnInit {
  @Input() product: Product | undefined;
  constructor() { }

  ngOnInit(): void {
  }

}
