import { Component, OnInit } from '@angular/core';
import { BookAPIService } from '../../../Data/Services/book-api.service';
import { Book } from '../../../Data/Types/test';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css']
})
export class TestComponent implements OnInit {
  books = new Array<Book>();
  book: Book | undefined;

  name: string = "Linh";

  body: object = {
    "Id": "6055f240c74fe4e6ef21b8ea",
    "Name": "Web API with ASP .Net core 1",
    "Price": 40,
    "Category": "Computers",
    "Author": "Obama"
  };

  checked: boolean = true;

  constructor(private BookAPIService: BookAPIService) {
  }

  ngOnInit(): void {
    this.getBooks();
  }

  public getBooks() {
    this.BookAPIService.getBooks().subscribe(data => {
      this.books = data.map(item => {
        return new Book(item.Id, item.Name, item.Author, item.Price, item.Category);
      })
    });
  }

  public getBook() {
    this.BookAPIService.getBook('6052b57c7de55528b8fb06f6').subscribe(data => {
      this.book = data;
    });
  }

  public postBook() {
    this.BookAPIService.postBook(this.body).subscribe(data => {
      this.books.push(data);
    })
  }

  public deleteBook(data: string) {
    this.BookAPIService.deleleBook(data).subscribe(data => {
      const index = this.books.findIndex(Id => Id == data);
      this.books.splice(index, 1);
    })
  }

  changeValue(){
    console.log("before: "+this.checked);
    this.checked=!this.checked;
    console.log("after: "+this.checked);
  }
}
