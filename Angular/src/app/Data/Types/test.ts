export class Book{
    Id: string
    Name: string
    Author: string
    Price: number
    Category: string
    constructor(id: string, name: string, author: string, price: number, category: string)
    {
      this.Id=id;
      this.Name=name;
      this.Author=author;
      this.Price=price;
      this.Category=category;
    }
    
  }