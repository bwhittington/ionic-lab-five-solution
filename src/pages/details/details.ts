import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Book, fakeBookList } from '../../components/books/shared/book.model';

/**
 * Generated class for the DetailsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage(
  {
    name: 'details'
  }
)
@Component({
  selector: 'page-details',
  templateUrl: 'details.html',
})
export class DetailsPage {

  bookId: number = 0;
  book: Book;
  bookList:Array<Book> =  fakeBookList;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ngOnInit() {

    this.bookId = this.navParams.get('bookId');
    this.book = this.bookList.find( book => book.id == this.bookId);

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad DetailsPage');
  }

}
