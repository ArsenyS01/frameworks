import { Component } from '@angular/core';
import  { DataService } from '../data.service';
import { Router } from '@angular/router'; 

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.scss']
})
export class AddComponent {

   ISBN: string = '';
   book: string = '';
   author: string = '';
   publisher: string = '';
   date: string = '';

  constructor(private dataService: DataService, private router: Router) { }

  add(a: string, b: string, c: string, d: string, e: string){
   if(a && b && c && d && e) {
    this.dataService.addItem(a, b, c ,d, e);
    this.ISBN = this.book = this.author = this.publisher = this.date = ''
    this.router.navigate(['/'])
    } else {alert('введены не все значения')}
  }

}
