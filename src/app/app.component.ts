import { Component } from '@angular/core';
import {DataService} from './data.service';
import ItemI from './data.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  providers: [DataService]
})

export class AppComponent {
  books: ItemI[] = [];
  title = 'lib';
  constructor(private dataService: DataService){}
}
