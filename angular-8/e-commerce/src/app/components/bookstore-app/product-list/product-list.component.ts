import { Component, OnInit, NgModule } from '@angular/core';
import { BooksService } from './product-list.component.service';
import { HttpClient, HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {

  livros: any;
  booksService: BooksService;

  constructor(  booksService: BooksService) {

    this.booksService = booksService;

    // this.booksService = new BooksService();
   }

  ngOnInit(): void {

    this.livros = this.booksService.getBook().subscribe(((data: any) => {
      this.livros = data;
      console.log(this.livros);
    }))

  }

}
