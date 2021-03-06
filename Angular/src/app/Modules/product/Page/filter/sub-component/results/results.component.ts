import { Component, Input, OnInit } from '@angular/core';
import { Product } from 'src/app/Data/Types/Product';

@Component({
  selector: 'app-results',
  templateUrl: './results.component.html',
  styleUrls: ['./results.component.css']
})
export class ResultsComponent implements OnInit {
  @Input() products!: Product[];
  constructor() { }

  ngOnInit(): void {
  }

  public isNew(create_time: number){
    return (Date.now()-create_time) < (86400000*30);
  }
}
