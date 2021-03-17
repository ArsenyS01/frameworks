import { Component, OnInit } from '@angular/core';
import ItemI, { DataService } from '../data.service';

@Component({
  selector: 'app-lib',
  templateUrl: './lib.component.html',
  styleUrls: ['./lib.component.scss']
})
export class LibComponent implements OnInit {

  books: ItemI[] = []

  constructor(private dataService: DataService) { }

  remove(id: number){
    this.dataService.books = this.dataService.books.filter(n => n.id !== id + 1)
    this.books = this.dataService.getBooks()
  }

  ngOnInit(): void {
    this.books = this.dataService.getBooks();
  }

}
