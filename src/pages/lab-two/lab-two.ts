import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Book, fakeBookList } from '../../components/books/shared/book.model';

/**
 * Generated class for the LabTwoPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage({
  name: 'lab-two'
})
@Component({
  selector: 'page-lab-two',
  templateUrl: 'lab-two.html',
})
export class LabTwoPage {

  bookList:Array<Book> =  fakeBookList;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LabTwoPage');
  }

}
