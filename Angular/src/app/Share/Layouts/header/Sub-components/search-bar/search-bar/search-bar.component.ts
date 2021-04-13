import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.css']
})
export class SearchBarComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  search(){
    let key_word=(<HTMLInputElement>document.getElementById('key_word')).value;
    if(key_word!=""){
      this.router.navigateByUrl('/search/'+key_word);
    }
  }
}
