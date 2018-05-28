import { Component, Input } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Book, fakeBookList } from '../shared/book.model';

@Component({
  selector: 'book-details',
  templateUrl: 'book-details.html',
})
export class BookDetailsComponent {
  @Input() book: Book;

  constructor() {
  }


  ionViewDidLoad() {
    console.log('ionViewDidLoad DetailsPage');
  }

}
